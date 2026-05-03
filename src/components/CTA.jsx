import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="section-padding bg-gradient-to-r from-slate-950 via-zinc-900 to-slate-800 text-white">
      <div className="section-container text-center" ref={sectionRef}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Siap Memulai Proyek Anda?
        </h2>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Mari bekerja sama untuk mewujudkan visi Anda
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-accent-blue rounded-lg font-bold hover:bg-gray-100 transition-all">
            Mulai Sekarang
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-accent-blue transition-all">
            Jadwalkan Panggilan
          </button>
        </div>
      </div>
    </section>
  );
}
