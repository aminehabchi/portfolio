

import Footer from "./sections/footer";
import SkillsSection from "./sections/Skills";
import InfoSection from "./sections/genereale_info";
import ProjectsSection from "./sections/projects";

const Portfolio = () => {


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}


      <InfoSection />

      <SkillsSection />

      <ProjectsSection />

      <Footer />
    </div>
  );
};

export default Portfolio;
