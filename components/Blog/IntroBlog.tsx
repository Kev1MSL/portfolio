import styles from "../../styles/Blog/IntroBlog.module.css";

export default function IntroBlog() {
    return (
        <div className={styles.container}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>Kevin's Blog</h1>
                <p className={styles.description}>
                    Welcome to my blog! Here, I will be sharing my thoughts and experiences on various topics.
                </p>
            </div>
        </div>
    );
}
