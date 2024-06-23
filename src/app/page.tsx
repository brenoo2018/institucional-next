import SectionApresentation from '@/components/SectionApresentation';
import SectionCourses from '@/components/SectionCourses';
import SectionTrust from '@/components/SectionTrust';

const Home = () => {
  return (
    <main>
      <SectionApresentation />
      <div className="divider"></div>
      <SectionTrust />
      <SectionCourses />
    </main>
  );
};

export default Home;
