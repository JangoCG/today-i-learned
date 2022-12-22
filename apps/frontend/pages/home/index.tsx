import Feed, {FeedForm} from "../../components/feed/feed";
import {createTweet} from "../../services/tweetService";
import Header from "../../components/header/header";
import {useSession} from "next-auth/react";
import {httpClient} from "../../utils/http-client/axios";


/* eslint-disable-next-line */
export interface HomeProps {
}

export function Home(props: HomeProps) {

  const {data} = useSession();

  const onCreateTweetClick = (data: FeedForm) => {
    createTweet({tweetText: data.tweet})
      .then(res => {
        console.log(res);
      })
  }

  const myMethod = () => {
    httpClient.get("12345").then((res)=> {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }



  return (
    <>
      <Header session={data} />
      <button onClick={myMethod}>hi</button>
      <Feed createTweet={onCreateTweetClick}/>

    </>
  );
}

export default Home;
