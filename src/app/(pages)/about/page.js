import AboutMe from "@/app/components/About/AboutMe";
import AboutHeroSection from "@/app/components/About/AboutHeroSection";

export const metadata = {
  title: "About Simran Lalchandani",
};

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutMe />
    </>
  );
};

export default About;
