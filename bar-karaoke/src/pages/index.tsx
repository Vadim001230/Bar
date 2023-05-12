import Head from 'next/head';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Караоке-бар</title>
        <meta name="description" content="Караоке-бар" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <h1>Главная</h1>
      </Layout>
    </>
  );
}
