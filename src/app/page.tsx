import SectionApresentation from '@/components/SectionApresentation';
import SectionCourses from '@/components/SectionCourses';
import SectionDepositions from '@/components/SectionDepositions';
import SectionOurStudent from '@/components/SectionOurStudent';
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
      <SectionOurStudent />
    </main>
  );
};

export default Home;
