import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import {Fira_Code} from '@next/font/google'

const firaCodeFont = Fira_Code({
  subsets: ['latin'],
  weight: '400'
})

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className={`${firaCodeFont.className} app`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
