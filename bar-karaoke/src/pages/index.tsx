import Head from 'next/head';
import Layout from '@/components/layout';
import HomeSection from '@/components/home/homeSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Караоке-бар</title>
        <meta name="description" content="Караоке-бар" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <HomeSection />
      </Layout>
    </>
  );
}
