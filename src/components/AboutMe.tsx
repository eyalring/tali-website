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
          <div className="text-lg leading-relaxed text-gray-700">
            <p>
              שלום! אני{" "}
              <span className="font-bold text-primary-700">
                ד"ר טלי סופרין-רינגולד
              </span>
              , חוקרת, מדענית וביולוגית בעלת תואר דוקטור (PhD) במדעי החיים.
              <br /><br />
              לאחר סיום הדוקטורט, ביליתי כ-15 שנה במחקר וירוסים וגנטיקה במכון
              וולקני (מיגל/המועצה למחקר חקלאי), שם התמקדתי במחקר מתקדם בתחומי
              הווירולוגיה והגנטיקה.
              <br /><br />
              במהלך השנים מצאתי את התשוקה האמיתית שלי - להעביר ידע מדעי בצורה
              נגישה, מרתקת ומהנה. אני מעבירה הרצאות למבוגרים וילדים מגיל 4 עד
              120, ומאמינה שהבנת המדע עוזרת לנו לנווט טוב יותר בעולם המורכב
              שלנו.
              <br /><br />
              <span className="font-semibold text-primary-700">
                הפילוסופיה שלי:
              </span>{" "}
              מדע לא צריך להיות מסובך או מפחיד. בהרצאות שלי אני מאמינה ב״מדע
              בגובה העיניים״ - הסברים פשוטים, ברורים ומהנים שמתאימים לכל קהל,
              בלי לוותר על העומק המדעי.
              <br /><br />
              אני מתמחה בהרצאות בתחומי{" "}
              <span className="font-semibold">
                הגנטיקה, הווירולוגיה, האפיגנטיקה, האבולוציה
              </span>{" "}
              ונושאים רלוונטיים נוספים במדעי החיים. כל הרצאה מותאמת אישית לקהל
              היעד ולרמת הידע שלו.
              <br /><br />
              <span className="text-accent-600 font-semibold text-xl">
                בואו לגלות את הקסם שבמדע!
              </span>
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
