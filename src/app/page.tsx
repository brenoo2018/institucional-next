import SectionApresentation from '@/components/Sections/SectionApresentation';
import SectionCourses from '@/components/Sections/SectionCourses';
import SectionDepositions from '@/components/Sections/SectionDepositions';
import SectionOurStudent from '@/components/Sections/SectionOurStudent';
import SectionStatistics from '@/components/Sections/SectionStatistics';
import SectionTrust from '@/components/Sections/SectionTrust';

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
