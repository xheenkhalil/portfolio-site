
import ProjectCard from "@/components/ProjectCard";


export default function DataAnalyticsPage() {


  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--brand-murrey)" }}
      >
        Data Analytics Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Spotify Dashboard"
          summary="A BI dashboard built with Power BI, Excel, and Python scraping Spotify data."
          image="/uploads/project1.jpg"
          github="https://github.com/xheenkhalil/Spotify-Dashboard"
          youtube="https://youtube.com"
          slug="spotify-dashboard"
        />
        <ProjectCard
          title="Walmart Analytics Dashboard"
          summary="SQL + Python analysis of product/category performance with actionable recommendations."
          image="/uploads/walmart.png"
          github="https://github.com/xheenkhalil/walmart-store-analysis"
          youtube="https://youtube.com"
          slug="walmart-analytics-dashboard"
        />
      </div>
    </main>
  );
}
