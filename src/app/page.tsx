import HeaderBar from "@/components/HeaderBar";
import Sidebar from "@/components/Sidebar";
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
        <Sidebar
          trigger={
            <button className="flex items-center gap-2 px-4 py-2 bg-melon text-dark_black font-semibold rounded-lg shadow hover:bg-raspberry_rose transition">
              ☰ Menu
            </button>
          }
        />
        <ThemeToggle />
        <Hero />
        <RecentProjects />   {/* <-- shows the grid in the area you circled */}
        <HireMePanel />
      </main>
    </>
  );
}
