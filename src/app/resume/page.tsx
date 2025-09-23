"use client";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function ResumePage() {
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
          style={{ color: "var(--brand-tiffany)" }}
        >
          Resume / CV
        </h1>

        <p
          className="text-lg mb-8"
          style={{ color: "var(--brand-melon)" }}
        >
          Passionate Data Scientist and Writer with experience in building
          machine learning models, data pipelines, and crafting stories that
          connect emotionally.
        </p>

        <Link
          href="/uploads/resume.pdf"
          target="_blank"
          className="bg-melon text-dark_black font-semibold px-6 py-3 rounded-lg shadow hover:bg-raspberry_rose transition"
        >
          Download Full Resume (PDF)
        </Link>
      </div>
    </main>
  );
}
