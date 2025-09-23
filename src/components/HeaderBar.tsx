"use client";
import ThemeToggle from "@/components/ThemeToggle";
import Sidebar from "@/components/Sidebar";
import { FaBars } from "react-icons/fa";

export default function HeaderBar() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        background: "color-mix(in oklab, var(--background) 85%, transparent)",
        borderBottom: "1px solid var(--card-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Theme toggle */}
        <ThemeToggle />

        {/* Right: Menu (trigger passed into Sidebar) */}
        <Sidebar
          trigger={
            <button className="px-6 py-3 bg-melon text-[color:var(--foreground)] font-semibold rounded-lg shadow hover:opacity-90 transition text-lg flex items-center gap-2">
              <FaBars /> Menu
            </button>
          }
        />
      </div>
    </header>
  );
}
