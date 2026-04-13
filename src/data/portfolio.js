import { Globe, Database, Code, Wrench } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "0-shell",
    description:
      "A lightweight, standalone shell inspired by BusyBox, built for embedded Linux environments using Rust. Implements core shell commands from scratch without relying on external programs.",
    image: "/0shell.png",
    tags: ["Rust", "Shell", "BusyBox", "Unix"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/0-shell",
    live: null,
  },
  {
    id: 2,
    title: "Local-Server",
    description:
      "An HTTP/1.1-compliant web server in Java built from scratch using non-blocking I/O. Demonstrates understanding of network protocols, socket programming, and event-driven architecture.",
    image: null,
    tags: ["Java", "HTTP", "Non-blocking I/O", "Virtual Hosts"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/Local-Server",
    live: null,
  },
  {
    id: 3,
    title: "JRaffic",
    description:
      "Simulates a four-way traffic intersection with realistic traffic light controls, car movement, and collision detection. Manages traffic flow using priority-based algorithms.",
    image: "/Jraffic.gif",
    tags: ["Java", "JavaFX", "Simulation"],
    category: "backend",
    github: "https://github.com/aminehabchi/jraffic",
    live: null,
  },
  {
    id: 4,
    title: "NeuroFlow",
    description:
      "An ADHD-friendly Chrome extension that attaches todos to each website you visit. Contextual task management built for clarity and simplicity.",
    image: "/neuro.png",
    tags: ["JavaScript", "CSS", "HTML", "Extension"],
    category: "tools",
    github: "https://github.com/aminehabchi/NeuroFlow",
    live: null,
  },
  {
    id: 5,
    title: "Forum",
    description:
      "A web forum application using Go, SQLite, and Docker. Users can communicate through posts and comments, associate categories, like/dislike content, and filter posts.",
    image: "/diagram.png",
    tags: ["Go", "SQLite", "Docker", "HTML/JS"],
    category: "backend",
    github: "https://github.com/aminehabchi/forum.git",
    live: null,
  },
  {
    id: 6,
    title: "Social Network",
    description:
      "A full-stack Facebook-like social networking platform with a Next.js frontend and Go backend. Features authentication, real-time communication via WebSockets, and Docker containerization.",
    image: "/mokeup.png",
    tags: ["Next.js", "Go", "SQLite", "WebSocket", "Docker"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/social-network",
    live: null,
  },
  {
    id: 7,
    title: "CollaboBoard",
    description:
      "A collaborative, real-time whiteboard application in Rust. Multiple users can draw together on a shared canvas over the network with synchronization between clients.",
    image: "/screenshot.gif",
    tags: ["Rust", "Tokio", "TCP", "Serialization"],
    category: "tools",
    github: "https://github.com/aminehabchi/CollaboBoard",
    live: null,
  },
  {
    id: 8,
    title: "Bomberman DOM",
    description:
      "A multiplayer Bomberman game in vanilla JavaScript and WebSockets, without canvas or WebGL. 2–4 players battle until one remains standing.",
    image: "/game.png",
    tags: ["JavaScript", "Node.js", "Socket.io", "Custom Framework"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/bomberman-dom",
    live: null,
  },
  {
    id: 9,
    title: "Space Invaders",
    description:
      "Classic arcade-style Space Invaders built with HTML, CSS, and JavaScript. Players defend against waves of descending aliens while achieving the highest score.",
    image: "/gameplay.png",
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    category: "frontend",
    github: "https://github.com/aminehabchi/Space_Invaders",
    live: null,
  },
  {
    id: 10,
    title: "APOD",
    description:
      "Explore NASA's Astronomy Picture of the Day API. Delivers a new, breathtaking space image each day with expert-curated explanations. Searchable by date.",
    image: "/apod.png",
    tags: ["JavaScript", "HTML", "CSS", "NASA API"],
    category: "frontend",
    github: "https://github.com/aminehabchi/APOD",
    live: null,
  },
  {
    id: 11,
    title: "TCP Chat",
    description:
      "A TCP chat server built in both Rust and Go that creates a group chat environment. Users connect via netcat or any TCP client for real-time group messaging.",
    image: null,
    tags: ["TCP", "Rust", "Go", "Concurrency"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/TCP-CHAT",
    live: null,
  },
  {
    id: 12,
    title: "Mini Framework",
    description:
      "A lightweight front-end JavaScript framework from scratch with virtual DOM, component-based architecture, client-side routing, and state management.",
    image: null,
    tags: ["JavaScript", "Virtual DOM", "SPA", "OOP"],
    category: "frontend",
    github: "https://github.com/aminehabchi/mini-framework",
    live: null,
  },
  {
    id: 13,
    title: "CV",
    description: "A CV built using JavaScript, HTML, and CSS with a classic theme.",
    image: "/cv.png",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    github: "https://github.com/aminehabchi/CV",
    live: "https://aminehabchi.github.io/CV/",
  },
  {
    id: 14,
    title: "FS",
    description:
      "A simple filesystem implementation in Rust. Demonstrates how filesystems work at a low level — managing files, inodes, and blocks programmatically.",
    image: null,
    tags: ["Rust", "Unix", "Filesystem"],
    category: "lowlevel",
    github: "https://github.com/aminehabchi/FS",
    live: null,
  },
  {
    id: 15,
    title: "Market Place",
    description:
      "A distributed e-commerce ecosystem built with a microservices architecture. Features service discovery, an API gateway, async messaging via Kafka, and Redis caching across independently deployable Spring Boot services.",
    image: null,
    tags: ["Spring Boot", "Angular", "Kafka", "MongoDB", "Redis", "Docker", "Microservices"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/market-place",
    live: null,
  },
  {
    id: 16,
    title: "Echo & Script",
    description:
      "A full-stack social blogging platform combining content creation with social features. Users create and share posts, interact through likes/comments, and communicate via real-time WebSocket chat.",
    image: "./echo_script.png",
    tags: ["Spring Boot", "Angular", "JWT", "WebSocket", "PostgreSQL", "Docker"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/Echo_Script",
    live: null,
  },
  {
    id: 17,
    title: "Ideathon",
    description:
      "A platform where individuals and organizations launch short idea challenges to gather fresh perspectives, test assumptions, and spark innovation.",
    image: "./ideathon.png",
    tags: ["Go", "SQLite", "Next.js", "Sessions"],
    category: "fullstack",
    github: "https://github.com/aminehabchi/IdeaThon",
    live: "https://idea-thon.vercel.app/",
  },
  {
    id: 18,
    title: "SeniorifyUI",
    description:
      "An Advanced Style Prompt Builder that transforms junior front-end developers into UI experts using AI-assisted guidance.",
    image: "/seniorifyui.png",
    tags: ["React", "AI", "Hackathon"],
    category: "tools",
    github: "https://github.com/aminehabchi/SeniorifyUI",
    live: "https://seniorify-ui.vercel.app/",
  },
];

export const filterCategories = [
  { key: "fullstack", label: "Full Stack", icon: Code },
  { key: "frontend", label: "Frontend", icon: Globe },
  { key: "backend", label: "Backend", icon: Database },
  { key: "lowlevel", label: "Low Level", icon: Wrench },
  { key: "tools", label: "Tools", icon: Wrench },
];

export const skillsData = {
  Frontend: [
    { name: "Next.js", color: "#e2e8f0" },
    { name: "Angular", color: "#ef4444" },
    { name: "JavaScript (ES6+)", color: "#fbbf24" },
    { name: "TypeScript", color: "#3b82f6" },
    { name: "HTML5", color: "#fb923c" },
    { name: "SCSS", color: "#db2777" },
    { name: "Tailwind CSS", color: "#22d3ee" },
  ],
  Backend: [
    { name: "Node.js", color: "#4ade80" },
    { name: "Go", color: "#06b6d4" },
    { name: "Java", color: "#f97316" },
    { name: "Spring Boot", color: "#6cb52d" },
    { name: "Apache Kafka", color: "#94a3b8" },
    { name: "Redis", color: "#ef4444" },
    { name: "Spring Gateway", color: "#6cb52d" },
    { name: "Spring Eureka", color: "#6cb52d" },
  ],
  Database: [
    { name: "PostgreSQL", color: "#3b82f6" },
    { name: "MongoDB", color: "#10b981" },
    { name: "SQLite", color: "#22c55e" },
  ],
  APIs: [
    { name: "RESTful APIs", color: "#c084fc" },
    { name: "WebSockets", color: "#6366f1" },
  ],
  DevOps: [
    { name: "Git", color: "#f97316" },
    { name: "GitHub", color: "#e2e8f0" },
    { name: "Unix", color: "#fcd34d" },
    { name: "Shell Scripting", color: "#4ade80" },
    { name: "Docker", color: "#0ea5e9" },
  ],
  Tools: [
    { name: "VS Code", color: "#3b82f6" },
    { name: "Postman", color: "#fb923c" },
    { name: "Figma", color: "#a78bfa" },
    { name: "Testing", color: "#ef4444" },
  ],
  "Data Analytics": [
    { name: "NumPy", color: "#4dabf7" },
    { name: "Pandas", color: "#a78bfa" },
    { name: "Data Wrangling", color: "#94a3b8" },
    { name: "Data Visualization", color: "#f472b6" },
  ],
  "AI & ML": [
    { name: "Python", color: "#4dabf7" },
    { name: "Scikit-learn", color: "#f97316" },
    { name: "Keras", color: "#ef4444" },
    { name: "TensorFlow", color: "#fbbf24" },
    { name: "spaCy", color: "#2dd4bf" },
  ],
};
