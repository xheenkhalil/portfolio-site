// src/app/page.tsx

// --- IMPORTS ---
// We only import the components that are unique to this page.
// HeaderBar, Footer, and ThemeToggle are loaded by layout.tsx or HeaderBar.
import Hero from "@/components/Hero";
import HireMePanel from "@/components/HireMePanel";
import RecentProjects from "@/components/RecentProjects";

// We DO NOT import SEO, HeaderBar, or ThemeToggle here.

export default function Home() {
  return (
    <>
      {/* No <SEO> component needed. The 'metadata' in layout.tsx handles this.
        No <HeaderBar> component needed. layout.tsx handles this.
        No <ThemeToggle> component needed. HeaderBar handles this.
      */}
      
      {/* Your layout.tsx <main> tag already wraps this content.
        So we can just return the page-specific components.
      */}
      <Hero />
      <RecentProjects />
      <HireMePanel />
    </>
  );
}