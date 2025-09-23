"use client";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  summary: string;
  image: string;
  github?: string;
  youtube?: string;
}

export default function ProjectCard({
  title,
  summary,
  image,
  github,
  youtube,
}: ProjectCardProps) {
  return (
    <div
      className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: "var(--brand-raspberry)" }}
        >
          {title}
        </h3>
        <p className="mb-4" style={{ color: "var(--muted)" }}>
          {summary}
        </p>
        <div className="flex gap-3">
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
        </div>
      </div>
    </div>
  );
}
