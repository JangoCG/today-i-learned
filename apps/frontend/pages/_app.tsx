import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import { Fira_Code } from '@next/font/google';
import 'highlight.js/styles/atom-one-dark.css';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import SessionLoader from '../components/session-loader/session-loader';

const firaCodeFont = Fira_Code({
  subsets: ['latin'],
  weight: '400',
});

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Welcome to frontend!</title>
        </Head>
        <main className={`${firaCodeFont.className} app`}>
          <SessionLoader>
            <Component {...pageProps} />
          </SessionLoader>
        </main>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
