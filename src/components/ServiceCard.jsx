import { useState } from "react";

export default function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-card card-shadow p-8 rounded-lg bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`text-5xl mb-4 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
      >
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{service.details}</p>
    </div>
  );
}
