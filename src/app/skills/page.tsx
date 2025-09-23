"use client";
import BackButton from "@/components/BackButton";
import { FaPython, FaDatabase, FaPenFancy, FaChartBar } from "react-icons/fa";
import { SiMysql, SiScikitlearn } from "react-icons/si";

export default function SkillsPage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Back button */}
      <div className="mb-8">
        <BackButton />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--brand-murrey)" }}
        >
          Skills
        </h1>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-lg font-medium">
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
        </ul>
      </div>
    </main>
  );
}
