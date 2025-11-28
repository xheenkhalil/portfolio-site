"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";

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
        className={`fixed top-0 left-0 z-50 h-full w-72 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} shadow-2xl`}
        aria-hidden={!open}
      >
        {/* Sidebar Background (auto-adjusts for theme) */}
        <div
          className="h-full flex flex-col backdrop-blur-md transition-colors duration-300"
          style={{
            // This line is correct and will use the variables from globals.css
            background: "var(--sidebar-bg, rgba(20,20,20,0.9))",
          }}
        >
          {/* --- <style jsx global> BLOCK REMOVED --- */}

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 px-3 py-1 text-lg font-semibold rounded hover:opacity-90 transition"
            style={{ color: "var(--link-color)" }}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 mt-20 px-6">
            {[
              { href: "/projects/data-analytics", label: "Data Analytics" },
              { href: "/projects/data-science", label: "Data Science" },
              {
                href: "/projects/web-development",
                label: "Fullstack Development",
              },
              { href: "/projects", label: "Explore Projects" },
              { href: "/resume", label: "Resume / CV" },
              { href: "/skills", label: "Skills" },
              {
                href: "https://www.linkedin.com/in/moses-thomas-61195434a/",
                label: "LinkedIn",
                external: true,
              },
              { href: "mailto:engrzyfer@gmail.com", label: "Send a Message" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)} // This works on <Link> too
                className="
                  text-lg font-medium px-4 py-2 rounded-lg transition-all
                  hover:bg-[var(--brand-tiffany,rgba(0,255,255,0.15))]
                  hover:text-[var(--brand-tiffany)]
                  focus:outline-none
                "
                style={{ color: "var(--foreground)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
