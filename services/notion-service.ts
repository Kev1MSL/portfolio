import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { Post, PostLink, PostPage } from "@/@types/schema";
import { MdBlock } from "notion-to-md/build/types";

/**
 * Notion services class to handle all Notion related operations
 */
export default class NotionService {
	notionClient: Client;
	notion2md: NotionToMarkdown;
	databaseId: string;

	/**
	 * Constructor to initialize Notion client and Notion to Markdown converter
	 */
	constructor() {
		this.notionClient = new Client({ auth: process.env.NOTION_TOKEN });
		this.notion2md = new NotionToMarkdown({ notionClient: this.notionClient });
		this.databaseId = process.env.NOTION_BLOG_DATABASE_ID ?? "";
		this.notion2md.setCustomTransformer("callout", (block) => {
			const { callout } = block as any;
			if (!callout) return "";
			let icon: string = "";
			if (callout.icon.type === "external") {
				icon = callout.icon.external.url;
			} else if (callout.icon.type === "emoji") {
				icon = callout.icon.emoji;
			}
			const color = callout.color.replace("_background", "");
			const calloutText2Render: any[] = callout.rich_text;
			const calloutText: string = calloutText2Render
				.map(({ plain_text, href }) => {
					if (href !== null) {
						return `[${plain_text}](${href})`;
					}
					return plain_text;
				})
				.join("");
			console.log(calloutText);
			return `<div isCallout={true} icon={"${icon}"} color={"${color}"}>${calloutText}</div>`;
		});
		this.notion2md.setCustomTransformer("image", (block) => {
			const { image } = block as any;
			if (!image) return "";
			const captions = image.caption;
			const caption = captions
				.map((caption: any) => {
					if (caption.href !== null) {
						return `[${caption.plain_text}](${caption.href})`;
					}
					return caption.plain_text;
				})
				.join(" ");
			if (image.type === "file") {
				return `![${caption}](${image.file.url})`;
			} else if (image.type === "external") {
				return `![${caption}](${image.external.url})`;
			}
			return "";
		});
	}

	async isPostPublished(id: string): Promise<PostLink> {
		const response = await this.notionClient.databases.query({
			database_id: this.databaseId,
			filter: {
				and: [
					{
						property: "Published",
						checkbox: {
							equals: true,
						},
					},
					{
						property: "id",
						formula: {
							string: {
								equals: id,
							},
						},
					},
				],
			},
		});
		const result: any = response.results[0];
		return {
			id: result.id,
			isPublished: response.results.length > 0,
			slug: result.properties.Slug.formula.string,
		};
	}

	async getPublishedPosts(): Promise<Post[]> {
		const response = await this.notionClient.databases.query({
			database_id: this.databaseId,
			filter: {
				property: "Published",
				checkbox: {
					equals: true,
				},
			},
			sorts: [
				{
					property: "Created",
					direction: "descending",
				},
			],
		});
		return response.results.map((res) => {
			return NotionService.page2Post(res);
		});
	}

	async getPost(slug: string): Promise<PostPage> {
		let postInfo: Post, content: string;

		const response = await this.notionClient.databases.query({
			database_id: this.databaseId,
			filter: {
				property: "Slug",
				formula: {
					string: {
						equals: slug,
					},
				},
			},
		});

		if (response.results.length === 0) {
			throw new Error("Post not found");
		}

		const page = response.results[0];
		const mdBlocks: MdBlock[] = await this.notion2md.pageToMarkdown(page.id);
		//console.log(mdBlocks);
		content = this.notion2md.toMarkdownString(mdBlocks).toString();
		//console.log(content);

		const authors: string[] = await Promise.all(
			// @ts-ignore
			page.properties.Author.people.map(async (author: any) => {
				const name = await this.notionClient.users.retrieve({
					user_id: author.id,
				});
				return name.name;
			})
		);

		postInfo = NotionService.page2Post(page);

		postInfo.author = authors.join(", ");
		return {
			postInfo,
			content,
		};
	}

	private static page2Post(page: any): Post {
		let cover = page.cover;
		let icon = page.icon;

		if (!cover) cover = "/blog/default_cover.jpg";
		else {
			switch (cover.type) {
				case "file":
					cover = page.cover.file.url;
					break;
				case "external":
					cover = page.cover.external.url;
					break;
				default:
					cover = "/blog/default_cover.jpg";
					break;
			}
		}
		if (!icon) icon = "";
		else {
			switch (icon.type) {
				case "emoji":
					icon = icon.emoji;
					break;
				case "external":
					icon = icon.external.url;
					break;
				default:
					icon = "";
					break;
			}
		}

		return {
			id: page.id,
			title: page.properties.Name.title[0].plain_text,
			tags: page.properties.Tags.multi_select,
			description: page.properties.Description.rich_text[0].plain_text,
			coverImage: cover,
			publishedDate: page.properties.Updated.last_edited_time,
			slug: page.properties.Slug.formula.string,
			icon: icon,
			author: "",
			isFeatured: page.properties.Featured.checkbox,
		};
	}
}
