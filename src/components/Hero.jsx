import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const bgElement1Ref = useRef(null);
  const bgElement2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        "-=0.4",
      );

    // Background floating animation
    gsap.to(bgElement1Ref.current, {
      x: 20,
      y: -20,
      rotation: 5,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(bgElement2Ref.current, {
      x: -30,
      y: 30,
      rotation: -10,
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-800 text-white flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-90"></div>
        <div
          ref={bgElement1Ref}
          className="absolute -top-24 -right-32 w-96 h-96 bg-slate-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-90"
        ></div>
        <div
          ref={bgElement2Ref}
          className="absolute -bottom-28 -left-24 w-96 h-96 bg-zinc-800/30 rounded-full mix-blend-screen filter blur-3xl opacity-90"
        ></div>
      </div>

      <div className="section-container relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Bangun Masa Depan <span className="gradient-text">Digital Anda</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg  text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Solusi web dan mobile inovatif yang disesuaikan dengan kebutuhan
          bisnis Anda
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">Mulai Sekarang</button>
          <button className="btn-secondary">Pelajari Lebih</button>
        </div>
      </div>
    </section>
  );
}
