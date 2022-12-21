import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Today I learned</h1>
      <button>login</button>
    </div>
  );
}

export default Header;
