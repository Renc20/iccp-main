import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

import Resources from '@/components/pageComponents/Resources';

export default function EsResourcesPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Recursos' />
        <Nav variant='es' />

        <Resources lang='es' />

        <Footer variant='es' />
      </Layout>
    </>
  );
}
