import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import ContactPage from '@/components/pageComponents/Contact';
import Seo from '@/components/Seo';

export default function EsContactPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Contacto' />
        <Nav variant='es' />

        <ContactPage lang='es' />

        <Footer variant='es' />
      </Layout>
    </>
  );
}
