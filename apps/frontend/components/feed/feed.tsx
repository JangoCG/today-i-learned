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

# Ruby memoization with nil values

As Ruby developers, we're often looking for ways to reduce time consuming lookups in our code. A lot of times, that leads us to memoizing those lookups with the common \`||=\` operator.

However, if our lookups return a nil or falsey value, our memo will actually keep executing the lookup:

~~~ruby
def ticket
  @ticket ||= Ticket.find_by(owner:)
end
~~~

This code essentially boils down to:
~~~ruby
def ticket
  @ticket = @ticket || Ticket.find_by(owner:)
end
~~~

If our \`find_by\` in the example above returns nil, the code will continue to run the \`find_by\` every time we call the \`ticket\` method.

To avoid this, we can shift our pattern a bit, and look to see if we have already set our instance variable or not:

~~~ruby
def ticket
  return @ticket if defined?(@ticket)
  @ticket = Ticket.find_by(owner:)
end
~~~
`

const mockMarkDown2 =  `
# Find Unused Cucumber Step Definitions

One of the challenges of using cucumber is properly managing your step definitions. Left unchecked, you will eventually have many unused steps. It's extremely cumbersome to prune these manually. Luckily, you can use cucumber's \`-f / --format\` flag to get feedback on unused step_definitions and their locations:

~~~bash
bundle exec cucumber --dry-run --format=stepdefs
~~~

If your step definition is unused, it will be annotated with a line under that says \`NOT MATCHED BY ANY STEPS\`. See the example -
~~~shell
/^I submit the proposal request form$/     # features/step_definitions/contact_steps.rb:39
  NOT MATCHED BY ANY STEPS
~~~
`

const mockMarkDown3 = `
~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
~~~`
export function Feed({createTweet}: FeedProps) {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data: FeedForm) => {
    createTweet(data);
  }
  return (
    <>
      <div className={styles.container}>
        <Card title={"this is the title"} markdown={mockMarkDown3} />
        <Card title={"some tutorial xoxo bla"} markdown={mockMarkDown1} />
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
