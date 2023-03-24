import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';
import ApplicationPage from '@/components/pageComponents/Application';

export default function EnApplicationPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Application' />
        <Nav />
        <ApplicationPage />
        <Footer />
      </Layout>
    </>
  );
}
