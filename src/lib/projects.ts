import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
    slug: string;
    title: string;
    date: string;
    summary: string;
    category: string;
    image: string;
    youtube?: string;
    github?: string;
    visit?: string;
    body: string;
}

export function getAllProjects(): Project[] {
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = matterResult.data as any;

        let image = "/uploads/project1.jpg";
        if (data.image) {
            image = data.image;
        } else if (data.images && Array.isArray(data.images) && data.images.length > 0) {
            const first = data.images[0];
            if (typeof first === 'string') {
                image = first;
            } else if (typeof first === 'object' && first.image) {
                image = first.image;
            }
        }

        return {
            slug,
            title: data.title || "No Title",
            date: data.date || new Date().toISOString(),
            summary: data.summary || "",
            category: data.category || "General",
            image,
            youtube: data.youtube,
            github: data.github,
            visit: data.visit,
            body: matterResult.content,
        };
    });

    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getRecentProjects(count: number = 3): Project[] {
    const allProjects = getAllProjects();
    return allProjects.slice(0, count);
}

export function getProjectBySlug(slug: string): Project | null {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = matterResult.data as any;

        let image = "/uploads/project1.jpg";
        if (data.image) {
            image = data.image;
        } else if (data.images && Array.isArray(data.images) && data.images.length > 0) {
            const first = data.images[0];
            if (typeof first === 'string') {
                image = first;
            } else if (typeof first === 'object' && first.image) {
                image = first.image;
            }
        }

        return {
            slug,
            title: data.title || "No Title",
            date: data.date || new Date().toISOString(),
            summary: data.summary || "",
            category: data.category || "General",
            image,
            youtube: data.youtube,
            github: data.github,
            visit: data.visit,
            body: matterResult.content,
        };
    } catch {
        return null;
    }
}
