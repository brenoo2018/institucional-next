import SectionApresentation from '@/components/sections/SectionApresentation';
import SectionCourses from '@/components/sections/SectionCourses';
import SectionDepositions from '@/components/sections/SectionDepositions';
import SectionOurStudent from '@/components/sections/SectionOurStudent';
import SectionStatistics from '@/components/sections/SectionStatistics';
import SectionTrust from '@/components/sections/SectionTrust';

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
