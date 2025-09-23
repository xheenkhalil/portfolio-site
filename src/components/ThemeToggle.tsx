"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize from DOM (set by inline script) to avoid mismatch
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="fixed top-4 right-20 z-50 px-3 py-2 rounded-lg font-semibold
                 bg-[#ffa69e] text-[#0a0a0a] hover:opacity-90 transition
                 shadow"
      style={{ border: "1px solid rgba(255,255,255,0.15)" }}
    >
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

