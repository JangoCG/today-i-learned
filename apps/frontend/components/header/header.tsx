import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
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
      <pre>{session.user.idToken}</pre>
      <Image src={session.user.image} width={50} height={50} alt="" />
      <button onClick={() => signOut({ callbackUrl: '/landing' })}>
        logout
      </button>
    </div>
  );
}

export default Header;
