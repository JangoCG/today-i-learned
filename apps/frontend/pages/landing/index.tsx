import styles from './index.module.css';

/* eslint-disable-next-line */
export interface LandingProps {}

export function Landing(props: LandingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Landing!</h1>
    </div>
  );
}

export default Landing;
