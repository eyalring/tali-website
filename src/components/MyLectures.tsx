"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaDna, FaVirus, FaMicroscope, FaBaby } from "react-icons/fa";

interface Lecture {
  id: number;
  title: string;
  teaser: string;
  description: string;
  icon: React.ReactNode;
}

const lectures: Lecture[] = [
  {
    id: 1,
    title: "גנטיקה - סרט מדע בדיוני או מציאות?",
    teaser:
      "תארו לכם עולם שבו הדרך הטבעית להביא ילדים לעולם היא דרך הפריה חוץ גופית...",
    description: `תארו לכם עולם שבו הדרך הטבעית להביא ילדים לעולם היא דרך הפריה חוץ גופית ופגישה עם גנטיקאי/ת על מנת לבחור עובר בעל תכונות רצויות. עולם בו ברגע שתינוק מגיח לעולם, אפשר לדעת עליו הכל, מבחינה גנטית, באמצעות בדיקת דם אחת, אפילו מה הצפי לתוחלת החיים שלו. תארו לכם עולם בו ניתן לתקן גנים פגומים ולרפא מחלות תורשתיות וגנטיות כמו סרטן או אלצהיימר ואפילו אפשר לגדל איברים להשתלה במעבדה נשמע קצת כמו סרט מדע בדיוני לא? בואו לצלול איתי אל תוך העולם הכי מרתק שיש, עולם הגנטיקה יחד נבין מושגים בסיסיים כמו מהו DNA? מהם כרומוזומים וגנים? איך תכונות מועברות בתורשה לצאצאים? מהן מוטציות? איך הן קורות ולאיזה תסמונות הן עלולות לגרום? מה זה סרטן? ואיך המחקר הגנטי מקדם אותנו כל יום במלחמה במחלה זו? מה המחקר הגנטי מאפשר לעשות היום מה הוא יאפשר לעשות בעתיד ומה לא כדאי שנעשה אפילו שכבר אפשר ואיך הוא משנה את העולם שלנו ואת החיים שלנו כל יום עוד קצת. בואו לגלות איתי האם אנחנו כבר חיים בסרט מדע בדיוני? האם אנחנו רחוקים מזה או שמא המציאות עולה על כל דמיון?`,
    icon: <FaDna className="text-4xl" />,
  },
  {
    id: 2,
    title: "לחשוב מחוץ ל DNA - אפיגנטיקה המדע שמשנה את חוקי המשחק",
    teaser:
      "ה DNA שלנו קובע את המין הביולוגי שלנו, את הגובה שלנו, את סוג הדם שלנו...",
    description: `ה DNA שלנו קובע את המין הביולוגי שלנו, את הגובה שלנו, את סוג הדם שלנו. הוא קובע איזה מחלות גנטיות יהיו לנו ואפילו כמה חכמים נהיה ואיך נזדקן. ה DNA הוא ספר ההוראות ליצירת האורגניזם השלם אבל האם הוא מחליט הכל? או אולי יש מנגנונים נוספים המכבים ומדליקים גנים? המחליטים איזה DNA יתבטא מתי? בהרצאה זו נצלול אל עולם האפיגנטיקה. עולם שבו חוויות חיים וגורמים סביבתיים משפיעים על "מתג ההפעלה והכיבוי" של הגנים שלנו. נדון בסוגיה המהותית בין ה DNA לסביבה (nature vs nurture) נבחן כיצד מנגנונים אפיגנטיים יכולים להשפיע על הבריאות הפיזית והנפשית שלנו, על המוח שלנו על ההזדקנות שלנו ואף על בריאות ילדינו ונכדינו ונראה איך אפיגנטיקה מפריכה את ההנחה הגנטית של אבי תורת האבולוציה צ'רלס דרווין המניחה שחיה או בן אדם הם מכונות ביולוגיות בנויות על ה DNA שלהם שאינם מושפעים מסביבתם. תנו הזדמנות לאפיגנטיקה לפרק אמונות מגבילות בזיקה הבלתי נראית בין אמונות ובריאות.`,
    icon: <FaMicroscope className="text-4xl" />,
  },
  {
    id: 3,
    title: "לעשות ילד? איפה האבא בסיפור? גנטיקה ואבולוציה של אמהות ואבהות",
    teaser:
      "להיות אימהות זו התנסות רגשית מאוד. יש בה הרבה אושר ואהבה לצד רגעים קשים...",
    description: `להיות אימהות זו התנסות רגשית מאוד. יש בה הרבה אושר ואהבה לצד רגעים קשים, לחוץ קשים ובמיוחד צורך להיות מושלמת בתפקיד. אבל מאיפה מגיעה להורים כל הרצון לטפל ולהשקיע כוח כסף וזמן בגידול ילדים? האם אבא ואימהות חשים אותו דבר? מתי התחילה הורות? האם ילדים וילדות דומים לאבא או לאימהות? יותר? מהי חוכמת ההורות? לעומת זאת אבא יכול לטייל לוונצואלה בזמן שאימהות בחופשת לידה. ומה קורה אחרי הלידה? האם אתה עוקב אחרי הילדים? האם מחוברים? למה אבא לא מניק? אבא באמת יותר חזק מאימהות או שמא אימהות חזקה יותר מאבא? אבא או אימהות שוחרים, חלשים, משחקים בכדור עם התינוקות? גנטיקה? ומי הורש מה בטירוף? השיער של אבא? חיוך אימהות? התשוקה להצלחה של אימהות? חרדה מאבא? איך יורשים תכונות? מה עוד יורשים? רגש? מנטליות? מחלות? אישיות? חוויות? אבא והאם בקונפליקט חריף לגבי דרישות הילד. ומה עם אחים ואחיות? מה עם הסבתות אם ודאי אלה ערב נשים מרתק שעונה על השאלות האלה ועוד בעזרת הנושא המרתק של גנטיקה ואבולוציה, הרבה התובנות ונקודות מבט שלא נחשבות עליהן!`,
    icon: <FaBaby className="text-4xl" />,
  },
  {
    id: 4,
    title: "זה ויראלי עולם קטן ומשוגע",
    teaser: "וירוסים. הגופים הכי קטנים והכי רבים על פני כדור הארץ...",
    description: `וירוסים. הגופים הכי קטנים והכי רבים על פני כדור הארץ. הם לא רק יכולים לשנות את ההיסטוריה האנושית, הם גם יכולים לעזור לנו. בהרצאה נכיר את העולם המדהים של הוירוסים - כיצד הם פועלים, מדוע חלקם מסוכנים וחלקם לא, וכיצד החוקרים לומדים להשתמש בהם לטובתנו. נדבר על מגפות, חיסונים, ויראלים מועילים, וכיצד הטכנולוגיה המודרנית עוזרת לנו להילחם בהם. הרצאה רלוונטית ומרתקת במיוחד לתקופה שלנו.`,
    icon: <FaVirus className="text-4xl" />,
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
            className="card overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center mb-4 text-primary-600">
                {lecture.icon}
                <h3 className="text-xl md:text-2xl font-heading font-bold mr-4">
                  {lecture.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
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
                  <p className="text-gray-700 leading-relaxed">
                    {lecture.description}
                  </p>
                </motion.div>
              )}

              <button
                onClick={() => toggleLecture(lecture.id)}
                className="text-accent-500 hover:text-accent-600 font-semibold transition-colors"
              >
                {expandedLecture === lecture.id ? "הסתר פרטים" : "קרא עוד"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
