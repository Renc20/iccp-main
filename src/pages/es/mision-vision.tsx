import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import MissionVisionPage from '@/components/pageComponents/MissionVision';
import Seo from '@/components/Seo';

export default function EsMissionVisionPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Nuetra Misión y Visión' />
        <Nav variant='es' />

        <MissionVisionPage lang='es' />

        <Footer variant='es' />
      </Layout>
    </>
  );
}
