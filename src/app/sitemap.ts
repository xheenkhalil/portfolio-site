import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://mosesthomas.vercel.app/", lastModified: new Date() },
    { url: "https://mosesthomas.vercel.app/projects", lastModified: new Date() },
    { url: "https://mosesthomas.vercel.app/resume", lastModified: new Date() },
    { url: "https://mosesthomas.vercel.app/skills", lastModified: new Date() },
  ];
}

