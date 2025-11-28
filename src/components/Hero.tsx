"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiFigma,
} from "react-icons/si";

const stackIcons = [
  { Icon: FaPython, color: "#3776AB" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" }, // Dark/Light mode handling might be needed, but black is standard
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: FaGitAlt, color: "#F05032" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: SiRedis, color: "#DC382D" },
  { Icon: SiGraphql, color: "#E10098" },
  { Icon: SiFigma, color: "#F24E1E" },
  { Icon: FaJava, color: "#007396" },
];

export default function Hero() {
  return (
    <section
      className="w-full px-6 md:px-10 py-12 md:py-20 overflow-hidden"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">

        {/* --- Left Group: Image & Text --- */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12 flex-1">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tiffany_blue to-melon blur-lg opacity-50 animate-pulse" />
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-white/10 shadow-2xl object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-2 tracking-tight"
              style={{ color: "var(--brand-tiffany)" }}
            >
              Moses Thomas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-2xl font-medium mb-6"
              style={{ color: "var(--brand-melon)" }}
            >
              Developer • Data Engineer • Writer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full font-bold bg-tiffany_blue text-dark_black hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-tiffany_blue/20"
              >
                Explore Projects
              </Link>
              <Link
                href="/hire"
                className="px-8 py-3 rounded-full font-bold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* --- Right Group: Tech Stack Box --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-md lg:w-[400px] shrink-0"
        >
          <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-tiffany_blue/20 rounded-full blur-3xl group-hover:bg-tiffany_blue/30 transition-colors duration-500" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-melon/20 rounded-full blur-3xl group-hover:bg-melon/30 transition-colors duration-500" />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {stackIcons.map(({ Icon, color }, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6 + index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Icon
                    size={36}
                    color={color}
                    className="drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
