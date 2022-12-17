import Feed, {FeedForm} from "../../components/feed/feed";
import {createTweet} from "../../services/tweetService";
import Header from "../../components/header/header";

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

      <Header />
      <Feed createTweet={onCreateTweetClick}/>

    </>
  );
}

export default Home;
