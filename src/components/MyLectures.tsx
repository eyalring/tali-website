"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Lecture {
  id: number;
  title: string;
  teaser: string;
  description: string;
  imagePath: string;
}

const lectures: Lecture[] = [
  {
    id: 1,
    title: "גנטיקה - סרט מדע בדיוני או מציאות?",
    teaser: "בואו לגלות עד כמה העתיד כבר כאן ואיך המדע והגנטיקה משנים את חיינו בכל יום עוד קצת.",
    description: `תארו לכם עולם שבו הדרך הטבעית להביא ילדים לעולם היא דרך הפריה חוץ גופית ופגישה עם גנטיקאי/ת על מנת לבחור עובר בעל תכונות רצויות. עולם בו ברגע שתינוק מגיח לעולם, אפשר לדעת עליו הכל, מבחינה גנטית, באמצעות בדיקת דם אחת, אפילו מה הצפי לתוחלת החיים שלו. תארו לכם עולם בו ניתן לתקן גנים פגומים ולרפא מחלות תורשתיות וגנטיות כמו סרטן או אלצהיימר ואפילו אפשר לגדל איברים להשתלה במעבדה. נשמע קצת כמו סרט מדע בדיוני, לא? 
    
בואו לצלול איתי אל תוך העולם הכי מרתק שיש – עולם הגנטיקה. יחד נבין מושגים בסיסיים: מהו DNA? מהם כרומוזומים וגנים? איך תכונות מועברות בתורשה לצאצאים? מהן מוטציות, איך הן קורות ולאילו תסמונות הן עלולות לגרום? מה זה סרטן ואיך המחקר הגנטי מקדם אותנו כל יום במלחמה במחלה זו? מה המחקר הגנטי מאפשר לעשות היום, מה הוא יאפשר לעשות בעתיד ומה אולי לא כדאי שנעשה – אפילו שכבר אפשר? ואיך הוא משנה את העולם שלנו ואת החיים שלנו כל יום עוד קצת.
    
האם אנחנו כבר חיים בסרט מדע בדיוני? או שמא המציאות עולה על כל דמיון? בואו לגלות איתי.`,
    imagePath: "/images/lectures/genetics.png",
  },
  {
    id: 2,
    title: "לחשוב מחוץ ל DNA - אפיגנטיקה המדע שמשנה את חוקי המשחק",
    teaser: "בהרצאה מרתקת זו נגלה איך חוויות חיים וגורמים סביבתיים משפיעים על \"מתג ההפעלה והכיבוי\" של ה DNA שלנו.",
    description: `ה DNA שלנו קובע את המין הביולוגי שלנו, את הגובה שלנו, את סוג הדם שלנו. הוא קובע איזה מחלות גנטיות יהיו לנו ואפילו כמה חכמים נהיה ואיך נזדקן. ה DNA הוא ספר ההוראות ליצירת האורגניזם השלם אבל האם הוא מחליט הכל? או אולי יש מנגנונים נוספים המכבים ומדליקים גנים? המחליטים איזה DNA יתבטא מתי? בהרצאה זו נצלול אל עולם האפיגנטיקה. עולם שבו חוויות חיים וגורמים סביבתיים משפיעים על "מתג ההפעלה והכיבוי" של הגנים שלנו. נדון בסוגיה המהותית בין ה DNA לסביבה (nature vs nurture) נבחן כיצד מנגנונים אפיגנטיים יכולים להשפיע על הבריאות הפיזית והנפשית שלנו, על המוח שלנו, על קצב ההזדקנות שלנו ועל האושר שלנו ואפילו איך היא עשויה להשפיע על הצאצאים שלנו. ה – DNA שלנו קובע הכל ואין לנו דרך לשנות אותו כרצוננו, אבל יש לנו דרך לכבות ולהדליק אותו...בואו לשמוע איך.`,
    imagePath: "/images/lectures/epigenetics.png",
  },
  {
    id: 3,
    title: "אימהות או לא להיות? ואיפה האבות בסיפור הזה - גנטיקה ואבולוציה של אימהות ואבות",
    teaser: "אינסטינקט הרבייה הכוח שמניע את החיים מסע מרתק בעקבות הגנטיקה, האבולוציה וההשקעה ההורית בטבע.",
    description: `אינסטינקט הרבייה האינסטנקט הכי חזק בטבע. כל היצורים החיים בטבע משקיעים מאמצים רבים לפעמים תוך כדי הקרבה עצמית כדי להשלים את המשימה הזאת-התרבות. גם אנחנו בני האדם, למרות שאנחנו די בטוחים שאנחנו שונים מאוד מבעלי החיים. בהקשר הזה, אנחנו די דומים להם. בהרצאה זו נגלה יחד למה אנחנו עושים את זה? למה נשים רוצות להיות אמהות? האם הן בוחרות בזה באופן רציונלי? מה משתנה אצלן לאחר שהן נהיות אימהות? איפה האבות בסיפור הזה? נפגוש אימהות ואבות נוספים בטבע, הורים מצטיינים וכאלה שפחות נגלה למה אנחנו בין המינים הבודדים בעולם החי שיש לנו סבתא וגם סבא בהרכב המשפחתי? נדבר על אבולוציה, הורמנים, גנים וסביבה ונבין במה בכל זאת אנחנו כן שונים מכל השאר`,
    imagePath: "/images/lectures/motherhood.png",
  },
  {
    id: 4,
    title: "זה ויראלי עולם קטן ומשוגע",
    teaser: "הרצאה סוחפת על היצורים הקטנטנים והחמקמקים ששינו את ההיסטוריה, את המדע – ואת חיינו.",
    description: `מי מאיתנו לא היה אצל הרופאה עם חום או כאבי גרון וחזר עם התשובה "אין מה לעשות, זה ויראלי"? מי מאתנו הצליח לעבור את תקופת הקורונה מבלי ללמוד דבר או שניים על וירוסים ועל איך הם יכולים לשנות לנו את החיים בין רגע? שנים שמחלות ויראליות כמו אבעבועות שחורות, שפעת, חצבת, איידס ועוד מאלצות את האדם להתמודד עם הסכנות שהן מביאות ולפתח אמצעי מיגון שונים ומגוונים. עולם הוירוסים הוא אחד העולמות הקטנים ביותר בעולם הביולוגי וגם מהמשתנים ביותר שיש. היכולת האבולוציונית של וירוס להתפתח ולהשתנות אין שניה לה בעולם המדע – מה שמאלץ את המחקר הוירולוגי להישאר בקצב, וזה לא פשוט, כי כמה שהם קטנים ככה הם ממזרים... בהרצאה זו, אנחנו ניכנס לעולם הקטן ביותר שיש ובמקרה הזה הגודל באמת לא קובע – כי עולם הוירוסים הוא אחד המעניינים שיש! יחד נתחיל להבין מי הם אותם הוירוסים שלעיתים משבשבים לנו את החיים: מה הגודל שלהם? איך גילו אותם ומה היה צריך להשתנות בשביל שזה יקרה? איך הם מדביקים ומזיקים? איך אפשר להימנע מהם? ומהו חיסון? איך הם קשורים גם לאבולוציה? נכיר עוד צדדים של היצורים המופלאים האלה ונבין למה הם מאתגרים את המדע לא רק מבחינה רפואית וביולוגית, אלא גם מבחינה פילוסופית בהגדרה של מה זה חיים?`,
    imagePath: "/images/lectures/viruses.png",
  },
];

