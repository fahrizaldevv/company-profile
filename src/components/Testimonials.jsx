import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Error loading testimonials:", err));
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials]);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });
  }, []);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentSlide];

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container" ref={containerRef}>
        <h2 className="text-4xl font-bold text-center mb-12">
          Apa Kata Klien Kami
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-4">
              {"⭐".repeat(current.rating)}
            </div>

            <p className="text-gray-600 text-lg text-center mb-6 italic">
              "{current.feedback}"
            </p>

            <div className="text-center">
              <p className="font-bold text-gray-900">{current.name}</p>
              <p className="text-gray-600">{current.company}</p>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide ? "bg-accent-blue w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
