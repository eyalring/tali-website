"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

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
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 drop-shadow-lg whitespace-nowrap px-2 md:px-0">
            ד&quot;ר טלי סופרין רינגולד
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-semibold drop-shadow">
            (PhD)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-heading text-white mb-6 drop-shadow-lg whitespace-nowrap">
            הרצאות סוחפות על גנטיקה, מדע והחיים עצמם
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
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button
            onClick={scrollToLectures}
            className="btn-primary text-lg px-4 py-2 bg-black/50"
          >
            צפייה בהרצאות
          </button>
          <a
            href="tel:0507774581"
            className="btn-primary text-base px-3 py-2 md:hidden flex items-center gap-2 bg-black/50"
          >
            <FaPhone />
            דברו איתי
          </a>
        </motion.div>
      </div>
    </section>
  );
}
