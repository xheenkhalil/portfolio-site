import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.summary,
        openGraph: {
            title: `${project.title} | Moses Thomas`,
            description: project.summary,
            images: [project.image],
            type: "article",
        },
    };
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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.summary,
        image: project.image,
        author: {
            "@type": "Person",
            name: "Moses Thomas",
        },
        codeRepository: project.github,
        programmingLanguage: project.category,
    };

    return (
        <main
            className="min-h-screen pt-24 pb-16 px-6"
            style={{ background: "var(--background)", color: "var(--foreground)" }}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
