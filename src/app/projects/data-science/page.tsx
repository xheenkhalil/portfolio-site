
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export default function DataSciencePage() {
  const projects = getAllProjects().filter((p) => p.category === "Data Science");

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--brand-raspberry)" }}
      >
        Data Science Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Medical Diagnosis Model"
          summary="Machine learning model predicting diseases from symptoms with 200+ inputs."
          image="/uploads/project2.jpg"
          github="https://github.com/xheenkhalil/med-diagnosis"
          youtube="https://youtube.com"
          slug="medical-diagnosis-model"
        />
        <ProjectCard
          title="Diengine Scraper"
          summary="A data scraping engine built with Python, Celery tasks, and FastAPI."
          image="/uploads/project3.jpg"
          github="https://github.com/yourusername/diengine"
          youtube="https://youtube.com"
          slug="diengine-scraper"
        />
      </div>
    </main>
  );
}
