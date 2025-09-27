"use client";
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, filterCategories } from "../info/info.js"; // adjust path if needed

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (

        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Projects
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filterCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <button
                            key={category.key}
                            onClick={() => setActiveFilter(category.key)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === category.key
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
                            {project.image && project.image != "none" && <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                <div className="flex gap-2">
                                    <a
                                        href={project.github}
                                        className="p-2 bg-gray-800/90 rounded-full hover:bg-purple-600 transition-colors"
                                    >
                                        <Github size={16} />
                                    </a>
                                    {project.live && project.live != "#" && <a
                                        href={project.live}
                                        className="p-2 bg-gray-800/90 rounded-full hover:bg-blue-600 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                    </a>}
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
    );
};

export default ProjectsSection;
