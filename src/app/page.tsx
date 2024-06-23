import SectionApresentation from '@/components/SectionApresentation';
import SectionTrust from '@/components/SectionTrust';

const Home = () => {
  return (
    <main>
      <SectionApresentation />
      <div className="divider"></div>
      <SectionTrust />
    </main>
  );
};

export default Home;
