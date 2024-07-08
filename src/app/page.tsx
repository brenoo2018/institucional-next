import {
  Divider,
  SectionCourses,
  SectionDepositions,
  SectionOurStudent,
  SectionStatistics,
  SectionTrust,
} from '@/components/';

export default function Home() {
  return (
    <>
      <Divider />
      <SectionTrust />
      <SectionCourses />
      <SectionStatistics />
      <Divider />
      <SectionDepositions />
      <SectionOurStudent />
    </>
  );
}
