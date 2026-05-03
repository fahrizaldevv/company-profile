import { useState } from "react";

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        <div className="font-heading font-bold text-2xl text-accent-blue flex ">
          <div
            className={` mr-1 ${scrolled ? "text-gray-900" : "text-white "}`}
          >
            Fahrizal
          </div>{" "}
          DEV
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-semibold transition-colors ${
                scrolled
                  ? "text-gray-900 hover:text-accent-blue"
                  : "text-white hover:text-accent-green"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="section-container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-semibold text-gray-900 hover:text-accent-blue"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
