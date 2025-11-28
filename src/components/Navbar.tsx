"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
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
    children?: NavChild[];
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
        label: "Contact",
        href: "/contact",
    },
    {
        label: "Connect",
        href: "#",
        children: [
            { label: "LinkedIn", href: "https://www.linkedin.com/in/moses-thomas-61195434a/", desc: "Professional network", external: true },
            { label: "Email", href: "mailto:engrzyfer@gmail.com", desc: "Get in touch", external: true },
        ],
    },
];

const featuredProject = {
    title: "Vydra Downloader",
    category: "Web Development",
    image: "/uploads/vydra.png",
    href: "/projects/vydra-downloader"
};

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
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold tracking-tight" style={{ color: "var(--brand-raspberry)" }}>
                    Moses<span style={{ color: "var(--brand-tiffany)" }}>.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => setHovered(link.label)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-2 text-lg font-medium py-6 transition-colors hover:text-[var(--brand-melon)]"
                                style={{ color: "var(--foreground)" }}
                            >
                                {link.label}
                                {link.children && (
                                    <FaChevronDown size={12} className={`transition-transform duration-300 ${hovered === link.label ? "rotate-180" : ""}`} />
                                )}
                            </Link>

                            <AnimatePresence>
                                {hovered === link.label && link.children && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                                    >
                                        <div
                                            className={`p-6 rounded-2xl shadow-2xl border backdrop-blur-xl overflow-hidden ${link.label === "Projects" ? "w-[800px] grid grid-cols-2 gap-8" : "w-72"}`}
                                            style={{
                                                background: "var(--card-bg)",
                                                borderColor: "var(--card-border)",
                                            }}
                                        >
                                            {/* Links Column */}
                                            <div className="flex flex-col gap-3">
                                                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--muted)] mb-2">
                                                    {link.label === "Projects" ? "Categories" : "Menu"}
                                                </h3>
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        target={child.external ? "_blank" : undefined}
                                                        rel={child.external ? "noopener noreferrer" : undefined}
                                                        className="group p-3 rounded-xl hover:bg-[var(--brand-tiffany)]/10 transition-all duration-200 flex items-center justify-between"
                                                    >
                                                        <div>
                                                            <div className="font-bold text-base group-hover:text-[var(--brand-murrey)] transition-colors">
                                                                {child.label}
                                                            </div>
                                                            <div className="text-sm text-[var(--muted)] mt-0.5">
                                                                {child.desc}
                                                            </div>
                                                        </div>
                                                        <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--brand-murrey)]" size={12} />
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Featured Project Column (Only for Projects) */}
                                            {link.label === "Projects" && (
                                                <div className="relative group cursor-pointer">
                                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--muted)] mb-4">
                                                        Featured Project
                                                    </h3>
                                                    <Link href={featuredProject.href} className="block relative h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                                        <Image
                                                            src={featuredProject.image}
                                                            alt={featuredProject.title}
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                                                            <span className="text-[var(--brand-melon)] text-xs font-bold uppercase mb-1">
                                                                {featuredProject.category}
                                                            </span>
                                                            <h4 className="text-white text-xl font-bold mb-1">
                                                                {featuredProject.title}
                                                            </h4>
                                                            <div className="flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-[var(--brand-tiffany)] transition-colors">
                                                                View Case Study <FaArrowRight size={12} />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <ThemeToggle />
                    <Link
                        href="/resume"
                        className="px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-raspberry_rose/20"
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
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="font-bold text-lg mb-2 text-[var(--brand-raspberry)] block"
                                    >
                                        {link.label}
                                    </Link>
                                    {link.children && (
                                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-[var(--card-border)]">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="text-base font-medium hover:text-[var(--brand-melon)] transition-colors"
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/resume"
                                onClick={() => setMobileOpen(false)}
                                className="w-full py-4 rounded-xl font-bold text-center mt-4 text-lg shadow-lg"
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
