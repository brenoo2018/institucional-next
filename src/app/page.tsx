import SectionApresentation from '@/components/SectionApresentation';
import SectionCourses from '@/components/SectionCourses';
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
    </main>
  );
};

export default Home;
