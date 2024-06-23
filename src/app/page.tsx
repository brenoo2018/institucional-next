import SectionApresentation from '@/components/SectionApresentation';
import SectionCourses from '@/components/SectionCourses';
import SectionDepositions from '@/components/SectionDepositions';
import SectionStatistics from '@/components/SectionStatistics';
import SectionTrust from '@/components/SectionTrust';

const Home = () => {
  return (
    <main>
      <SectionApresentation />
      <div className="divider"></div>
      <SectionTrust />
      <SectionCourses />
      <SectionStatistics />
      <div className="divider"></div>
      <SectionDepositions />
    </main>
  );
};

export default Home;
