import { Layers, Globe, Database, Code, Wrench } from "lucide-react";


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
        description: "This is a learning project where I implemented a simple filesystem in Rust. The goal of this project was to understand how filesystems work at a low level and how to manage files, inodes, and blocks programmatically.",
        image: "none",
        tags: ["Rust", "Unix", "Filesystem", "Implimentation"],
        category: "lowlevel",
        github: "https://github.com/aminehabchi/FS",
        live: "#",
    }
];

export const skillsData = {
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
        { name: "Golang", level: 80, color: "from-purple-500 to-purple-600" },
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

export const filterCategories = [
    { key: "all", label: "All", icon: Layers },
    { key: "frontend", label: "Frontend", icon: Globe },
    { key: "backend", label: "Backend", icon: Database },
    { key: "fullstack", label: "Full Stack", icon: Code },
    { key: "lowlevel", label: "Low Level", icon: Wrench },
    { key: "tools", label: "Tools", icon: Wrench },
];