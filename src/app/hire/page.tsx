"use client";
import { FaUpwork, FaYoutube } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { MdWork } from "react-icons/md";

export default function HirePage() {
  return (
    <main
      className="min-h-screen px-6 py-16 flex flex-col items-center"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >

      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--brand-murrey)" }}
      >
        Hire Me
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
        <a
          href="https://upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition"
        >
          <FaUpwork size={50} className="text-green-600" />
          Upwork
        </a>
        <a
          href="https://fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition"
        >
          <SiFiverr size={50} className="text-emerald-500" />
          Fiverr
        </a>
        <a
          href="https://jobberman.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition"
        >
          <MdWork size={50} className="text-indigo-500" />
          Jobberman
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition"
        >
          <FaYoutube size={50} className="text-red-600" />
          YouTube
        </a>
      </div>

      {/* Contact Me button */}
      <a
        href="mailto:youremail@example.com"
        className="bg-melon text-dark_black font-semibold px-8 py-4 rounded-lg shadow hover:bg-raspberry_rose transition"
      >
        Contact Me
      </a>
    </main>
  );
}