export default function MyLectures() {
  const [expandedLecture, setExpandedLecture] = useState<number | null>(null);

  const toggleLecture = (id: number) => {
    setExpandedLecture(expandedLecture === id ? null : id);
  };

  return (
    <section id="lectures" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">ההרצאות שלי</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {lectures.map((lecture, index) => (
          <motion.div
            key={lecture.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card overflow-hidden flex flex-col"
          >
            <div className="p-0 flex flex-col flex-grow">
              {/* Lecture Image */}
              <div className="relative w-full h-64 flex-shrink-0">
                <Image
                  src={lecture.imagePath}
                  alt={lecture.title}
                  fill
                  className={`object-cover ${lecture.id === 2 ? "object-top" : ""}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-heading font-bold text-primary-800 mb-4">
                  {lecture.title}
                </h3>

                <div className="flex-grow">
                  <p className="text-black mb-4 leading-relaxed min-h-[80px]">
                    {lecture.teaser}
                  </p>

                  {expandedLecture === lecture.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <p
                        className={`text-black leading-relaxed ${
                          [1, 2, 3, 4].includes(lecture.id) ? "text-sm md:text-base" : ""
                        }`}
                        style={
                          [1, 2, 3, 4].includes(lecture.id)
                            ? { fontFamily: "Calibri, Arial, sans-serif" }
                            : undefined
                        }
                      >
                        {lecture.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                <button
                  onClick={() => toggleLecture(lecture.id)}
                  className="text-accent-500 hover:text-accent-600 font-semibold transition-colors mt-auto"
                >
                  {expandedLecture === lecture.id ? "הסתר פרטים" : "קרא עוד"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
