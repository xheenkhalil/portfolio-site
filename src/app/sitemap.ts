import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://yourdomain.com/", lastModified: new Date() },
    { url: "https://yourdomain.com/projects", lastModified: new Date() },
    { url: "https://yourdomain.com/resume", lastModified: new Date() },
    { url: "https://yourdomain.com/skills", lastModified: new Date() },
  ];
}

