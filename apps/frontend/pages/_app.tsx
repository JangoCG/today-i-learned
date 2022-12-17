import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import {Bebas_Neue} from '@next/font/google'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
})

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className={`${bebas.className} app`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
