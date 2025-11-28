import Hero from "@/components/Hero";
import HireMePanel from "@/components/HireMePanel";
import RecentProjects from "@/components/RecentProjects";
import { getRecentProjects } from "@/lib/projects";

export default async function Home() {
  const recentProjects = getRecentProjects(6);

  return (
    <>
      <Hero />
      <RecentProjects projects={recentProjects} />
      <HireMePanel />
    </>
  );
}