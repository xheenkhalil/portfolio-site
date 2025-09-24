import HeaderBar from "@/components/HeaderBar";
import Hero from "@/components/Hero";
import HireMePanel from "@/components/HireMePanel";
import SEO from "@/components/SEO";
import RecentProjects from "@/components/RecentProjects";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <SEO
        title="Moses Thomas | Data Scientist & Writer"
        description="Portfolio showcasing data science, data analytics, and storytelling projects."
        url="https://mosesthomas.netlify.app"
      />
      <main className="min-h-screen">
        <HeaderBar />
        <ThemeToggle />
        <Hero />
        <RecentProjects />   {/* <-- shows the grid in the area you circled */}
        <HireMePanel />
      </main>
    </>
  );
}
