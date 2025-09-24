"use client";
import React from "react";
import { Github, Linkedin, Trophy, Mail } from "lucide-react";

const Footer = () => {
    return (
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
            </div>
        </footer>
    );
};

export default Footer;
