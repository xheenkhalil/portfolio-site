"use client";
import ProjectCard from "@/components/ProjectCard";
import BackButton from "@/components/BackButton";

export default function DataSciencePage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Back button at the top */}
      <div className="mb-8">
        <BackButton />
      </div>

      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--brand-raspberry)" }}
      >
        Fullstack Development Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Portfolio Site"
          summary="Built with Next.js and Typescript for speed and ease of management."
          image="/uploads/portfolio.png"
          github="https://github.com/xheenkhalil/portfolio-site"
          youtube="https://youtube.com"
          visit="https://mosesthomas.vercel.app"
        />
        <ProjectCard
          title="Movie Recommendation System"
          summary="A simple movie recommendation system built with HTML5/Tailwind CSS and Vanilla Javascript."
          image="/uploads/cinemuse.png"
          github="https://github.com/xheenkhalil/cinemuse"
          youtube="https://youtube.com"
          visit="https://cinemusemovies.netlify.app"
        />
        <ProjectCard
          title="Exams Site"
          summary="A full-featured exams website built with React, Node.js, Typecript, Vite and Postgres."
          image="/uploads/zyntra.png"
          github="https://github.com/xheenkhalil/zyntra_"
          youtube="https://youtube.com"
          visit="https://zyntraexams.vercel.app"
        />
        <ProjectCard
          title= "Vydra - All Video Downloader"
          summary= "An all video downloader made with Python and Next.js. Analyze URL and fetch video/Audio information and allows user to download."
          image= "/uploads/vydra.png"
          github= "https://github.com/xheenkhalil/vydra"
          youtube= "https://youtube.com"
          visit= "https://vydra-downloader.vercel.app"
        />
      </div>
    </main>
  );
}
