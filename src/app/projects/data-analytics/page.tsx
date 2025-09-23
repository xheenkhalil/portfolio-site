"use client";
import ProjectCard from "@/components/ProjectCard";
import BackButton from "@/components/BackButton";

export default function DataAnalyticsPage() {
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
        style={{ color: "var(--brand-murrey)" }}
      >
        Data Analytics Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </main>
  );
}
