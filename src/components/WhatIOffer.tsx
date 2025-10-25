"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaVenusMars,
  FaHome,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa";

interface Offer {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "מבוגרים",
    description:
      "הרצאות במתנ״סים, בתי אבות, ועדי עובדים, קהילות ומועדונים חברתיים",
    icon: <FaUsers className="text-5xl" />,
  },
  {
    id: 2,
    title: "נשים",
    description: "הרצאות ליום האישה, לחברות, לקהילות נשים, ולקבוצות עניין",
    icon: <FaVenusMars className="text-5xl" />,
  },
  {
    id: 3,
    title: "קבוצות פרטיות והרצאות בית",
    description: "הרצאות לקבוצות פרטיות, הרצאות בית, וערבי שישי מיוחדים",
    icon: <FaHome className="text-5xl" />,
  },
  {
    id: 4,
    title: "בתי ספר",
    description:
      "הרצאות לתלמידי חטיבות ביניים ותיכון, תלמידי מגמות ביולוגיה וכיתות רגילות",
    icon: <FaSchool className="text-5xl" />,
  },
  {
    id: 5,
    title: "קורסים",
    description:
      "קורסים בגנטיקה, וירולוגיה, ומדעי החיים - מרמת מתחילים ועד מתקדמים",
    icon: <FaBookOpen className="text-5xl" />,
  },
];

export default function WhatIOffer() {
  return (
    <section
      id="offer"
      className="section-container bg-gradient-to-b from-primary-50 to-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">מה יש לי להציע</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card p-8 text-center"
          >
            <div className="flex justify-center text-primary-600 mb-4">
              {offer.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-800 mb-4">
              {offer.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{offer.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-gray-700 mb-6">
          ההרצאות מותאמות לקהל היעד ולרמת הידע המקצועית
        </p>
        <a href="#contact" className="btn-primary">
          צור קשר לפרטים נוספים
        </a>
      </motion.div>
    </section>
  );
}
