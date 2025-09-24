import React, { useState } from "react";
import {
  Download,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Code,
  Database,
  Globe,
  Layers,
  Wrench,
  Trophy,
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample projects data
  const projects = [
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
      github: "https://github.com/aminehabchi/social-network",
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
        "Explore the wonders of the universe, one day at a time. This web app connects directly to NASA's Astronomy Picture of the Day (APOD) API, delivering a new, breathtaking image of space each day—along with expert-curated explanations and metadata. Inspired by one of the most visited federal websites, this project makes NASA’s stunning astronomy imagery easily accessible, searchable by date, and enriched with meaningful insights. it brings cosmic beauty and scientific knowledge together in a modernuser-friendly interface.",
      image: "/apod.png",
      tags: ["Js", "HTML", "CSS", "API", "NASA"],
      category: "frontend",
      github: "https://github.com/aminehabchi/APOD",
      live: "#",
    },
    {
      id: 10,
      title: "TCP-CHAT",
      description:
        "A TCP chat server built in both Rust and Go that creates a group chat environment. Users connect to the server using netcat (nc) or any TCP client to participate in real-time group messaging.",
      image: "none",
      tags: ["TCP", "netcat", "rust", "golang", " concurrency"],
      category: "lowlevel",
      github: "https://github.com/aminehabchi/TCP-CHAT",
      live: "#",
    },
    {
      id: 11,
      title: "mini-framework",
      description:
        "A lightweight front-end JavaScript framework built from scratch, featuring virtual DOM, component-based architecture, client-side routing, and state management. Perfect for learning how modern frameworks like React work under the hood or for building small SPAs.",
      image: "none",
      tags: ["framework", "js", "spa", "oop"],
      category: "frontend",
      github: "https://github.com/aminehabchi/mini-framework",
      live: "#",
    },
  ];

  const skillsData = {
    frontend: [
      { name: "React", level: 95, color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", level: 90, color: "from-yellow-500 to-yellow-600" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
      { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Tailwind CSS", level: 85, color: "from-cyan-500 to-blue-500" },
      { name: "Next.js", level: 80, color: "from-gray-700 to-gray-900" },
      { name: "Angular", level: 80, color: "from-gray-700 to-gray-900" },
    ],
    backend: [
      { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
      { name: "WebSocket", level: 80, color: "from-blue-600 to-blue-700" },
      { name: "GraphQL", level: 70, color: "from-pink-500 to-rose-500" },
      { name: "Spring-boot", level: 70, color: "from-pink-500 to-rose-500" },
      { name: "REST APIs", level: 90, color: "from-purple-500 to-purple-600" },
    ],
    database: [
      { name: "PostgreSQL", level: 60, color: "from-blue-700 to-indigo-700" },
      { name: "SqLite", level: 80, color: "from-green-600 to-green-700" },
    ],
    tools: [
      { name: "VS Code", level: 95, color: "from-blue-600 to-blue-700" },
      { name: "Git", level: 70, color: "from-orange-600 to-red-600" },
      { name: "Docker", level: 65, color: "from-blue-400 to-blue-500" },
      { name: "Postman", level: 60, color: "from-orange-500 to-orange-600" },
      { name: "Figma", level: 15, color: "from-purple-500 to-pink-500" },
      { name: "Canva", level: 60, color: "from-purple-500 to-pink-500" },
    ],
  };

  const filterCategories = [
    { key: "all", label: "All", icon: Layers },
    { key: "frontend", label: "Frontend", icon: Globe },
    { key: "backend", label: "Backend", icon: Database },
    { key: "fullstack", label: "Full Stack", icon: Code },
    { key: "lowlevel", label: "Low Level", icon: Wrench },
    { key: "tools", label: "Tools", icon: Wrench },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleDownloadCV = () => {
    alert("CV download would start here!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold">
              JD
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Amine HABCHI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              I develop full-stack web applications using React.js, Next.js,
              Angular, Java, and Go. I build real-time features with WebSockets,
              implement REST APIs, design databases, and create interactive,
              responsive frontends. I also handle authentication, state
              management, and optimize applications for performance and
              usability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleDownloadCV}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full flex items-center gap-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
            </button>
            <div className="flex gap-4">
              <a
                href="https://github.com/aminehabchi"
                className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/amine-habchi-1a9aa4237/"
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/amine_habchi01/"
                className="p-3 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Trophy size={20} />
              </a>
              <a className="p-3 rounded-full bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-110">
                <Mail size={20} />
                amine.habchi.01@gmail.com
              </a>
              <a className="p-3 rounded-full bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-110">
                <Mail size={20} />
                +212 678 179 7790
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="space-y-12">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400 flex items-center justify-center gap-2">
                <Globe size={24} />
                Frontend
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.frontend.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-green-400 flex items-center justify-center gap-2">
                <Code size={24} />
                Backend
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.backend.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-orange-400 flex items-center justify-center gap-2">
                <Database size={24} />
                Database
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.database.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-purple-400 flex items-center justify-center gap-2">
                <Wrench size={24} />
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.tools.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category.key
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 bg-gray-800/90 rounded-full hover:bg-purple-600 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-gray-800/90 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full group-hover:bg-purple-900/50 group-hover:text-blue-200 transition-colors"
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
      <footer className="bg-gray-800/50 py-12 px-6 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Let's build something amazing together.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Trophy size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2025 John Developer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
