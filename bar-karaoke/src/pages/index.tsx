import Head from 'next/head';
import HomePage from '@/components/home/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Karaoke-bar</title>
        <meta name="description" content="Karaoke bar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </>
  );
}
