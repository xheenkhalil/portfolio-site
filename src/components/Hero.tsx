"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full px-6 md:px-10 py-16 md:py-24"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Container aligned with rest of content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:gap-1 lg:gap-1">
        
        {/* --- Left Column: Profile Image --- */}
        <div className="flex justify-center md:justify-start items-center md:w-1/3">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={220}
            height={220}
            className="rounded-full border-4 border-tiffany_blue shadow-lg"
          />
        </div>

        {/* --- Right Column: Text Section --- */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-2/3 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-tiffany_blue mb-2">
            Moses Thomas
          </h1>
          <p className="text-lg md:text-2xl text-melon mb-6">
            • Data Scientist/Analyst • Writer • Creator
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="btn btn-primary bg-tiffany_blue text-black px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Explore Projects
            </Link>
            <Link
              href="/hire"
              className="btn btn-secondary bg-melon text-black px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Hire Me
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
