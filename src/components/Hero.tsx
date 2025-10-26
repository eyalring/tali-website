"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <Image
          src="/images/hero-cover.JPG"
          alt="ד״ר טלי סופרין-רינגוולד"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 drop-shadow-lg">
            ד"ר טלי סופרין רינגולד
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white mb-6 drop-shadow-lg">
            הרצאות העשרה בגנטיקה וירולוגיה ומדעי החיים
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow">
            בואו לשמוע מדע בגובה העיניים, פשוט, ברור ומהנה
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToLectures}
            className="btn-primary text-lg px-10 py-4"
          >
            צפייה בהרצאות
          </button>
        </motion.div>
      </div>
    </section>
  );
}
