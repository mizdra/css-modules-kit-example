import styles from "./Article.module.css";

interface ArticleProps {
  title: string;
  body: string;
}
export function Article({ title, body }: ArticleProps) {
  return (
    <article>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
    </article>
  );
}
