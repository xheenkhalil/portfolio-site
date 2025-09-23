"use client";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function Hero() {
  return (
      <section className="w-full flex flex-col items-center text-center px-6 pt-24 pb-8 md:pt-28 md:pb-12"
        style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={160}
        height={160}
        className="rounded-full border-4 border-tiffany_blue shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-tiffany_blue mb-2">
        Moses Thomas
      </h1>
      <p className="text-lg md:text-2xl text-melon mb-6">
        • Data Scientist/Analyst • Writer • Creator
      </p>
      <div className="flex gap-4 mt-6">
        <Link href="/projects" className="btn btn-primary">
          Explore Projects
        </Link>
        <Link href="/hire" className="btn btn-secondary">
          Hire Me
        </Link>
      </div>
    </section>
  );
}

<div id="projects" className="w-full py-16 bg-white text-dark_black">
  <h2 className="text-3xl font-bold text-center text-raspberry_rose mb-8">
    Recent Projects
  </h2>
  <p className="text-center text-gray-600">
<div id="projects" className="w-full py-16 bg-white text-dark_black">
  <h2 className="text-3xl font-bold text-center text-raspberry_rose mb-8">
    Recent Projects
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    <ProjectCard
      title="Spotify Dashboard"
      summary="A BI dashboard built with Power BI and Python scraping Spotify data."
      image="/uploads/project1.jpg"
      github="https://github.com/yourusername/spotify-dashboard"
      youtube="https://youtube.com"
    />
    <ProjectCard
      title="Medical Diagnosis Model"
      summary="Machine learning model predicting diseases from symptoms."
      image="/uploads/project2.jpg"
      github="https://github.com/yourusername/med-diagnosis"
    />
    <ProjectCard
      title="Data Scraper (Diengine)"
      summary="Custom scraping engine with Celery task scheduling."
      image="/uploads/project3.jpg"
      github="https://github.com/yourusername/diengine"
      youtube="https://youtube.com"
    />
  </div>
</div>

  </p>
</div>

