import {
  Divider,
  SectionApresentation,
  SectionCourses,
  SectionDepositions,
  SectionOurStudent,
  SectionStatistics,
  SectionTrust,
} from '@/components/';

export default function Home() {
  return (
    <>
      <SectionApresentation />
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
