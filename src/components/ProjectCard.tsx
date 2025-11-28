"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  summary: string;
  image: string;
  github?: string;
  youtube?: string;
  visit?: string;
  slug?: string;
}

export default function ProjectCard({
  title,
  summary,
  image,
  github,
  youtube,
  visit,
  slug,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-xl"
    >
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark_black/90 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3
          className="text-2xl font-bold mb-3 line-clamp-1"
          style={{ color: "var(--brand-tiffany)" }}
        >
          {title}
        </h3>
        <p className="text-gray-300 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
          {summary}
        </p>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {slug && (
            <a
              href={`/projects/${slug}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-tiffany_blue hover:text-dark_black transition-all duration-300"
              title="View Details"
            >
              <FaInfoCircle size={18} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-melon hover:text-dark_black transition-all duration-300"
              title="GitHub Repo"
            >
              <FaGithub size={18} />
            </a>
          )}
          {visit && (
            <a
              href={visit}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-spring_green hover:text-dark_black transition-all duration-300"
              title="Live Site"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
          {youtube && (
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-raspberry_rose hover:text-dark_black transition-all duration-300"
              title="Watch Demo"
            >
              <FaYoutube size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
