import Head from 'next/head';
import Layout from '@/components/layout';
import ContactsSection from '@/components/contacts/contactsSection';

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Контакты" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.svg" sizes="any" />
      </Head>
      <Layout>
        <ContactsSection />
      </Layout>
    </>
  );
}
