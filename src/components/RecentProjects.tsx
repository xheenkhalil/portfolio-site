import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/projects";

interface RecentProjectsProps {
  projects: Project[];
}

export default function RecentProjects({ projects }: RecentProjectsProps) {
  return (
    <section id="projects" className="w-full py-16 bg-dark_black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-raspberry_rose mb-10">
          Recent Projects
        </h2>

        {/* Grid */}
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
      </div>
    </section>
  );
}

