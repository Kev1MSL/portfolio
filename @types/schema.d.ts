export type Tag = {
	id: string;
	name: string;
};

export type Post = {
	id: string;
	title: string;
	slug: string;
	coverImage: string;
	icon: string;
	tags: Tag[];
	description: string;
	publishedDate: string;
	author: string;
	isFeatured: boolean;
};

export type PostPage = {
	postInfo: Post;
	content: string;
};

export type PostLink = {
	id: string;
	isPublished: boolean;
	slug: string;
};
