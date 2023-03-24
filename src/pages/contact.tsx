import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import ContactPage from '@/components/pageComponents/Contact';
import Seo from '@/components/Seo';

export default function EnContactPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Contact Us' />
        <Nav />

        <ContactPage />

        <Footer />
      </Layout>
    </>
  );
}
