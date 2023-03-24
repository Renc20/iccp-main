import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Home from '@/components/pageComponents/Home';
import Seo from '@/components/Seo';

export default function EnHomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Nav />

      <Home />

      <Footer />
    </Layout>
  );
}
