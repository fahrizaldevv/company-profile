import { useEffect, useState } from "react";

const Item = ({ title, data, index }) => {
  return (
    <div
      className={`border-2 border-white rounded-lg p-6 w-full max-w-sm text-center ${index % 2 === 0 ? "bg-white/10" : "bg-white/20"}`}
    >
      <div className="mb-[29px]">
        <p className="font-black text-[22px]">{title}</p>
        <p className="text-[14px]">Teknologi yang kita guanakan</p>
      </div>
      <div className=" flex-1">
        <div className="pointer-events-none flex flex-wrap gap-2 gap-2">
          {data.map((item) => {
            return (
              <div className="border-2 px-4 py-2 font-black border-white text-xs">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function TechStack() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    fetch("/data/tech-stack.json")
      .then((res) => res.json())
      .then((data) => setTechs(data))
      .catch((err) => console.error("Error loading tech stack:", err));
  }, []);

  return (
    <section className="section-padding bg-primary text-white">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center mb-12">
          Teknologi yang Kami Gunakan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center justify-items-center mx-auto">
          {techs.map((tech, i) => (
            <Item
              key={tech.title ?? i}
              index={i}
              title={tech.title}
              data={tech.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
