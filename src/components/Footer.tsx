"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-20 border-t border-[var(--card-border)]"
      style={{
        background: "color-mix(in oklab, var(--background) 90%, var(--card-bg))",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold tracking-tight block" style={{ color: "var(--brand-raspberry)" }}>
              Moses<span style={{ color: "var(--brand-tiffany)" }}>.</span>
            </Link>
            <p className="text-[var(--muted)] leading-relaxed">
              Building data-driven applications and stunning web experiences. Let&apos;s turn your complex data into clear insights.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/xheenkhalil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--brand-raspberry)] hover:border-[var(--brand-raspberry)] transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/moses-thomas-61195434a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--brand-tiffany)] hover:border-[var(--brand-tiffany)] transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/xenzyfer2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--brand-melon)] hover:border-[var(--brand-melon)] transition-all"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ color: "var(--foreground)" }}>Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-[var(--muted)] hover:text-[var(--brand-tiffany)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[var(--muted)] hover:text-[var(--brand-tiffany)] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-[var(--muted)] hover:text-[var(--brand-tiffany)] transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--muted)] hover:text-[var(--brand-tiffany)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ color: "var(--foreground)" }}>Services</h3>
            <ul className="space-y-4">
              <li className="text-[var(--muted)]">Data Analytics</li>
              <li className="text-[var(--muted)]">Data Science/ML/AI</li>
              <li className="text-[var(--muted)]">Web Development</li>
              <li className="text-[var(--muted)]">Technical Writing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ color: "var(--foreground)" }}>Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:engrzyfer@gmail.com"
                  className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--brand-melon)] transition-colors"
                >
                  <FaEnvelope />
                  engrzyfer@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--muted)]">
                <FaMapMarkerAlt />
                Remote / Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            © {year} Moses Thomas. All rights reserved.
          </p>
          <p className="text-sm text-[var(--muted)] flex items-center gap-1">
            Made with <FaHeart className="text-[var(--brand-raspberry)]" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
