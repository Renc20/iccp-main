import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import SuccessPage from '@/components/pageComponents/Success';
import Seo from '@/components/Seo';

export default function EnThankYouPage() {
  return (
    <Layout>
      <Seo />

      <Nav />

      <SuccessPage />

      <Footer />
    </Layout>
  );
}
