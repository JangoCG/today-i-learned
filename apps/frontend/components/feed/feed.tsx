import {Avatar, Button, Input} from '@mantine/core';
import styles from './feed.module.scss';
import {useForm} from 'react-hook-form';

/* eslint-disable-next-line */
export interface FeedProps {
  createTweet: (data: unknown) => void
}

export interface FeedForm {
  tweet: string;
}

export function Feed({createTweet}: FeedProps) {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data: FeedForm) => {
    createTweet(data);
  }
  return (
    <div className={styles.container}>
      <div className={styles.feedContainer}>
        <Avatar color="cyan" radius="xl">CG</Avatar>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.tweetForm}>

          <Input  {...register("tweet")} className={styles.tweetInput}></Input>
          <div className={styles.formFooter}>
            <Button ml="auto" type="submit">Tweet</Button>

          </div>
        </form>

      </div>
    </div>
  );
}

export default Feed;
