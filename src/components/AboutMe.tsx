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
          <div className="text-base leading-relaxed text-black space-y-4">
            <p>
              אני טלי סופרין רינגולד. ביולוגית, חוקרת ומרצה בעלת אהבה גדולה לידע,
              חדשנות, יצירתיות ותשוקה אמיתית להנגשת עולם המדע לציבור הרחב. בעלת
              דוקטורט (PhD) בגנטיקה ווירולוגיה, וכחמש עשרה שנות ניסיון במחקר במכון
              וולקני.
            </p>
            <p>
              תחום הגנטיקה הוא אחד התחומים הכי מרגשים, דינמאיים ומתחדשים שיש. מאז
              שהוא נולד, הוא עדיין, משנה את חיינו כל יום. בשנים האחרונות, החשיפה
              וההתעניינות בעולם הגנטיקה גוברת עקב פריצות דרך מרגשות ותגליות
              מדהימות שלעיתים לא מובנות עד הסוף. אני מאמינה שהבנה והיכרות עם העולם
              הזה הן הכרחיות, במיוחד בתקופה הזאת. אנחנו חווים ועוברים המון דברים
              בחיינו ולעיתים לא ממש מבינים אותם לעומק. לפעמים גילוי קטן על
              הדי-אן-אי,
              על המוח, על האבולוציה והגנטיקה שלנו יכולים לפתור לנו סוגיה, שאלה או
              כל מורכבות שאנחנו חיות וחיים איתה. כניסה לעולם מדעי החיים בכלל
              ולעולם הגנטיקה בפרט מאפשרת הבנה בסיסית של הקיום שלנו. היא יכולה לתת
              תשובות להמון שאלות שאנחנו נושאים איתנו שנים והיא יכולה פשוט לאפשר
              לנו הבנה טובה יותר של תהליכים וסוגיות מדעיות שלא ידענו כמה השפעה יש
              להן על היומיום שלנו.
            </p>
            <p>
              אני אוהבת מאוד מדע ואת העיסוק בו ויותר מזה אני אוהבת לדבר עליו, לספר
              אותו ולהעביר אותו הלאה לכל מי שרק מתעניין. במהלך עבודתי העברתי
              סמינרים והרצאות לסטודנטים וחברי סגל ותוך כדי, תמיד העברתי הרצאות
              למבוגרים מגיל עשרים ועד מאה ועשרים שהתעניינו בתחומי המדע האלו ולילדים מגיל הגן
              ועד לתיכון. אני יוצרת הרצאות ומצגות חכמות, סוחפות וקלילות, שמבוססות
              על מחקרים מדעיים מעמיקים ומגישה אותן באופן בהיר, פשוט ומעניין. בכל
              הרצאה אני משלבת בין מדע לאנושיות, בין עובדות לסיפורים ומזמינה אתכם
              למסע שמחבר ידע, רגש וסקרנות. מאז שאני זוכרת את עצמי אני מתפעלת מהעולם
              הזה ומהחיים בו ורק ורוצה לדעת עוד ועוד על כל דבר. אני מתעדכנת באופן
              תדיר במחקרים ובפריצות דרך חדשות, מתוך אהבה אמיתית ללמידה ולמחקר.
              (הסקרנות היא הגן הפעיל ביותר אצלי 😉) ועכשיו אני גם עסוקה בלהעביר את
              כל הטוב הזה הלאה, אליכם. השיחות והתגובות אחרי כל הרצאה מחזקות אותי
              מאוד בדרך ובאמונה שהנגשת מדע יכולה להיות מהנה ושהיא ללא ספק הכרחית
              ופותחת דלת לשאלות גדולות, לדילמות מוסריות ולמבט קדימה – לעתיד שכבר
              ממש כאן.
            </p>
            <p>
              בהרצאות שלי אני מדברת על כל מה שמעניין באמת, החיים. בואו לשמוע מדע
              בגובה העיניים פשוט מעניין ומהנה.
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
          {/* Mobile card-style square like WhatIOffer */}
          <div className="md:hidden">
            <div className="card p-6 text-center">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/tali-portrait.jpg"
                  alt="ד״ר טלי סופרין-רינגוולד"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-800">קצת עליי</h3>
            </div>
          </div>

          {/* Desktop/tablet original large image */}
          <div className="hidden md:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/tali-portrait.jpg"
                alt="ד״ר טלי סופרין-רינגוולד"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
