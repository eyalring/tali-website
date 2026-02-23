"use client";

import { useState, useEffect } from "react";
import { FaBars, FaShareAlt, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section (only on home page)
      if (pathname === "/") {
        const sections = navItems.map((item) => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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

  const handleBrandClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection("home");
    }
    setIsMobileMenuOpen(false);
  };

  const handleShare = async () => {
    const canonicalUrl = "https://drtalisufrinringwald.com";
    const shareUrl =
      typeof window !== "undefined" &&
      window.location.origin.includes("drtalisufrinringwald.com")
        ? window.location.href
        : canonicalUrl;
    const shareData = {
      title: "ד\"ר טלי סופרין רינגולד",
      text: "בואו להכיר את הרצאותיה של ד\"ר טלי סופרין רינגולד.",
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard && shareUrl) {
        await navigator.clipboard.writeText(shareUrl);
        alert("הקישור הועתק ללוח!");
      } else {
        window.open(shareUrl, "_blank");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
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
          <Link
            href="/"
            onClick={handleBrandClick}
            className="text-xl md:text-2xl font-heading font-bold text-primary-700 hover:text-primary-600 transition-colors"
          >
            ד&quot;ר טלי סופרין רינגולד
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-reverse space-x-8">
              {navItems.map((item) => (
                <>
                  <a
                    key={item.id}
                    href={`/#${item.id}`}
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
                  </a>
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

            {/* Social & Share Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61560015465070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-primary-700 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/dr_tali_sufrin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-primary-700 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <button
                onClick={handleShare}
                className="text-2xl text-primary-700 hover:text-primary-600 transition-colors"
                aria-label="Share this site"
                type="button"
              >
                <FaShareAlt />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-2xl text-primary-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <>
                  <a
                    key={item.id}
                    href={`/#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-right font-medium py-2 transition-colors ${
                      activeSection === item.id
                        ? "text-accent-500 font-semibold"
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                  >
                    {item.label}
                  </a>
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
