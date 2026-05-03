export default function PortfolioCard({ project }) {
  return (
    <div className="portfolio-card card-shadow rounded-lg overflow-hidden bg-white cursor-pointer group">
      <div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center text-white text-center p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-black/40">
          <div>
            <p className="font-semibold mb-2">
              {project.category.replace("-", " ").toUpperCase()}
            </p>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 2).map((t, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-blue font-semibold hover:text-accent-green transition-colors"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
