import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import SuccessPage from '@/components/pageComponents/Success';
import Seo from '@/components/Seo';

export default function EsThankYouPage() {
  return (
    <Layout>
      <Seo templateTitle='Gracias' />

      <Nav variant='es' />

      <SuccessPage lang='es' />

      <Footer variant='es' />
    </Layout>
  );
}
