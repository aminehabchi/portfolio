import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
    title: "Local-Server",
    description:
      "A lightweight, HTTP/1.1-compliant web server implementation in Java built from scratch using non-blocking I/O. This project demonstrates understanding of network protocols, socket programming, and event-driven architecture without relying on established frameworks.",
    image: "none",
    tags: ["Java", "http", "non-blocking I/O", "one-thread", "virtual-hosts", "event - driven"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/Local-Server",
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
  {
    id: 15,
    title: "Echo & Script",
    description:
      "A full-stack social blogging platform that combines content creation with social networking features. this platform enables users to create and share blog posts, interact through likes and comments, follow other users, and communicate in real-time via WebSocket-powered notifications and chat.",
    image: "./echo_script.png",
    tags: ["Spring-boot", "angular", "spring-security", "jwt", "websocket", "postgresql", "docker", "flyway-migrations", "redis", "junit"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/Echo_Script",
    live: "#",
  },
  {
    id: 16,
    title: "Ideathon",
    description:
      "Ideathon is a platform where individuals, startups, and organizations can launch short idea challenges—called ideathons—to gather fresh perspectives, test assumptions, and spark innovation.",
    image: "./ideathon.png",
    tags: ["go", "sqlite", "next.js", "session", "hackthon"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/IdeaThon",
    live: "https://idea-thon.vercel.app/",
  },
  {
    id: 17,
    title: "SeniorifyUI",
    description:
      "a revolutionary Advanced Style Prompt Builder designed to transform any junior front-end developer into a UI expert.",
    image: "/seniorifyui.png",
    tags: ["React", "hackathon", "ai"],
    category: "tools",
    github: "https://github.com/aminehabchi/SeniorifyUI",
    live: "#",
  },
];

export const filterCategories = [
  { key: "all", label: "All", icon: Layers, gradient: "from-amber-600 to-yellow-600", hoverGradient: "from-amber-500 to-yellow-500" },
  { key: "frontend", label: "Frontend", icon: Globe, gradient: "from-amber-600 to-orange-600", hoverGradient: "from-amber-500 to-orange-500" },
  { key: "backend", label: "Backend", icon: Database, gradient: "from-blue-600 to-indigo-600", hoverGradient: "from-blue-500 to-indigo-500" },
  { key: "fullstack", label: "Full Stack", icon: Code, gradient: "from-amber-700 via-yellow-600 to-amber-600", hoverGradient: "from-amber-600 via-yellow-500 to-amber-500" },
  { key: "lowlevel", label: "Low Level", icon: Wrench, gradient: "from-blue-700 to-sky-600", hoverGradient: "from-blue-600 to-sky-500" },
  { key: "tools", label: "Tools", icon: Wrench, gradient: "from-indigo-600 to-blue-600", hoverGradient: "from-indigo-500 to-blue-500" },
];

export const skillsData = {
  frontend: [
    { name: "React", level: 95, color: "#60a5fa" },
    { name: "JavaScript", level: 90, color: "#fbbf24" },
    { name: "TypeScript", level: 85, color: "#3b82f6" },
    { name: "HTML/CSS", level: 90, color: "#fb923c" },
    { name: "Tailwind", level: 85, color: "#22d3ee" },
    { name: "Next.js", level: 80, color: "#ffffff" },
    { name: "Angular", level: 80, color: "#ef4444" },
  ],
  backend: [
    { name: "Node.js", level: 85, color: "#4ade80" },
    { name: "WebSocket", level: 80, color: "#6366f1" },
    { name: "GraphQL", level: 70, color: "#f472b6" },
    { name: "Spring-boot", level: 70, color: "#10b981" },
    { name: "REST APIs", level: 90, color: "#c084fc" },
    { name: "Golang", level: 80, color: "#06b6d4" },
  ],
  database: [
    { name: "PostgreSQL", level: 60, color: "#3b82f6" },
    { name: "SqLite", level: 80, color: "#22c55e" },
  ],
  tools: [
    { name: "VS Code", level: 95, color: "#3b82f6" },
    { name: "Git", level: 70, color: "#f97316" },
    { name: "Docker", level: 65, color: "#0ea5e9" },
    { name: "Postman", level: 60, color: "#fb923c" },
    { name: "Figma", level: 15, color: "#a78bfa" },
    { name: "Canva", level: 60, color: "#ec4899" },
  ],
};

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white scroll-smooth">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

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
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl sm:text-2xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent tracking-tight">
              AH
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 lg:gap-8">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-sm lg:text-base text-slate-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Home
              </a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-sm lg:text-base text-slate-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Skills
              </a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-sm lg:text-base text-slate-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Projects
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-sm lg:text-base text-slate-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
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
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 py-2 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 py-2 cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 py-2 cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 py-2 cursor-pointer"
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0c1222] to-[#1e1b4b]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.12),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full relative z-10">
          {/* Left: Avatar */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 flex items-center justify-center text-4xl sm:text-5xl font-bold shadow-2xl mx-auto ring-4 ring-amber-500/50"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AH
            </motion.div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="text-center lg:text-left flex-1 max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Greeting */}
            <p className="text-slate-300 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-medium">
              Hi there, I am{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl block sm:inline mt-2 sm:mt-0 tracking-tight">
                Amine HABCHI
              </span>
            </p>

            {/* Role */}
            <p className="text-lg sm:text-xl md:text-2xl text-transparent bg-gradient-to-r from-blue-200 via-slate-200 to-blue-300 bg-clip-text mb-4 sm:mb-6 font-semibold">
              Full Stack Developer & Creative Problem Solver
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0 max-w-xl mx-auto lg:mx-0">
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
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/amine-habchi.pdf"
                download="Amine-Habchi.pdf"
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto justify-center shadow-lg shadow-amber-500/30 text-slate-900"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(245, 158, 11, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <Download size={18} className="group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.a>

              <div className="flex flex-wrap gap-3 justify-center">
                <motion.a
                  href="https://github.com/aminehabchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aminehabchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-cyan-600 transition-all duration-300"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/amine_habchi01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300"
                  aria-label="LeetCode"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trophy size={18} />
                </motion.a>
                <motion.a
                  href="mailto:amine.habchi.01@gmail.com"
                  className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300"
                  aria-label="Email"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={16} />
                  <span className="text-xs lg:text-sm">amine.habchi.01@gmail.com</span>
                </motion.a>
                <motion.a
                  href="mailto:amine.habchi.01@gmail.com"
                  className="sm:hidden p-2.5 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300"
                  aria-label="Email"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-700/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="w-full max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent px-4 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-center text-slate-400 mb-12 sm:mb-16 px-4 text-base sm:text-lg">
              My technical expertise across different domains
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="space-y-12 sm:space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {Object.entries(skillsData).map(([category, skills], index) => {
              // Define category-specific colors - Midnight Blue/Gold theme
              const categoryStyles = {
                frontend: {
                  gradient: "from-amber-500/10 via-yellow-500/10 to-amber-500/10",
                  border: "border-amber-500/30",
                  textGradient: "from-amber-400 to-yellow-400",
                  iconBg: "from-amber-500/20 to-yellow-500/20",
                  iconColor: "text-amber-400"
                },
                backend: {
                  gradient: "from-blue-500/10 via-indigo-500/10 to-blue-500/10",
                  border: "border-blue-500/30",
                  textGradient: "from-blue-400 to-indigo-400",
                  iconBg: "from-blue-500/20 to-indigo-500/20",
                  iconColor: "text-blue-400"
                },
                database: {
                  gradient: "from-amber-600/10 via-orange-500/10 to-amber-600/10",
                  border: "border-amber-600/30",
                  textGradient: "from-amber-500 to-orange-400",
                  iconBg: "from-amber-600/20 to-orange-500/20",
                  iconColor: "text-amber-500"
                },
                tools: {
                  gradient: "from-blue-600/10 via-sky-500/10 to-blue-600/10",
                  border: "border-blue-600/30",
                  textGradient: "from-blue-500 to-sky-400",
                  iconBg: "from-blue-600/20 to-sky-500/20",
                  iconColor: "text-blue-500"
                }
              };

              const style = categoryStyles[category] || categoryStyles.frontend;
              const Icon = category === 'frontend' ? Globe :
                category === 'backend' ? Database :
                  category === 'database' ? Database : Wrench;

              return (
                <motion.div
                  key={category}
                  className={`relative bg-gradient-to-r ${style.gradient} backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border ${style.border} overflow-hidden`}
                  variants={fadeInUpVariant}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  {/* Category Header */}
                  <div className="relative flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className={`p-4 bg-gradient-to-br ${style.iconBg} rounded-2xl border ${style.border} shadow-lg`}>
                      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${style.iconColor}`} />
                    </div>
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r ${style.textGradient} bg-clip-text capitalize tracking-tight`}>
                      {category}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        {/* Skill Card */}
                        <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1">
                          {/* Skill Name and Level */}
                          <div className="flex items-start justify-between mb-3">
                            <span className="text-slate-100 font-bold text-base sm:text-lg">
                              {skill.name}
                            </span>
                            <span
                              className="text-sm font-black px-2 py-0.5 rounded-lg"
                              style={{
                                color: skill.color,
                                backgroundColor: `${skill.color}20`
                              }}
                            >
                              {skill.level}%
                            </span>
                          </div>

                          {/* Circular Progress */}
                          <div className="relative w-full aspect-square max-w-[120px] mx-auto">
                            <svg className="w-full h-full -rotate-90 drop-shadow-lg" viewBox="0 0 100 100">
                              {/* Background Circle */}
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="rgba(71, 85, 105, 0.3)"
                                strokeWidth="8"
                              />
                              {/* Progress Circle */}
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke={skill.color}
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 40}`}
                                initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                                whileInView={{
                                  strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100),
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.05 }}
                                style={{
                                  filter: `drop-shadow(0 0 6px ${skill.color}66)`
                                }}
                              />
                            </svg>
                            {/* Center Dot */}
                            <div
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                              style={{ backgroundColor: skill.color }}
                            ></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen py-16 sm:py-20 px-4 sm:px-6 flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent px-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-center text-slate-400 mb-12 sm:mb-16 px-4 text-base sm:text-lg">
              A collection of {projects.length} projects showcasing my skills across different domains
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {filterCategories.map((category) => {
              const isActive = activeFilter === category.key;
              return (
                <motion.button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full font-bold text-xs sm:text-sm md:text-base transition-all duration-300 tracking-wide ${isActive
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg shadow-current/30 ring-2 ring-white/20`
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:shadow-md"
                    }`}
                  variants={scaleInVariant}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredProjects.map((project, index) => {
              // Define category-specific colors - Midnight Blue/Gold theme
              const categoryColors = {
                lowlevel: {
                  border: "border-blue-700/50",
                  hoverBorder: "hover:border-blue-500/70",
                  shadow: "hover:shadow-blue-500/20",
                  gradient: "from-blue-500/10 to-indigo-500/10",
                  badgeBg: "bg-blue-500/20",
                  badgeText: "text-blue-300"
                },
                frontend: {
                  border: "border-amber-700/50",
                  hoverBorder: "hover:border-amber-500/70",
                  shadow: "hover:shadow-amber-500/20",
                  gradient: "from-amber-500/10 to-yellow-500/10",
                  badgeBg: "bg-amber-500/20",
                  badgeText: "text-amber-300"
                },
                backend: {
                  border: "border-blue-700/50",
                  hoverBorder: "hover:border-blue-500/70",
                  shadow: "hover:shadow-blue-500/20",
                  gradient: "from-blue-500/10 to-sky-500/10",
                  badgeBg: "bg-blue-500/20",
                  badgeText: "text-blue-300"
                },
                fullstack: {
                  border: "border-amber-700/50",
                  hoverBorder: "hover:border-amber-500/70",
                  shadow: "hover:shadow-amber-500/20",
                  gradient: "from-amber-500/10 via-yellow-500/10 to-orange-500/10",
                  badgeBg: "bg-amber-500/20",
                  badgeText: "text-amber-300"
                },
                tools: {
                  border: "border-indigo-700/50",
                  hoverBorder: "hover:border-indigo-500/70",
                  shadow: "hover:shadow-indigo-500/20",
                  gradient: "from-indigo-500/10 to-blue-500/10",
                  badgeBg: "bg-indigo-500/20",
                  badgeText: "text-indigo-300"
                },
              };
              const colors = categoryColors[project.category] || categoryColors.frontend;

              return (
                <motion.div
                  key={project.id}
                  className={`group relative bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border ${colors.border} ${colors.hoverBorder} transition-all duration-500 hover:shadow-2xl ${colors.shadow}`}
                  variants={fadeInUpVariant}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  <div className="relative overflow-hidden h-48">
                    {project.image && project.image !== "none" ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.category === 'lowlevel' ? 'from-blue-900/40 via-slate-900 to-indigo-900/40' :
                        project.category === 'frontend' ? 'from-amber-900/40 via-slate-900 to-yellow-900/40' :
                          project.category === 'backend' ? 'from-blue-900/40 via-slate-900 to-sky-900/40' :
                            project.category === 'fullstack' ? 'from-amber-900/40 via-slate-900 to-orange-900/40' :
                              'from-indigo-900/40 via-slate-900 to-blue-900/40'
                        } relative overflow-hidden`}>
                        {/* Animated background effect */}
                        <div className="absolute inset-0 opacity-20">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute ${project.category === 'lowlevel' ? 'bg-blue-500/30' :
                                project.category === 'frontend' ? 'bg-amber-500/30' :
                                  project.category === 'backend' ? 'bg-blue-500/30' :
                                    project.category === 'fullstack' ? 'bg-amber-500/30' :
                                      'bg-indigo-500/30'
                                }`}
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

                        {/* Project category label */}
                        <div className="relative z-10 text-center px-4">
                          {project.category === "lowlevel" && (
                            <div className="inline-block">
                              <div className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text mb-2">
                                LOW LEVEL
                              </div>
                              <div className="flex gap-2 justify-center">
                                <div className="w-12 sm:w-16 h-1 bg-blue-500 rounded"></div>
                                <div className="w-8 sm:w-12 h-1 bg-sky-500 rounded"></div>
                                <div className="w-6 sm:w-8 h-1 bg-indigo-500 rounded"></div>
                              </div>
                            </div>
                          )}
                          {project.category === "frontend" && (
                            <div className="inline-block">
                              <div className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text mb-2">
                                FRONTEND
                              </div>
                              <div className="flex gap-1 justify-center">
                                <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></div>
                                <div
                                  className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                  className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                              </div>
                            </div>
                          )}
                          {project.category === "backend" && (
                            <div className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text">
                              BACKEND
                            </div>
                          )}
                          {project.category === "fullstack" && (
                            <div className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text">
                              FULL STACK
                            </div>
                          )}
                          {project.category === "tools" && (
                            <div className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text">
                              TOOLS
                            </div>
                          )}
                        </div>

                        {/* Corner decoration */}
                        <div className={`absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${project.category === 'lowlevel' ? 'from-blue-500/20' :
                          project.category === 'frontend' ? 'from-amber-500/20' :
                            project.category === 'backend' ? 'from-blue-500/20' :
                              project.category === 'fullstack' ? 'from-amber-500/20' :
                                'from-indigo-500/20'
                          } to-transparent`}></div>
                        <div className={`absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tr ${project.category === 'lowlevel' ? 'from-sky-500/20' :
                          project.category === 'frontend' ? 'from-yellow-500/20' :
                            project.category === 'backend' ? 'from-indigo-500/20' :
                              project.category === 'fullstack' ? 'from-orange-500/20' :
                                'from-blue-500/20'
                          } to-transparent`}></div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="relative p-5 sm:p-6 flex flex-col h-full">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-bold ${colors.badgeBg} ${colors.badgeText} rounded-full uppercase tracking-wider`}>
                        {project.category.replace('lowlevel', 'low level').replace('fullstack', 'full stack')}
                      </span>
                      {/* Links */}
                      <div className="flex gap-2">
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-700/50 rounded-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
                            aria-label="View on GitHub"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} />
                          </a>
                        )}
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-700/50 rounded-lg hover:bg-cyan-600 transition-all duration-300 hover:scale-110"
                            aria-label="View live demo"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black mb-3 text-slate-100 group-hover:text-white transition-colors tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                      {project.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold bg-slate-700/70 text-slate-300 rounded-lg group-hover:bg-slate-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold bg-slate-700/70 text-slate-400 rounded-lg">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent tracking-tight">
              Let's Connect
            </h2>
            <p className="text-slate-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl px-4 font-medium">
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* CV Link */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleInVariant}
          >
            <motion.a
              href="https://cv.emage-me.com/me/amine-habchi-R5rIw9qyVmANeH9EkHyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 rounded-full text-slate-900 font-semibold transition-all duration-300 shadow-lg shadow-amber-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              <ExternalLink size={20} className="relative z-10" />
              <span className="relative z-10">View My Interactive CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.a
              href="https://github.com/aminehabchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300 shadow-lg"
              aria-label="GitHub"
              variants={scaleInVariant}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/amine-habchi-1a9aa4237/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-cyan-600 transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
              variants={scaleInVariant}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/amine_habchi01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300 shadow-lg"
              aria-label="LeetCode"
              variants={scaleInVariant}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Trophy size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="mailto:amine.habchi.01@gmail.com"
              className="p-3 sm:p-4 rounded-full bg-slate-800 hover:bg-emerald-600 transition-all duration-300 shadow-lg"
              aria-label="Email"
              variants={scaleInVariant}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
          <p className="text-slate-500 text-xs sm:text-sm px-4">
            © 2025 Amine HABCHI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;