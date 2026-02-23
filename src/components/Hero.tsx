"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const scrollToLectures = () => {
    const element = document.getElementById("lectures");
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Cover Photo */}
      <div className="absolute inset-0 z-0">
        <Link href="/" className="absolute inset-0 block cursor-pointer z-0">
          <Image
            src="/images/hero-cover.JPG"
            alt="ד״ר טלי סופרין-רינגוולד"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </Link>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 pointer-events-none z-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg whitespace-nowrap px-2 md:px-0 flex items-center justify-center gap-3">
            ד&quot;ר טלי סופרין רינגולד
            <span className="text-lg md:text-4xl lg:text-5xl font-semibold text-white/90">
              (PhD)
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-heading text-white mb-6 drop-shadow-lg px-4 md:px-0 leading-tight">
            הרצאות סוחפות על גנטיקה
            <span className="hidden md:inline">, מדע והחיים עצמם</span>
            <span className="block md:hidden">מדע והחיים עצמם</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow">
            <span className="block md:inline whitespace-nowrap">
              בואו לשמוע מדע בגובה העיניים
            </span>
            <span className="hidden md:inline"> - </span>
            <span className="block md:inline">פשוט, מעניין ומהנה</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <button
            onClick={scrollToLectures}
            className="btn-primary text-lg px-4 py-2 bg-black/50"
          >
            צפייה בהרצאות
          </button>
          <div className="hidden md:flex items-center justify-center gap-6 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61560015465070"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-accent-300 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/dr_tali_sufrin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-accent-300 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://wa.me/972507774581"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-accent-300 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <Link
              href="#contact"
              className="text-white/90 hover:text-accent-300 transition-colors"
              aria-label="Contact Section"
            >
              <FaPhone className="text-3xl" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
