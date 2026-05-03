import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [services, setServices] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load services data
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  useEffect(() => {
    if (services.length === 0) return;

    const cards = containerRef.current?.querySelectorAll(".service-card");
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
  }, [services]);

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami menawarkan solusi digital komprehensif yang disesuaikan untuk
            memenuhi tujuan bisnis Anda
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
