import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    kebutuhan: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/data/company-info.json")
      .then((res) => res.json())
      .then((data) => setCompanyInfo(data))
      .catch((err) => console.error("Error loading company info:", err));
  }, []);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", kebutuhan: "" });
      setSubmitted(false);
    }, 3000);
  };

  const whatsappLink = `https://wa.me/${companyInfo.phone?.replace(/\s+/g, "")}?text=Halo, saya ${encodeURIComponent(formData.name)} ingin menanyakan tentang ${encodeURIComponent(formData.kebutuhan)}`;

  return (
    <section id="contact" className="section-padding">
      <div className="section-container" ref={sectionRef}>
        <h2 className="text-4xl font-bold text-center mb-12">Hubungi Kami</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <p className="font-semibold text-gray-900">Telepon</p>
                  <p className="text-gray-600">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-semibold text-gray-900">Lokasi</p>
                  <p className="text-gray-600">{companyInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="font-semibold mb-4">Ikuti Kami</p>
              <div className="flex gap-4">
                <a
                  href={companyInfo.social?.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all"
                >
                  🐦
                </a>
                <a
                  href={companyInfo.social?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all"
                >
                  💼
                </a>
                <a
                  href={companyInfo.social?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all"
                >
                  🐙
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <p className="text-2xl mb-2">✅</p>
                <p className="text-gray-900 font-semibold">
                  Terima kasih telah menghubungi kami!
                </p>
                <p className="text-gray-600">
                  Kami akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Apa yang Anda butuhkan?
                  </label>
                  <textarea
                    name="kebutuhan"
                    value={formData.kebutuhan}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="Ceritakan tentang proyek Anda..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button type="submit" className="btn-primary flex-1">
                    Kirim Pesan
                  </button>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
