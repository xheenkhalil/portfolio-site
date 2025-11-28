"use client";
export default function ResumePage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--brand-tiffany)" }}
        >
          Resume / CV
        </h1>

        <p
          className="text-lg mb-10"
          style={{ color: "var(--brand-melon)" }}
        >
          Passionate Data Scientist and Writer with experience in building
          machine learning models, data pipelines, and crafting stories that
          connect emotionally.
        </p>

        {/* ✅ Download Button */}
        <a
          href="/uploads/resume.pdf"
          download
          className="
            inline-block
            bg-melon text-dark_black font-semibold
            px-8 py-3 rounded-xl shadow-md
            hover:bg-raspberry_rose hover:shadow-lg
            hover:scale-[1.03] active:scale-[0.98]
            transition-all duration-200 ease-out
          "
        >
          📄 Download Full Resume (PDF)
        </a>
      </div>
    </main>
  );
}
