
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export default function WebDevelopmentPage() {
  const allProjects = getAllProjects();
  const webDevProjects = allProjects.filter(
    (project) => project.category === "Fullstack Web Development"
  );

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--brand-raspberry)" }}
      >
        Fullstack Development Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webDevProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            image={project.image}
            github={project.github}
            youtube={project.youtube}
            visit={project.visit}
            slug={project.slug}
          />
        ))}
      </div>
    </main>
  );
}
