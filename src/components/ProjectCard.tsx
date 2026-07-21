"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { DocumentationCarousel } from "./DocumentationCarousel";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  images?: string[];
  gradient: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  imageUrl,
  images,
  gradient,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const allImages = images && images.length > 0 ? images : imageUrl ? [imageUrl] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-indigo-500/30 transition-colors duration-300"
    >
      {/* Visual Thumbnail */}
      {allImages.length > 1 ? (
        <div className="p-2 -mt-4">
          <DocumentationCarousel images={allImages} alt={title} className="max-h-[220px] object-cover" />
        </div>
      ) : allImages.length === 1 && !imageError ? (
        <div className="h-48 w-full relative overflow-hidden group-hover:opacity-90 transition-opacity">
          <img
            src={allImages[0]}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className={`h-48 w-full bg-gradient-to-br ${gradient} flex items-center justify-center p-6 relative overflow-hidden`}>
          {/* Abstract grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
          {/* Animated code/tech circle decoration */}
          <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
            <span className="font-mono text-xs text-white/50">&lt;code /&gt;</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-400 text-sm mt-3 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-900">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
