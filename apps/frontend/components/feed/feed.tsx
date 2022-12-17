import {useForm} from 'react-hook-form';
import Card from "../card/card";
import styles from "./feed.module.scss"

export interface FeedProps {
  createTweet: (data: unknown) => void
}

export interface FeedForm {
  tweet: string;
}

const mockMarkDown1 = `
# testi test
## even more testi test

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`
`

const mockMarkDown2 =  `I really like using Markdown.

I think I'll use it to format all of my documents from now on.`

const mockMarkDown3 =  `
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.`
export function Feed({createTweet}: FeedProps) {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data: FeedForm) => {
    createTweet(data);
  }
  return (
    <>
      <div className={styles.container}>
        <Card title={"this is the title"} markdown={mockMarkDown3} />
        <Card title={"Another card"} markdown={mockMarkDown1} />
        <Card title={"Another card"} markdown={mockMarkDown2}/>
      </div>


    </>

    // <div className={styles.container}>
    //   <div className={styles.feedContainer}>
    //     <Avatar color="cyan" radius="xl">CG</Avatar>
    //     <form onSubmit={handleSubmit(onSubmit)} className={styles.tweetForm}>
    //
    //       <Input  {...register("tweet")} className={styles.tweetInput}></Input>
    //       <div className={styles.formFooter}>
    //         <Button ml="auto" type="submit">Tweet</Button>
    //
    //       </div>
    //     </form>
    //
    //
    //   </div>
    // </div>
  );
}

export default Feed;
