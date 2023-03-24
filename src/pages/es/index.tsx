import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Home from '@/components/pageComponents/Home';
import Seo from '@/components/Seo';

export default function EsHomePage() {
  return (
    <Layout>
      <Seo templateTitle='La Coalición Internacional de Pastores Cristianos' />

      <Nav variant='es' />

      <Home lang='es' />

      <Footer variant='es' />
    </Layout>
  );
}
