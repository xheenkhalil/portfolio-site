"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

interface NavChild {
    label: string;
    href: string;
    desc: string;
    external?: boolean;
}

interface NavLink {
    label: string;
    href: string;
    children: NavChild[];
}

const navLinks: NavLink[] = [
    {
        label: "Projects",
        href: "/projects",
        children: [
            { label: "Data Analytics", href: "/projects/data-analytics", desc: "Insights from data" },
            { label: "Data Science", href: "/projects/data-science", desc: "ML & AI models" },
            { label: "Fullstack Dev", href: "/projects/web-development", desc: "Web applications" },
            { label: "View All", href: "/projects", desc: "Browse all work" },
        ],
    },
    {
        label: "Expertise",
        href: "/resume",
        children: [
            { label: "Resume / CV", href: "/resume", desc: "Professional background" },
            { label: "Skills", href: "/skills", desc: "Technical proficiency" },
        ],
    },
    {
        label: "Connect",
        href: "#contact",
        children: [
            { label: "LinkedIn", href: "https://www.linkedin.com/in/moses-thomas-61195434a/", desc: "Professional network", external: true },
            { label: "Email", href: "mailto:engrzyfer@gmail.com", desc: "Get in touch", external: true },
        ],
    },
];

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav
            className="sticky top-0 z-50 backdrop-blur-md border-b border-[var(--card-border)]"
            style={{
                background: "color-mix(in oklab, var(--background) 85%, transparent)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight" style={{ color: "var(--brand-raspberry)" }}>
                    Moses<span style={{ color: "var(--brand-tiffany)" }}>.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => setHovered(link.label)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 font-medium py-4 transition-colors hover:text-[var(--brand-melon)]"
                                style={{ color: "var(--foreground)" }}
                            >
                                {link.label}
                                <FaChevronDown size={10} className={`transition-transform ${hovered === link.label ? "rotate-180" : ""}`} />
                            </Link>

                            <AnimatePresence>
                                {hovered === link.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                                    >
                                        <div
                                            className="w-64 p-4 rounded-xl shadow-xl border backdrop-blur-xl"
                                            style={{
                                                background: "var(--card-bg)",
                                                borderColor: "var(--card-border)",
                                            }}
                                        >
                                            <div className="flex flex-col gap-2">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        target={child.external ? "_blank" : undefined}
                                                        rel={child.external ? "noopener noreferrer" : undefined}
                                                        className="group p-2 rounded-lg hover:bg-[var(--brand-tiffany)]/10 transition-colors"
                                                    >
                                                        <div className="font-semibold text-sm group-hover:text-[var(--brand-murrey)] transition-colors">
                                                            {child.label}
                                                        </div>
                                                        <div className="text-xs text-[var(--muted)]">
                                                            {child.desc}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/resume"
                        className="px-4 py-2 rounded-lg font-semibold text-sm transition-transform hover:-translate-y-0.5"
                        style={{
                            background: "var(--brand-raspberry)",
                            color: "white",
                        }}
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 text-2xl"
                        style={{ color: "var(--foreground)" }}
                    >
                        {mobileOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden border-t border-[var(--card-border)]"
                        style={{ background: "var(--background)" }}
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.label}>
                                    <div className="font-bold mb-2 text-[var(--brand-raspberry)]">{link.label}</div>
                                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-[var(--card-border)]">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="text-sm font-medium hover:text-[var(--brand-melon)] transition-colors"
                                                style={{ color: "var(--foreground)" }}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <Link
                                href="/resume"
                                onClick={() => setMobileOpen(false)}
                                className="w-full py-3 rounded-lg font-bold text-center mt-4"
                                style={{
                                    background: "var(--brand-raspberry)",
                                    color: "white",
                                }}
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
