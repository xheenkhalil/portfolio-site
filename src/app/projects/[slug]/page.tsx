import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main
            className="min-h-screen px-6 py-16"
            style={{ background: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="max-w-4xl mx-auto">
                <h1
                    className="text-4xl font-bold mb-6"
                    style={{ color: "var(--brand-murrey)" }}
                >
                    {project.title}
                </h1>

                <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex gap-4 mb-8">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-melon text-dark_black px-6 py-2 rounded font-semibold hover:bg-raspberry_rose transition"
                        >
                            GitHub
                        </a>
                    )}
                    {project.visit && (
                        <a
                            href={project.visit}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-light_spring_green text-dark_black px-6 py-2 rounded font-semibold hover:bg-spring_green transition"
                        >
                            Visit Site
                        </a>
                    )}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.body }} />
                </div>

                {/* Fallback for markdown if not using a renderer yet */}
                <div className="whitespace-pre-wrap mt-8 p-6 bg-white/5 rounded-lg">
                    {project.body}
                </div>
            </div>
        </main>
    );
}
