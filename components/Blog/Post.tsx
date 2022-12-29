import { PostProps } from "./FeaturedPost";
import styles from "../../styles/Blog/Post.module.css";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { HashtagIcon, StarIcon } from "@heroicons/react/24/solid";
import Pill from "../Pill";

export default function Post(props: PostProps) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt={props.title} />
                <div className={styles.tagList}>
                    {props.isFeatured && (
                        <Pill className={styles.badge}>
                            <span>
                                <StarIcon className={styles.tagIcon} />
                                featured
                            </span>
                        </Pill>
                    )}
                    {props.tags.map((v) => {
                        return (
                            <Pill className={styles.badge}>
                                <span>
                                    <HashtagIcon className={styles.tagIcon} />
                                    {v}
                                </span>
                            </Pill>
                        );
                    })}
                </div>
            </div>
            <div className={styles.postDetails}>
                <div className={styles.postInfo}>
                    <h4 className={styles.title}>{props.title}</h4>
                    <span className={styles.date}>
                        <CalendarIcon className={styles.dateIcon} /> {props.date}
                    </span>
                </div>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    );
}
