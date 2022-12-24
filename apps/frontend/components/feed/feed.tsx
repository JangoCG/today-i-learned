import { PostDto } from '@today-i-learned/types';
import { useRouter } from 'next/router';
import Card from '../card/card';
import styles from './feed.module.scss';

export interface FeedProps {
  createTweet?: (data: unknown) => void;
  posts: PostDto[];
}

export function Feed({ createTweet, posts }: FeedProps) {
  const router = useRouter();

  const navigateToCreateNewTilPage = () => {
    router.push('/create');
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <h1 className={styles.ctaText}>
            Share your new knowledge. <br />
            Someone out there will need it.
          </h1>
          <button
            className={styles.createTilBtn}
            onClick={navigateToCreateNewTilPage}
          >
            Create a new TIL
          </button>
        </div>
        {/* TODO provide keys from backend and replace this index hack*/}
        {posts &&
          posts.map((post, index) => (
            <Card
              key={index}
              title="Title"
              markdown={post.markdown.split(',')}
            />
          ))}
      </div>
    </>
  );
}

export default Feed;
