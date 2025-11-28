"use client";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  summary: string;
  image: string;
  github?: string;
  youtube?: string;
  visit?: string;
}

export default function ProjectCard({
  title,
  summary,
  image,
  github,
  youtube,
  visit,
  slug,
}: ProjectCardProps & { slug?: string }) {
  return (
    <div
      className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border flex flex-col h-full"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: "var(--brand-raspberry)" }}
        >
          {title}
        </h3>
        <p className="mb-4 flex-grow" style={{ color: "var(--muted)" }}>
          {summary}
        </p>
        <div className="flex gap-3 flex-wrap mt-auto">
          {slug && (
            <a
              href={`/projects/${slug}`}
              className="bg-brand-murrey text-white px-4 py-2 rounded font-semibold hover:opacity-90 transition"
            >
              Details
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-melon text-dark_black px-4 py-2 rounded font-semibold hover:bg-raspberry_rose transition"
            >
              GitHub
            </a>
          )}
          {youtube && (
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tiffany_blue text-dark_black px-4 py-2 rounded font-semibold hover:bg-murrey transition"
            >
              YouTube
            </a>
          )}
          {visit && (
            <a
              href={visit}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light_spring_green text-dark_black px-4 py-2 rounded font-semibold hover:bg-spring_green transition"
            >
              Visit
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
