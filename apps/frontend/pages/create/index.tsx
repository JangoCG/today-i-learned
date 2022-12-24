import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Editor from '../../components/editor/editor';
import TilButton from '../../components/til-button/til-button';
import { createPost } from '../../services/post.service';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface CreateProps {}

export function Create(props: CreateProps) {
  const [markdown, setMarkdown] = useState<string[]>();
  const router = useRouter();

  const onCreatePost = async () => {
    await createPost(markdown.toString());
    router.push('/home');
  };

  return (
    <>
      <h2 className={styles.ctaText}>Create a new TIL using Markdown.</h2>
      <div className={styles.createButton}>
        <TilButton handleButtonClick={onCreatePost} content={'Save!'} />
      </div>
      <div className={styles['container']}>
        <Editor setMarkdown={setMarkdown} />

        <ReactMarkdown
          className={styles.markdownPreview}
          rehypePlugins={[rehypeHighlight]}
        >
          {/*join the markdown array using newline characters*/}
          {markdown && markdown.map((val) => val).join('\r\n')}
        </ReactMarkdown>
      </div>
    </>
  );
}

export default Create;
