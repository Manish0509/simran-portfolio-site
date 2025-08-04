import MyLatestWork from "@/app/components/Works/MyLatestWork";
import WorkHeroSection from "@/app/components/Works/WorkHeroSection";

export const metadata = {
  title: "Works by Simran Lalchandani",
};
const Works = () => {
  return (
    <>
      <WorkHeroSection />
      <MyLatestWork />
    </>
  );
};

export default Works;
