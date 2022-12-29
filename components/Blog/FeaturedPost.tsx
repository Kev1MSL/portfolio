import styles from "../../styles/Blog/FeaturedPost.module.css";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { HashtagIcon } from "@heroicons/react/24/solid";

export type PostProps = {
    title: string;
    description: string;
    image: string;
    date: string;
    tags: string[];
    isFeatured?: boolean;
};
export default function FeaturedPost(props: PostProps) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={styles.postInfo}>
                <h4 className={styles.title}>{props.title}</h4>
                <span className={styles.date}>
                    <CalendarIcon className={styles.dateIcon} /> {props.date}
                </span>
            </div>
            <p className={styles.description}>{props.description}</p>
            <ul className={styles.tagList}>
                <li className={styles.tag}>
                    <HashtagIcon className={styles.tagIcon} />
                    featured
                </li>
                {props.tags.map((v) => {
                    return (
                        <li className={styles.tag}>
                            <HashtagIcon className={styles.tagIcon} />
                            {v}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
