"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { id: "home", label: "בית" },
  { id: "lectures", label: "ההרצאות שלי" },
  { id: "offer", label: "מה אני מציעה" },
  { id: "about", label: "קצת עליי" },
  { id: "testimonials", label: "המלצות" },
  { id: "gallery", label: "גלריה" },
  { id: "contact", label: "צור קשר" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-white/95 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-heading font-bold text-primary-700 hover:text-primary-600 transition-colors"
          >
            ד"ר טלי סופרין רינגולד
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-reverse space-x-8">
            {navItems.map((item) => (
              <>
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors relative ${
                    activeSection === item.id
                      ? "text-accent-500"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 right-0 left-0 h-0.5 bg-accent-500"></span>
                  )}
                </button>
                {item.id === "about" && (
                  <a
                    href="/blog"
                    className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    בלוג
                  </a>
                )}
              </>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl text-primary-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <>
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-right font-medium py-2 transition-colors ${
                      activeSection === item.id
                        ? "text-accent-500 font-semibold"
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.id === "about" && (
                    <a
                      href="/blog"
                      className="text-right font-medium py-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      בלוג
                    </a>
                  )}
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
