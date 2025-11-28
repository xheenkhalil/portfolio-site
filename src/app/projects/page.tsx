import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--brand-murrey)" }}
      >
        Explore All Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            summary={p.summary}
            image={p.image}
            github={p.github}
            youtube={p.youtube}
            visit={p.visit}
            slug={p.slug}
          />
        ))}
      </div>
    </main>
  );
}
