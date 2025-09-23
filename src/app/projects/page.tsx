"use client";
import ProjectCard from "@/components/ProjectCard";
import BackButton from "@/components/BackButton";

export default function ProjectsPage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="mb-8">
        <BackButton />
      </div>

      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--brand-murrey)" }}
      >
        Explore All Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Analytics Projects */}
        <ProjectCard
          title="Spotify Dashboard"
          summary="A BI dashboard built with Power BI, Excel, and Python scraping Spotify data."
          image="/uploads/project1.jpg"
          github="https://github.com/yourusername/spotify-dashboard"
          youtube="https://youtube.com"
        />
        <ProjectCard
          title="HR Analytics Dashboard"
          summary="Analyzed employee attrition and KPIs using Power BI and SQL."
          image="/uploads/project3.jpg"
          github="https://github.com/yourusername/hr-analytics-dashboard"
          youtube="https://youtube.com"
        />

        {/* Data Science Projects */}
        <ProjectCard
          title="Medical Diagnosis Model"
          summary="Machine learning model predicting diseases from symptoms with 200+ inputs."
          image="/uploads/project2.jpg"
          github="https://github.com/yourusername/med-diagnosis"
          youtube="https://youtube.com"
        />
        <ProjectCard
          title="Diengine Scraper"
          summary="A data scraping engine built with Python, Celery tasks, and FastAPI."
          image="/uploads/project3.jpg"
          github="https://github.com/yourusername/diengine"
          youtube="https://youtube.com"
        />

        {/* More projects can be added here */}
      </div>
    </main>
  );
}
