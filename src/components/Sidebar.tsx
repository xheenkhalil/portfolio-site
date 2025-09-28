"use client";
import { useState, ReactNode } from "react";

export default function Sidebar({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* External trigger from HeaderBar */}
      <div onClick={() => setOpen(true)}>{trigger}</div>

      {/* Dim overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        // --- MODIFIED CLASSES HERE ---
        className={`fixed top-0 left-0 z-50 h-full w-72 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } shadow-2xl **bg-white dark:bg-gray-800**`}
        // --- REMOVED: style={{ background: "var(--sidebar-bg)" }} ---
        aria-hidden={!open}
      >
        {/* --- REMOVED THE TRANSPARENT INNER DIV --- */}
        {/* Inner content starts here */}

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 px-3 py-1 text-lg font-semibold rounded hover:opacity-90 transition"
          style={{ color: "var(--link-color)" }}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 mt-20 px-6">
          <a
            href="/projects/data-analytics"
            className="link text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Data Analytics
          </a>
          <a
            href="/projects/data-science"
            className="link text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Data Science
          </a>
          <a
            href="/projects"
            className="link text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Explore Projects
          </a>
          <a
            href="/resume"
            className="link text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Resume / CV
          </a>
          <a
            href="/skills"
            className="link text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Skills
          </a>
          <a
            href="https://www.linkedin.com/in/moses-thomas-61195434a/"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-lg font-medium"
          >
            LinkedIn
          </a>
          <a href="mailto:engrzyfer@gmail.com.com" className="link text-lg font-medium">
            Send a Message
          </a>
        </nav>
      {/* --- REPLACED: </div> --- */}
      </aside>
    </>
  );
}
