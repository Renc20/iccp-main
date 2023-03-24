import Divider from '@/components/Divider';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

export default function EnMissionVisionPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Mission & Vision' />
        <Nav />
        <main>
          <InnerHero imageUrl='/images/sky.webp' title='Our Mission & Vision' />

          <section>
            <div className='content container'>
              <h2>Mission Statement</h2>
              <p>
                The International Christian Coalition of Pastors (ICCP) is a
                non-denominational, international group of Christian pastors and
                leaders committed to uniting believers around the world to serve
                God and share the gospel. We strive to empower each other to be
                agents of transformation and reconciliation in our communities,
                to be a light and a witness of God’s love and grace, and to be a
                unified voice in speaking out against injustice, poverty, and
                oppression. We recognize and celebrate the strength of our
                differences, providing our members with the knowledge and
                resources they need to be effective in their mission and to
                foster a spirit of unity among us. Together, we are determined
                to create a better world, rooted in the love of God.
              </p>
              <Divider />
              <div className='mb-16'></div>
              <h2>Vision Statement</h2>
              <p>
                The International Christian Coalition of Pastors (ICCP)
                envisions a world where all believers are united in the mission
                of sharing the gospel and spreading the love of God. We are
                committed to fostering collaboration and fellowship among our
                members, to equipping them with the knowledge and resources they
                need to be effective in their mission, and to providing a safe
                and welcoming space for discussion and dialogue. We seek to be a
                unified voice for the global Christian community, and to bring
                about lasting and meaningful change in our world.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    </>
  );
}
