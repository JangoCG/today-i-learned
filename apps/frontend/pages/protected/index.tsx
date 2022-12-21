import styles from './index.module.css';

/* eslint-disable-next-line */
export interface ProtectedProps {}

export function Protected(props: ProtectedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Protected!</h1>
    </div>
  );
}

export default Protected;
