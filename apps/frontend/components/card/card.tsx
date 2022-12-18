import styles from './card.module.scss';
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  markdown: string;
}

export function Card({title, markdown}: CardProps) {
  return (
    <div className={styles.container}>
      <div>
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Card;
