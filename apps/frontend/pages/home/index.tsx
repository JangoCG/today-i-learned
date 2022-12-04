import Sidebar from "../../components/sidebar/sidebar"
import Feed, {FeedForm} from "../../components/feed/feed";
import Trends from "../../components/trends/trends";
import {createTweet} from "../../services/tweetService";

/* eslint-disable-next-line */
export interface HomeProps {
}

export function Home(props: HomeProps) {

  const onCreateTweetClick = (data: FeedForm) => {
    createTweet({tweetText: data.tweet})
      .then(res => {
        console.log(res);
      })
  }

  return (
    <>
      <Sidebar/>
      <Feed createTweet={onCreateTweetClick}/>
      <Trends/>

    </>
  );
}

export default Home;
