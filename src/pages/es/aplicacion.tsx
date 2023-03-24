import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';
import ApplicationPage from '@/components/pageComponents/Application';

export default function EsApplicationPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Aplicacion' />
        <Nav variant='es' />
        <ApplicationPage lang='es' />
        <Footer variant='es' />
      </Layout>
    </>
  );
}
