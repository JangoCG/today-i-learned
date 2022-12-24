import { useSession } from 'next-auth/react';
import React from 'react';
import { setToken } from '../../utils/http-client/axios';

/* eslint-disable-next-line */
export interface SessionLoaderProps {
  children: React.ReactNode;
}

export function SessionLoader({ children }: SessionLoaderProps) {
  const session = useSession();

  if (session.status === 'loading') {
    return <p>loading</p>;
  }

  if (session.status === 'authenticated') {
    setToken(session.data.user.idToken);
  }

  return <>{children}</>;
}

export default SessionLoader;
