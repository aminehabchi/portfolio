import React, { useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Trophy,
  Mail,
  MapPin,
  Book,
  ExternalLink,
  Layers,
  Globe,
  Database,
  Code,
  Wrench,
  Menu,
  X,
} from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "0-shell",
    description:
      "0-Shell is a lightweight, standalone shell inspired by tools like BusyBox, built for embedded Linux environments. It uses Rust to implement core shell commands from scratch, without relying on external programs.",
    image: "/0shell.png",
    tags: ["Rust", "shell", "busybox", "unix"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/0-shell",
    live: "#",
  },
  {
    id: 2,
    title: "SeniorifyUI",
    description:
      "a revolutionary Advanced Style Prompt Builder designed to transform any junior front-end developer into a UI expert.",
    image: "/seniorifyui.png",
    tags: ["React", "hackathon", "ai"],
    category: "tools",
    github: "https://github.com/aminehabchi/SeniorifyUI",
    live: "#",
  },
  {
    id: 3,
    title: "jraffic",
    description:
      "JRaffic simulates a four-way traffic intersection with realistic traffic light controls, car movement, and collision detection. The system manages traffic flow using priority-based algorithms and visual feedback through dynamic traffic lights.",
    image: "/Jraffic.gif",
    tags: ["java", "javaFx", "simulation", "Traffic"],
    category: "backend",
    github: "https://github.com/aminehabchi/jraffic",
    live: "#",
  },
  {
    id: 4,
    title: "NeuroFlow",
    description:
      "An ADHD-friendly Chrome extension that attaches todos to each website you visit. Stay focused and organized with contextual task management, built for clarity and simplicity.",
    image: "/neuro.png",
    tags: ["js", "css", "html", "extension"],
    category: "tools",
    github: "https://github.com/aminehabchi/NeuroFlow",
    live: "#",
  },
  {
    id: 5,
    title: "form",
    description:
      "This project involves building a web forum application using Go, SQLite, and Docker. The forum will allow users to communicate through posts and comments, associate categories with posts, like and dislike content, and filter posts based on various criteria. This project is designed as an educational exercise to reinforce understanding of web development fundamentals, database management, and containerization.",
    image: "/diagram.png",
    tags: ["golang", "html", "js", "docker", "sqlite", "hashing"],
    category: "backend",
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "social-network",
    description:
      "Social Network project, a comprehensive full-stack development undertaking designed to simulate a Facebook-like social networking platform. The project utilizes a JavaScript frontend, a Go backend, and a SQLite database, all containerized using Docker. The goal is to provide a hands-on learning experience encompassing various aspects of web development, including database management, authentication, real-time communication, and deployment.",
    image: "/mokeup.png",
    tags: ["Next.js", "golang", "Migration", "docker", "sqlite", "websocket"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/social-network",
    live: "#",
  },
  {
    id: 7,
    title: "CollaboBoard",
    description:
      "CollaboBoard is a collaborative, real-time whiteboard application written in Rust. It allows multiple users to draw together on a shared canvas over the network, supporting several drawing tools and synchronization between clients and a central server.",
    image: "/screenshot.gif",
    tags: ["Rust", "Serialization", "Tokio", "TCP"],
    category: "tools",
    github: "https://github.com/aminehabchi/CollaboBoard",
    live: "#",
  },
  {
    id: 8,
    title: "Bomberman-dom",
    description:
      "A multiplayer Bomberman game built using vanilla JavaScript and WebSockets, without canvas or WebGL. This project implements a classic Bomberman-style game where 2–4 players can battle until one remains standing.",
    image: "/game.png",
    tags: ["Js", "Node.js", "Socket.io", "Rest API", "custom-framework"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/bomberman-dom",
    live: "#",
  },
  {
    id: 9,
    title: "Space Invaders",
    description:
      "A classic arcade-style Space Invaders game implementation using HTML, CSS, and JavaScript. Players defend against waves of descending aliens while trying to achieve the highest score possible.",
    image: "/gameplay.png",
    tags: ["Js", "HTML", "CSS", "DOM", "Animation"],
    category: "frontend",
    github: "https://github.com/aminehabchi/Space_Invaders",
    live: "#",
  },
  {
    id: 10,
    title: "APOD",
    description:
      "Explore the wonders of the universe, one day at a time. This web app connects directly to NASA's Astronomy Picture of the Day (APOD) API, delivering a new, breathtaking image of space each day—along with expert-curated explanations and metadata. Inspired by one of the most visited federal websites, this project makes NASA's stunning astronomy imagery easily accessible, searchable by date, and enriched with meaningful insights. it brings cosmic beauty and scientific knowledge together in a modernuser-friendly interface.",
    image: "/apod.png",
    tags: ["Js", "HTML", "CSS", "API", "NASA"],
    category: "frontend",
    github: "https://github.com/aminehabchi/APOD",
    live: "#",
  },
  {
    id: 11,
    title: "TCP CHAT",
    description:
      "A TCP chat server built in both Rust and Go that creates a group chat environment. Users connect to the server using netcat (nc) or any TCP client to participate in real-time group messaging.",
    image: "none",
    tags: ["TCP", "netcat", "rust", "golang", " concurrency"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/TCP-CHAT",
    live: "#",
  },
  {
    id: 12,
    title: "mini framework",
    description:
      "A lightweight front-end JavaScript framework built from scratch, featuring virtual DOM, component-based architecture, client-side routing, and state management. Perfect for learning how modern frameworks like React work under the hood or for building small SPAs.",
    image: "none",
    tags: ["framework", "js", "spa", "oop"],
    category: "frontend",
    github: "https://github.com/aminehabchi/mini-framework",
    live: "#",
  },
  {
    id: 13,
    title: "CV",
    description: "a CV build using js ,html, css in old theme",
    image: "/cv.png",
    tags: ["js", "HTML", "CSS"],
    category: "frontend",
    github: "https://github.com/aminehabchi/CV",
    live: "https://aminehabchi.github.io/CV/",
  },
  {
    id: 14,
    title: "FS",
    description:
      "This is a learning project where I implemented a simple filesystem in Rust. The goal of this project was to understand how filesystems work at a low level and how to manage files, inodes, and blocks programmatically.",
    image: "none",
    tags: ["Rust", "Unix", "Filesystem", "Implimentation"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/FS",
    live: "#",
  },
];

export const filterCategories = [
  { key: "all", label: "All", icon: Layers },
  { key: "frontend", label: "Frontend", icon: Globe },
  { key: "backend", label: "Backend", icon: Database },
  { key: "fullstack", label: "Full Stack", icon: Code },
  { key: "lowlevel", label: "Low Level", icon: Wrench },
  { key: "tools", label: "Tools", icon: Wrench },
];

export const skillsData = {
  frontend: [
    { name: "React", level: 95, color: "#3b82f6" },
    { name: "JavaScript", level: 90, color: "#eab308" },
    { name: "TypeScript", level: 85, color: "#2563eb" },
    { name: "HTML/CSS", level: 90, color: "#f97316" },
    { name: "Tailwind", level: 85, color: "#06b6d4" },
    { name: "Next.js", level: 80, color: "#374151" },
    { name: "Angular", level: 80, color: "#dc2626" },
  ],
  backend: [
    { name: "Node.js", level: 85, color: "#22c55e" },
    { name: "WebSocket", level: 80, color: "#2563eb" },
    { name: "GraphQL", level: 70, color: "#ec4899" },
    { name: "Spring-boot", level: 70, color: "#22c55e" },
    { name: "REST APIs", level: 90, color: "#a855f7" },
    { name: "Golang", level: 80, color: "#06b6d4" },
  ],
  database: [
    { name: "PostgreSQL", level: 60, color: "#1d4ed8" },
    { name: "SqLite", level: 80, color: "#16a34a" },
  ],
  tools: [
    { name: "VS Code", level: 95, color: "#2563eb" },
    { name: "Git", level: 70, color: "#ea580c" },
    { name: "Docker", level: 65, color: "#3b82f6" },
    { name: "Postman", level: 60, color: "#f97316" },
    { name: "Figma", level: 15, color: "#a855f7" },
    { name: "Canva", level: 60, color: "#ec4899" },
  ],
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-slate-950 text-white scroll-smooth">
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
      
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AH
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 lg:gap-8">
              <a href="#home" className="text-sm lg:text-base text-slate-300 hover:text-emerald-400 transition-colors duration-300">
                Home
              </a>
              <a href="#skills" className="text-sm lg:text-base text-slate-300 hover:text-emerald-400 transition-colors duration-300">
                Skills
              </a>
              <a href="#projects" className="text-sm lg:text-base text-slate-300 hover:text-emerald-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-sm lg:text-base text-slate-300 hover:text-emerald-400 transition-colors duration-300">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-emerald-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fadeIn">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 py-2"
              >
                Home
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 py-2"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 py-2"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 py-2"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-cyan-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full relative z-10">
          {/* Left: Avatar */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-4xl sm:text-5xl font-bold shadow-2xl mx-auto ring-4 ring-emerald-500/50">
              AH
            </div>
          </div>

          {/* Right: Info */}
          <div className="text-center lg:text-left flex-1 max-w-2xl">
            {/* Greeting */}
            <p className="text-slate-400 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              Hi there, I am{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold text-3xl sm:text-4xl md:text-5xl block sm:inline mt-2 sm:mt-0">
                Amine HABCHI
              </span>
            </p>

            {/* Role */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 sm:mb-6">
              Full Stack Developer & Creative Problem Solver
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0">
              I develop full-stack web applications using React.js, Next.js,
              Angular, Java, and Go. I build real-time features with WebSockets,
              implement REST APIs, design databases, and create interactive,
              responsive frontends. I also handle authentication, state
              management, and optimize applications for performance and
              usability.
            </p>

            {/* School & Location */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-slate-300 justify-center lg:justify-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Book size={18} className="text-emerald-500 flex-shrink-0" />
                <span>Zone01 Oujda</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin size={18} className="text-cyan-500 flex-shrink-0" />
                <span>Casablanca, Morocco</span>
              </div>
            </div>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <a
                href="/amine-habchi.pdf"
                download="Amine-Habchi.pdf"
                className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 w-full sm:w-auto justify-center"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download CV
              </a>

              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/aminehabchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aminehabchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-cyan-600 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/amine_habchi01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                  aria-label="LeetCode"
                >
                  <Trophy size={18} />
                </a>
                <a
                  href="mailto:amine.habchi.01@gmail.com"
                  className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
                  aria-label="Email"
                >
                  <Mail size={16} />
                  <span className="text-xs lg:text-sm">amine.habchi.01@gmail.com</span>
                </a>
                <a
                  href="mailto:amine.habchi.01@gmail.com"
                  className="sm:hidden p-2.5 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950"></div>

        <div className="w-full max-w-7xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent px-4">
            Skills & Technologies
          </h2>
          <p className="text-center text-slate-400 mb-12 sm:mb-16 px-4">
            My technical expertise across different domains
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {category === 'frontend' && (
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                  )}
                  {category === 'backend' && (
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <Database className="w-6 h-6 text-emerald-400" />
                    </div>
                  )}
                  {category === 'database' && (
                    <div className="p-3 bg-teal-500/10 rounded-lg">
                      <Database className="w-6 h-6 text-teal-400" />
                    </div>
                  )}
                  {category === 'tools' && (
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <Wrench className="w-6 h-6 text-cyan-400" />
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-white capitalize">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      {/* Skill Name */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-200 font-medium text-sm sm:text-base">
                          {skill.name}
                        </span>
                      </div>

                      {/* Progress Bar Background */}
                      <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        {/* Animated Progress Bar */}
                        <div
                          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                            boxShadow: `0 0 10px ${skill.color}66`,
                          }}
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>

                        {/* Glow Effect on Hover */}
                        <div
                          className="absolute top-0 left-0 h-full rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen py-16 sm:py-20 px-4 sm:px-6 flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-950"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent px-4">
            Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2">
            {filterCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeFilter === category.key
                      ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                >
                  <Icon size={14} className="sm:hidden" />
                  <Icon size={16} className="hidden sm:block" />
                  <span className="hidden xs:inline">{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800 rounded-lg sm:rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="relative overflow-hidden h-48">
                  {project.image && project.image !== "none" ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
                      {/* Animated background effect */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute bg-emerald-500/30"
                            style={{
                              width: `${Math.random() * 3}px`,
                              height: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                              animationDelay: `${Math.random() * 2}s`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Project icon based on category */}
                      <div className="relative z-10 text-center">
                        {project.category === "lowlevel" && (
                          <div className="space-y-2">
                            <Code size={40} className="sm:w-12 sm:h-12 text-emerald-400 mx-auto" />
                            <div className="flex gap-2 justify-center">
                              <div className="w-12 sm:w-16 h-1 bg-cyan-500 rounded"></div>
                              <div className="w-8 sm:w-12 h-1 bg-emerald-500 rounded"></div>
                              <div className="w-6 sm:w-8 h-1 bg-teal-500 rounded"></div>
                            </div>
                          </div>
                        )}
                        {project.category === "frontend" && (
                          <div className="space-y-2">
                            <Globe size={40} className="sm:w-12 sm:h-12 text-cyan-400 mx-auto" />
                            <div className="flex gap-1 justify-center">
                              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-3 h-3 bg-teal-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        )}
                        {project.category === "backend" && (
                          <Database size={40} className="sm:w-12 sm:h-12 text-teal-400 mx-auto" />
                        )}
                        {project.category === "fullstack" && (
                          <Layers size={40} className="sm:w-12 sm:h-12 text-emerald-400 mx-auto" />
                        )}
                        {project.category === "tools" && (
                          <Wrench size={40} className="sm:w-12 sm:h-12 text-cyan-400 mx-auto" />
                        )}
                      </div>

                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-800/90 rounded-full hover:bg-emerald-600 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-800/90 rounded-full hover:bg-cyan-600 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-100 group-hover:text-white transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-slate-700 text-slate-300 rounded-full group-hover:bg-emerald-900/50 group-hover:text-cyan-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative bg-slate-800/50 py-12 sm:py-16 px-4 sm:px-6 border-t border-slate-700 min-h-[50vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950"></div>

        <div className="max-w-4xl mx-auto text-center w-full relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-slate-400 mb-6 sm:mb-8 text-base sm:text-lg px-4">
            Let's build something amazing together.
          </p>

          {/* CV Link */}
          <div className="mb-8">
            <a
              href="https://cv.emage-me.com/me/amine-habchi-R5rIw9qyVmANeH9EkHyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
            >
              <ExternalLink size={20} />
              <span>View My Interactive CV</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a
              href="https://github.com/aminehabchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/amine-habchi-1a9aa4237/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-cyan-600 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://leetcode.com/u/amine_habchi01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="LeetCode"
            >
              <Trophy size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:amine.habchi.01@gmail.com"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Email"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm px-4">
            © 2025 Amine HABCHI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;