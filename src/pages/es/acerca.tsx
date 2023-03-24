import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import AboutPage from '@/components/pageComponents/About';
import Seo from '@/components/Seo';

export default function EnAboutPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Acerca De' />
        <Nav variant='es' />

        <AboutPage lang='es' />

        <Footer variant='es' />
      </Layout>
    </>
  );
}
