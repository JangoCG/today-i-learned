import { PostDto } from '@today-i-learned/types';
import { useSession } from 'next-auth/react';
import Feed from '../../components/feed/feed';
import Header from '../../components/header/header';
import { getPosts } from '../../services/post.service';

/* eslint-disable-next-line */
export interface HomeProps {
  data: PostDto[];
}

export function Home({ data }: HomeProps) {
  const { data: session } = useSession();

  return (
    <>
      <Header session={session} />
      <Feed posts={data} />
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getPosts();
  // convert the markdown the string back to an array

  // Pass data to the page via props
  return { props: { data } };
}
