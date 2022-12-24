import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  session: Session;
}

export function Header({ session }: HeaderProps) {
  if (!session) {
    return (
      <p>
        <button onClick={() => signIn()}>login</button>
      </p>
    );
  }
  return (
    <div className={styles['container']}>
      <h1>Today I learned</h1>
      <p>{session.user.name}</p>
      <p>{session.user.idToken}</p>
      <img src={session.user.image} alt="" />
      <button onClick={() => signOut({ callbackUrl: '/landing' })}>
        logout
      </button>
    </div>
  );
}

export default Header;
