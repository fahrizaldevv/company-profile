import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageBg from "../assets/image.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="section-container" ref={sectionRef}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Tentang Fahrizal DEV</h2>
            <p className="text-gray-600 text-md mb-4">
              Kami adalah tim pengembang dan desainer yang bersemangat
              berdedikasi untuk menciptakan pengalaman digital yang luar biasa.
              Dengan bertahun-tahun keahlian dalam pengembangan web dan mobile,
              kami mengubah ide menjadi kenyataan.
            </p>
            <p className="text-gray-600 text-md mb-6">
              Misi kami adalah memberdayakan bisnis melalui solusi teknologi
              inovatif yang mendorong pertumbuhan dan kesuksesan dalam lanskap
              digital.
            </p>
            <button className="btn-primary">Pelajari Lebih</button>
          </div>

          <div
            className="relative rounded-lg h-96 overflow-hidden flex items-center justify-center text-white"
            style={{
              backgroundImage: `url(${imageBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative text-center">
              <p className="text-6xl font-bold mb-2">10+</p>
              <p className="text-xl">Proyek Selesai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
