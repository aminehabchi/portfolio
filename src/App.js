

import Footer from "./sections/footer";
import SkillsSection from "./sections/Skills";
import InfoSection from "./sections/genereale_info";
import ProjectsSection from "./sections/projects";

const Portfolio = () => {


  return (
    <div className="min-h-screen py-6 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900/70 py-5 px-6">
        <InfoSection />
      </section>

      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <SkillsSection />
      </div>

      <section className="py-20 px-6">
        <ProjectsSection />
      </section>
      <footer className="bg-gray-800/50 py-12 px-6 border-t border-gray-700">
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
