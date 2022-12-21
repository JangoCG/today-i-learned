import Feed, {FeedForm} from "../../components/feed/feed";
import {createTweet} from "../../services/tweetService";
import Header from "../../components/header/header";
import { useSession } from "next-auth/react";

/* eslint-disable-next-line */
export interface HomeProps {
}

export function Home(props: HomeProps) {

  const {data} = useSession();
  console.log(data)

  const onCreateTweetClick = (data: FeedForm) => {
    createTweet({tweetText: data.tweet})
      .then(res => {
        console.log(res);
      })
  }



  return (
    <>
      <Header session={data} />
      <Feed createTweet={onCreateTweetClick}/>

    </>
  );
}

export default Home;
