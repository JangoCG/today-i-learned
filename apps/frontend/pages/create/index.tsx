import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface CreateProps {}

export function Create(props: CreateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Create!</h1>
    </div>
  );
}

export default Create;
