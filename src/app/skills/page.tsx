"use client";
import {
  FaPython,
  FaDatabase,
  FaPenFancy,
  FaChartBar,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiScikitlearn,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export default function SkillsPage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--brand-murrey)" }}
        >
          Skills
        </h1>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-lg font-medium">
          {/* --- Existing Skills --- */}
          <li className="flex flex-col items-center gap-2">
            <FaPython size={40} className="text-[color:var(--brand-tiffany)]" />
            Python
          </li>
          <li className="flex flex-col items-center gap-2">
            <SiMysql size={40} className="text-[color:var(--brand-melon)]" />
            SQL
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaChartBar size={40} className="text-[color:var(--brand-raspberry)]" />
            Power BI
          </li>
          <li className="flex flex-col items-center gap-2">
            <SiScikitlearn size={40} className="text-[color:var(--brand-tiffany)]" />
            Machine Learning
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaDatabase size={40} className="text-[color:var(--brand-melon)]" />
            Data Analysis
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaPenFancy size={40} className="text-[color:var(--brand-raspberry)]" />
            Writing
          </li>

          {/* --- NEW WEB DEV SKILLS --- */}
          <li className="flex flex-col items-center gap-2">
            <FaReact size={40} className="text-[color:var(--brand-tiffany)]" />
            React
          </li>
          <li className="flex flex-col items-center gap-2">
            <SiNextdotjs size={40} className="text-[color:var(--brand-melon)]" />
            Next.js
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaNodeJs size={40} className="text-[color:var(--brand-raspberry)]" />
            Node.js
          </li>
          <li className="flex flex-col items-center gap-2">
            <SiTypescript size={40} className="text-[color:var(--brand-tiffany)]" />
            TypeScript
          </li>
          <li className="flex flex-col items-center gap-2">
            <SiJavascript size={40} className="text-[color:var(--brand-melon)]" />
            JavaScript
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaHtml5 size={40} className="text-[color:var(--brand-raspberry)]" />
            HTML5
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaCss3Alt size={40} className="text-[color:var(--brand-tiffany)]" />
            CSS3
          </li>
          <li className="flex flex-col items-center gap-2">
            <SiTailwindcss size={40} className="text-[color:var(--brand-melon)]" />
            Tailwind CSS
          </li>
          <li className="flex flex-col items-center gap-2">
            <SiMongodb size={40} className="text-[color:var(--brand-raspberry)]" />
            MongoDB
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaGitAlt size={40} className="text-[color:var(--brand-tiffany)]" />
            Git
          </li>
        </ul>
      </div>
    </main>
  );
}