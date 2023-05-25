import Head from 'next/head';
import Layout from '@/components/layout';

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Меню</title>
        <meta name="description" content="Меню" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <h1>Меню</h1>
      </Layout>
    </>
  );
}
