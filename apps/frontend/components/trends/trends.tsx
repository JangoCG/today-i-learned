import styles from './trends.module.scss';

/* eslint-disable-next-line */
export interface TrendsProps {}

export function Trends(props: TrendsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Trends!</h1>
    </div>
  );
}

export default Trends;
