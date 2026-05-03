import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioCard from "./PortfolioCard";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading portfolio:", err));
  }, []);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".portfolio-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power3.out",
      },
    );
  }, [projects, selectedCategory]);

  const categories = ["all", "web-app", "mobile-app", "company-profile"];
  const categoryLabels = {
    all: "Semua",
    "web-app": "Web",
    "mobile-app": "Mobile",
    "company-profile": "Profil Perusahaan",
  };
  const filtered =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portofolio Kami</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vitrin karya terbaik kami dan proyek-proyek sukses
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2  mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-accent-blue text-white"
                  : "bg-white text-gray-900 border border-gray-300 hover:border-accent-blue"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
