"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">קצת עליי</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="text-base leading-relaxed text-black">
            <p>
              ביולוגית, חוקרת ומרצה בעלת אהבה גדולה לידע, חדשנות ויצירתיות ותשוקה אמיתית להנגשת עולם המדע לציבור הרחב. בעלת דוקטורט בגנטיקה ווירולוגיה, וכ-15 שנות ניסיון במחקר במכון וולקני. לאורך השנים פיתחתי הרצאות ומצגות מקוריות וחווייתיות, המשלבות ידע מחקרי מעמיק עם הומור, היסטוריה וסיפורים אנושיים. אני מתעדכנת באופן תדיר במחקרים ובפריצות דרך חדשות, מתוך אהבה אמיתית ללמידה ולגילוי (הסקרנות היא הגן הפעיל ביותר אצלי 😉) ובכל הרצאה שלי אני משתדלת לחבר בין המדע לחיים ולהסביר איך הוא יכול לשנות את הדרך שבה אנחנו מבינים את עצמנו ואת העולם. אני מאמינה שהנגשת המדע פותחת דלת לשאלות גדולות, לדילמות מוסריות ולמבט קדימה – לעתיד שכבר כמעט כאן. בהרצאות שלי אדבר על כל מה שמעניין באמת, החיים!! בואו יהיה כיף, מעשיר ומרתק.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/tali-portrait.jpg"
              alt="ד״ר טלי סופרין-רינגוולד"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
