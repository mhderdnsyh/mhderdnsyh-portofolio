"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Cpu,
  User,
  Briefcase,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certificates">("experience");

  const highlights = [
    {
      icon: <Code2 size={24} className="text-indigo-400" />,
      title: "Frontend Engineering",
      desc: "Creating high-fidelity user interfaces using React, Next.js, and Tailwind CSS. Obsessed with performance and fluid user experiences.",
    },
    {
      icon: <Cpu size={24} className="text-purple-400" />,
      title: "AI Research",
      desc: "Exploring speech synthesis models. Developed Javanese dialect TTS models using VITS (Variational Inference Text-to-Speech).",
    },
    {
      icon: <GraduationCap size={24} className="text-cyan-400" />,
      title: "Academic Background",
      desc: "Studying Informatics Engineering at State Islamic University of Sultan Syarif Kasim Riau, bridging theoretical computer science with code.",
    },
  ];

  const experiences = [
    {
      role: "Backup Store Leader",
      company: "Sports Station (PT. Mitra Adiperkasa Tbk)",
      logo: "/images/logo-sports-station.png",
      documentationImage: "/images/morning-briefing.png",
      location: "Pekanbaru, Indonesia",
      period: "Jul 2026 - Present",
      points: [
        "Assumed full responsibility for store operations in the absence of the Store Leader. Led morning briefings and set daily sales targets for the team.",
        "Acted as the primary Person in Charge (PIC) for Skechers, 2XU, Impulse, and New Balance brands. Managed stock availability and visual merchandising standards directly.",
        "Oversaw the accuracy of the ETP POS system. Ensured the smooth execution of daily transactions. Monitored Goods In Transit (GIT) data to maintain zero-discrepancy records.",
        "Analyzed daily sales reports to achieve 100% MTD (Month-to-Date) achievement. Formulated upselling strategies for the team.",
        "Managed asset security and data integrity via Mobile Device Management (MDM). Led inventory audits using PDT devices.",
      ],
    },
    {
      role: "Backup Store Leader",
      company: "Puma (PT. Mitra Adiperkasa Tbk)",
      logo: "/images/logo-puma.png",
      location: "Pekanbaru, Indonesia",
      period: "Mar 2026 - Jun 2026",
      points: [
        "Executed store operational and managerial duties as a Backup Store Leader.",
        "Led the team and ensured customer service standards were maintained prior to reassignment to Sports Station.",
      ],
    },
    {
      role: "Store Associate",
      company: "Sports Station (PT. Mitra Adiperkasa Tbk)",
      logo: "/images/logo-sports-station.png",
      location: "Pekanbaru, Indonesia",
      period: "Mar 2024 - Feb 2026",
      points: [
        "Handled international brands (Converse, Adidas, Lotto), including product display and stock control.",
        "Assisted customers with product recommendations and managed cashier transactions.",
        "Contributed to achieving daily sales targets through excellent customer service.",
        "Operated computer-based cashier systems for transaction recording.",
      ],
    },
    {
      role: "Intern Frontend / Backend Developer",
      company: "Lab Inkubator Universitas Islam Negeri Sultan Syarif Kasim Riau",
      logo: "/images/logo-uin.png",
      location: "Pekanbaru, Indonesia",
      period: "Jan 2023 - Feb 2023",
      points: [
        "Developed a Web-based Hadith Search Application (Sunan Abu Dawud) using Laravel Framework and MySQL database.",
        "Designed database schema for efficient hadith storage and retrieval, with keyword-based search and filtering features.",
        "Built responsive frontend with HTML, CSS, and Bootstrap, integrated with Laravel backend.",
        "Collaborated with supervisors and team members to align features with project requirements.",
      ],
    },
    {
      role: "KPPS (Polling Station Working Committee)",
      company: "General Election Commission (KPU)",
      logo: "/images/logo-kpu.png",
      location: "Pekanbaru, Indonesia",
      period: "Feb 2024",
      points: [
        "Managed election procedures including voter list announcement and ballot collection at polling station.",
        "Conducted vote counting with the committee team according to KPU regulations.",
      ],
    },
    {
      role: "Enumerator (Surveyor)",
      company: "Statistics Indonesia (BPS - Regsosek 2022)",
      logo: "/images/logo-bps.png",
      location: "Pekanbaru, Indonesia",
      period: "Oct - Nov 2022",
      points: [
        "Collected household data including demographics, socio-economic conditions, and welfare indicators for national database.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Informatics Engineering",
      institution: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
      logo: "/images/logo-uin.png",
      period: "May 2020 - July 2025",
      grade: "GPA: 3.64 / 4.00",
      thesis: "Text-to-Speech (TTS) for East Javanese Blitar Dialect using VITS (Python, PyTorch)",
      activities: "Infokom Himatif (2023), Hacker Riau DevOps (2023), Community Service Program (KKN) - Lipatkain Utara Village (2023)",
    },
  ];

  const certifications = [
    { title: "Figma for UI/UX Design", issuer: "Udemy", logo: "/images/logo-udemy.png", credentialUrl: "#", date: "Aug 2025" },
    { title: "Flutter Development: From Basic to Advanced UI", issuer: "Udemy", logo: "/images/logo-udemy.png", credentialUrl: "#", date: "Aug 2025" },
    { title: "Database Programming with PL/SQL", issuer: "Oracle Academy", logo: "/images/logo-oracle.png", credentialUrl: "#", date: "Jun 2022" },
    { title: "Database Programming with SQL", issuer: "Oracle Academy", logo: "/images/logo-oracle.png", credentialUrl: "#", date: "Dec 2021" },
    { title: "PHP Course", issuer: "Sololearn", logo: "/images/logo-sololearn.png", credentialUrl: "#", date: "Jun 2022" },
    { title: "JavaScript Course", issuer: "Sololearn", logo: "/images/logo-sololearn.png", credentialUrl: "#", date: "Apr 2022" },
    { title: "UI/UX Design for Beginner", issuer: "Dibimbing.id", logo: "/images/logo-dibimbing.png", credentialUrl: "#", date: "Jan 2022" },
  ];

  const communities = [
    {
      role: "Information & Communication (Infokom) Division",
      org: "Community Service Program (KKN) – Lipatkain Utara Village, Kampar Kiri",
      period: "Jul – Aug 2023",
      desc: "Designed communication media (flyers, ID cards, banners) and developed a landing page website highlighting local profiles and public information services.",
    },
    {
      role: "Staff Member of Infokom",
      org: "Himatif (Informatics Student Association) UIN SUSKA Riau",
      period: "Jan – Dec 2023",
      desc: "Designed social media content, publications, and fundraising posters using Canva and Figma.",
    },
    {
      role: "Community Member / Staff",
      org: "Hacker Riau DevOps",
      period: "2023",
      desc: "Organized community tech discussions and contributed to creating a structured learning roadmap.",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-[#030014]/50 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-2 flex items-center justify-center gap-2">
            <User size={14} />
            <span>Profile</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">About Me</h3>
          <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h4 className="text-2xl font-bold text-white font-mono">
              Hi, I'm Muhammad Erdiansyah.
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              I am an Informatics Engineering graduate from State Islamic University of Sultan Syarif Kasim Riau, Pekanbaru, Indonesia. I specialize in building responsive, modern frontend applications and exploring the practical capabilities of artificial intelligence.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My philosophy, <strong className="text-white font-mono">"Rebuild it, brick by brick,"</strong> represents my commitment to understanding software systems deeply from the ground up, whether it's configuring a robust Next.js application, implementing structured database tables, or optimizing neural network architectures for Speech Synthesis.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex gap-4 hover:border-indigo-500/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tabbed Interactive Section (My Journey) */}
        <div className="border border-white/5 rounded-3xl p-6 md:p-8 bg-zinc-950/20 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-indigo-900/5 blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-900/5 blur-[80px] pointer-events-none"></div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 border-b border-zinc-900 pb-6">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono transition-all duration-300 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10"
              }`}
            >
              <Briefcase size={16} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono transition-all duration-300 cursor-pointer ${
                activeTab === "education"
                  ? "bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10"
              }`}
            >
              <GraduationCap size={16} />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono transition-all duration-300 cursor-pointer ${
                activeTab === "certificates"
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10"
              }`}
            >
              <Award size={16} />
              <span>Certificates & Community</span>
            </button>
          </div>

          {/* Tab content display */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8 relative border-l border-zinc-800 pl-6 ml-2"
                >
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline node dot */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-indigo-500 group-hover:bg-indigo-400 group-hover:scale-110 transition-all duration-300"></span>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <div className="flex items-start gap-4">
                          {exp.logo && (
                            <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain rounded-md bg-white/5 border border-white/10 p-1 mt-1" />
                          )}
                          <div>
                            <h5 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                              {exp.role}
                            </h5>
                            <p className="text-zinc-400 text-sm font-mono">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-zinc-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="flex flex-col gap-2 pl-4 list-disc text-zinc-400 text-sm leading-relaxed">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="hover:text-zinc-300 transition-colors">
                            {pt}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Documentation Image */}
                      {exp.documentationImage && (
                        <div className="mt-4 border border-white/10 rounded-xl overflow-hidden bg-white/5 relative group/img">
                          <img 
                            src={exp.documentationImage} 
                            alt={`Documentation for ${exp.role} at ${exp.company}`}
                            className="w-full h-auto max-h-[300px] object-cover object-center md:object-contain group-hover/img:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <span className="text-white text-xs font-mono font-bold tracking-widest uppercase bg-black/50 px-3 py-1 rounded-full border border-white/20">Documentation</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8 relative border-l border-zinc-800 pl-6 ml-2"
                >
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 group-hover:bg-purple-400 group-hover:scale-110 transition-all duration-300"></span>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div className="flex items-start gap-4">
                          {edu.logo && (
                            <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain rounded-md bg-white/5 border border-white/10 p-1" />
                          )}
                          <div>
                            <h5 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                              {edu.degree}
                            </h5>
                            <p className="text-zinc-400 text-sm font-mono">{edu.institution}</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-zinc-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {edu.period}
                          </span>
                          <span className="text-purple-400 font-bold bg-purple-950/30 px-2 py-0.5 rounded-full border border-purple-900/30">
                            {edu.grade}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 text-zinc-400 text-sm leading-relaxed">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <p className="font-mono text-xs text-purple-400 mb-1 flex items-center gap-1">
                            <BookOpen size={12} /> THESIS TOPIC
                          </p>
                          <p className="text-white font-medium">{edu.thesis}</p>
                        </div>

                        <div>
                          <p className="font-mono text-xs text-zinc-500 mb-1">ACTIVITIES & ORGANIZATIONS</p>
                          <p className="text-zinc-400">{edu.activities}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "certificates" && (
                <motion.div
                  key="certificates"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  {/* Left Column: Certifications */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <h5 className="font-mono text-xs uppercase tracking-widest text-cyan-400 border-b border-zinc-900 pb-3 flex items-center gap-2">
                      <Award size={14} /> Certifications & Courses
                    </h5>
                    <div className="grid grid-cols-1 gap-3">
                      {certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/20 hover:bg-white/10 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
                        >
                          <div className="flex items-center gap-4">
                            {cert.logo && (
                              <img src={cert.logo} alt={cert.issuer} className="w-10 h-10 object-contain rounded-md bg-white/10 p-1" />
                            )}
                            <div>
                              <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {cert.title}
                              </p>
                              <p className="text-xs text-zinc-500 font-mono mt-0.5">{cert.issuer}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                            <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-full flex-shrink-0">
                              {cert.date}
                            </span>
                            {cert.credentialUrl && cert.credentialUrl !== "#" && (
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/10 px-3 py-1 rounded-full transition-all whitespace-nowrap"
                              >
                                Show Credential
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Community & Organizations */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <h5 className="font-mono text-xs uppercase tracking-widest text-indigo-400 border-b border-zinc-900 pb-3 flex items-center gap-2">
                      <CheckCircle2 size={14} /> Community & Organizations
                    </h5>
                    <div className="flex flex-col gap-4">
                      {communities.map((comm, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/20 transition-all"
                        >
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h6 className="text-sm font-bold text-white">{comm.role}</h6>
                            <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-full flex-shrink-0">
                              {comm.period}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-indigo-400 mb-2">{comm.org}</p>
                          <p className="text-xs text-zinc-400 leading-relaxed">{comm.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

