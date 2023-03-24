import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

import Resources from '@/components/pageComponents/Resources';
import { EnResourcesPageContent } from '@/locales/en-US';

export default function EnResourcesPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle={EnResourcesPageContent.title} />
        <Nav />

        <Resources />

        <Footer />
      </Layout>
    </>
  );
}
