"use client";

import React from "react";
import { ProjectCard } from "../ProjectCard";
import { FolderGit2 } from "lucide-react";

export const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Digital Wedding Invitation Platform",
      description: "Developed a responsive and interactive Digital Wedding Invitation web application designed to provide a seamless user experience for digital event invitations. Key features include dynamic guest management, personalized link generation, RSVP tracking, digital guestbook/wishes, and integrated Google Maps for venue navigation. Structured an optimized relational database to efficiently handle RSVP data and digital wishes storage.",
      tags: ["Web App", "Responsive Design", "Relational Database", "Google Maps", "RSVP"],
      githubUrl: "https://github.com/mhderdnsyh",
      demoUrl: "https://surya-juni-wedding.vercel.app/",
      imageUrl: "/images/project-digital-wedding.jpg",
      gradient: "from-rose-600/70 via-pink-600/70 to-red-600/70",
    },
    {
      title: "vits-project",
      description:
        "Developed a Javanese dialect Text-to-Speech (TTS) system using VITS (Variational Inference with adversarial learning). Handled dataset synthesis (LJSpeech format) and model optimization using Python & PyTorch.",
      tags: ["Jupyter Notebook", "Python", "PyTorch", "TTS", "VITS"],
      githubUrl: "https://github.com/mhderdnsyh/vits-project",
      gradient: "from-orange-600/70 via-red-600/70 to-pink-600/70",
    },
    {
      title: "Hadith Search Application (Sunan Abu Dawud)",
      description:
        "A web-based search and filtering system for Hadith collection Sunan Abu Dawud. Built during an internship at Lab Inkubator UIN SUSKA Riau to provide efficient access to hadith references.",
      tags: ["Laravel", "MySQL", "PHP", "Bootstrap", "HTML5", "CSS3"],
      githubUrl: "https://github.com/mhderdnsyh",
      gradient: "from-emerald-600/70 via-teal-600/70 to-cyan-600/70",
    },
    {
      title: "absensi_sd37pku",
      description:
        "A web-based attendance management system built for SD37 Pekanbaru. Enables automated tracking of student and teacher presence, reports generation, and streamlined administrative checks.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/mhderdnsyh/absensi_sd37pku",
      gradient: "from-blue-600/70 via-indigo-600/70 to-purple-600/70",
    },
    {
      title: "Thriftskuy",
      description:
        "An interactive Android mobile application designed as a localized thrift shop marketplace. Developed using native Java code and Firebase backend integration.",
      tags: ["Java", "Android SDK", "Firebase", "Mobile UI"],
      githubUrl: "https://github.com/mhderdnsyh/Thriftskuy",
      gradient: "from-teal-600/70 via-cyan-600/70 to-blue-600/70",
    },
    {
      title: "Aisya2",
      description:
        "A customized corporate administrative and management information system built with PHP to optimize internal reporting, work scheduling, and operations tracking.",
      tags: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap"],
      githubUrl: "https://github.com/mhderdnsyh/Aisya2",
      gradient: "from-purple-600/70 via-fuchsia-600/70 to-pink-600/70",
    },
    {
      title: "Web-based Inventory System",
      description:
        "A responsive CRUD application for managing stock, supplier logs, and inventory assets. Developed as a database-driven mini project.",
      tags: ["PHP Native", "MySQL", "Bootstrap", "HTML5", "CSS3"],
      githubUrl: "https://github.com/mhderdnsyh",
      gradient: "from-zinc-700/70 via-slate-700/70 to-neutral-700/70",
    },
    {
      title: "Lipatkain Utara Village Landing Page",
      description:
        "A localized landing page website developed during the KKN (Community Service) program to highlight public information services, village announcements, and administrative profiles.",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Design Assets"],
      githubUrl: "https://github.com/mhderdnsyh",
      gradient: "from-lime-600/70 via-green-600/70 to-emerald-600/70",
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#030014]/30 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-2 flex items-center justify-center gap-2">
            <FolderGit2 size={14} />
            <span>Portfolio</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h3>
          <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              gradient={project.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
