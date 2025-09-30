"use client";
import React from "react";
import {
  Download,
  Github,
  Linkedin,
  Trophy,
  Mail,
  MapPin,
  Book,
} from "lucide-react";

const InfoSection = ({ handleDownloadCV }) => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Left: Avatar */}
      <div className="flex-shrink-0">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold shadow-xl mx-auto">
          JD
        </div>
      </div>

      {/* Right: Info */}
      <div className="text-center lg:text-left flex-1">
        {/* Greeting */}
        <p className="text-gray-400 text-3xl md:text-4xl mb-4">
          Hi there, I am{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-extrabold text-4xl md:text-5xl">
            Amine HABCHI
          </span>
        </p>

        {/* Role */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Full Stack Developer & Creative Problem Solver
        </p>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
          I develop full-stack web applications using React.js, Next.js,
          Angular, Java, and Go. I build real-time features with WebSockets,
          implement REST APIs, design databases, and create interactive,
          responsive frontends. I also handle authentication, state management,
          and optimize applications for performance and usability.
        </p>

        {/* School & Location */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8 text-gray-300 justify-center lg:justify-start">
          <div className="flex items-center gap-2">
            <Book size={20} className="text-purple-500" />
            <span>Zone01 Oujda</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-green-500" />
            <span>Casablanca, Morocco</span>
          </div>
        </div>

        {/* Buttons & Socials */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="/amine-habchi.pdf" // Replace with the actual path
            download="Amine-Habchi.pdf" // The filename for the download
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full flex items-center gap-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download CV
          </a>

          <div className="flex gap-3 mt-3 sm:mt-0">
            <a
              href="https://github.com/aminehabchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aminehabchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/amine_habchi01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 hover:scale-110"
            >
              <Trophy size={20} />
            </a>
            <a
              href="mailto:amine.habchi.01@gmail.com"
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} />
              <span className="text-sm">amine.habchi.01@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
