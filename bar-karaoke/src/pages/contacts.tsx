import Head from 'next/head';
import Layout from '@/components/layout';

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Контакты" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <h1>Контакты</h1>
      </Layout>
    </>
  );
}