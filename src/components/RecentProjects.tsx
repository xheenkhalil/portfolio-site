"use client";
import ProjectCard from "@/components/ProjectCard";

/** 
 * Temporary dummy data. 
 * We will replace this with CMS content later.
 */
const recent = [
  {
    title: "Spotify Analytics Dashboard",
    summary:
      "Interactive BI dashboard (Power BI + Python) for streaming trends & artist insights.",
    image: "/uploads/project1.jpg",
    github: "https://github.com/xheenkhalil/Spotify-Dashboard",
    youtube: "https://youtube.com",
  },
  {
    title: "Disease Prediction Model",
    summary:
      "ML classification pipeline (scikit-learn) with feature engineering and model explainability.",
    image: "/uploads/project2.jpg",
    github: "https://github.com/xheenkhalil/med-diagnosis",
    youtube: "https://youtube.com",
  },
  {
    title: "Walmart Store Analysis",
    summary:
      "SQL + Python analysis of product/category performance with actionable recommendations.",
    image: "/uploads/walmart.png",
    github: "https://github.com/xheenkhalil/walmart-store-analysis",
    youtube: "https://youtube.com",
  },
  {
    title: "Movie Recommendation System",
    summary:
      "A simple movie recommendation system built with HTML5/Tailwind CSS and Vanilla Javascript.",
    image: "/uploads/cinemuse.png",
    github: "https://github.com/xheenkhalil/cinemuse",
    youtube: "https://youtube.com",
    visit: "https://cinemusemovies.netlify.app"
  },
];

export default function RecentProjects() {
  return (
    <section id="projects" className="w-full py-16 bg-dark_black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-raspberry_rose mb-10">
          Recent Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recent.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              summary={p.summary}
              image={p.image}
              github={p.github}
              youtube={p.youtube}
              visit={p.visit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

