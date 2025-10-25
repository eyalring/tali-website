"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "דפנה גור",
    role: "מנהלת קהילה",
    content:
      "היה לנו כיף בהרצאה של דר' טלי על גנטיקה. נושא מרתק ומדענית נפלאה שיודעת להעביר את הידע והתשוקה שלה לנושא באופן שגורם לך להתאהב במדע. ההרצאה מועברת בצורה נהדרת, נעימה וקליטה עם הרבה דוגמאות, היא גורמת לך לחשוב ופותחת צוהר לעולם שלא כולם מכירים בתוספת צחוק והנאה במהלך ההרצאה ועוד הרבה נושאים שכדאי לשמוע מדר' טלי. ממליצה בחום לכל אירוע שתרצו לארגן בין אם זה קהילתי משפחתי נשים או בבתי הספר של הילדים שלכן. מומלצת בחום!",
  },
  {
    id: 2,
    name: "ורה אורמן",
    role: "מאמנת ומלווה נשים",
    content:
      'איזה ערב מדהים של הקהילה השווה שלנו "שווה קפה" עם הרצאה של Tali Sufrin-Ringwald על הגנטיקה של אמהות אחת ההרצאות המרתקות ששמעתי בחיי! אם יהיה שוב פשוט רוצו!',
  },
  {
    id: 3,
    name: "תמר דייויס",
    role: "",
    content: "הרצאה מעולה! צחקתי הרבה ונהנתי מאוד! 🤩",
  },
  {
    id: 4,
    name: "תמי קרן",
    role: "מורה למדעים בחטיבת השחר",
    content:
      "צפיתי בהרצאה של טלי בגנטיקה עם כיתת ח מופת שאני מלמדת בה מדעים ופיזיקה. נהניתי מאוד מההרצאה. התרשמתי מהאופן שבו טלי העבירה את החומר, תוך שילוב מצגת צבעונית, והפעלת הילדים. הילדים גילו עניין, ושיתפו פעולה. שאלו שאלות עליהן ענתה טלי בסבלנות ולעניין. ממליצה בחום להזמין את ההרצאה, לכיתות מצויינות ואף כיתה ט בחטיבה, הלומדים את הנושא בביולוגיה.",
  },
  {
    id: 5,
    name: "סוזי וישראל מנדל",
    role: "",
    content:
      "השתתפנו בהרצאה של דר' טלי סופרין רינגולד בנושא גנטיקה. טלי העבירה את החומר באופן ברור, מובן ומגוון, גם למי שלא מתמצא בתחום. ההרצאה מלווה במצגת שתורמת להבנת העניין. נהננו מאוד והשכלנו. מחכים להרצאות נוספות.",
  },
  {
    id: 6,
    name: "לאה שוסטר",
    role: "חוג בית",
    content:
      "שלום רב, השתתפתי בהרצאה של דר' טלי סופרין רינגולד בנושא גנטיקה ''על קצה המדע''. למרות שאני עוסקת ומתעניינת בעיקר בתחומים שאינם קשורים למדעי הטבע, דר' רינגולד ריתקה אותי ואת כל הקבוצה שנכחה בהרצאה, והצליחה להעביר נושא מדעי בצורה מהנה ומובנת, גם לאלה ללא רקע קודם. אני ממליצה בחום על ההרצאה ומחכה כבר להרצאות נוספות.",
  },
  {
    id: 7,
    name: "אילה אורי",
    role: "דיאטנית קלינית",
    content:
      "היי טלי, רציתי להגיד לך שההרצאה שלך היתה אחת ההרצאות הטובות והמרתקות ששמעתי בחיי. את מרצה בחסד, שולטת בחומר בצורה מדהימה, המצגת שלך בנויה לתפארת, וזה ממש לא דומה לקורס הגנטיקה הכל כך חדגוני שלמדתי בתואר שלי לפני יותר מ-30 שנה. ממש עשית את הצעד הנכון, וההרגשה היא שהעולם חיכה לך שתגלי לו את כל הידע המרתק הזה!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">המלצות</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-xl p-8 md:p-12 min-h-[350px] flex items-center">
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 text-primary-200 opacity-50">
            <FaQuoteRight className="text-6xl" />
          </div>

          {/* Testimonial Content */}
          <div className="relative w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="text-right">
                  <p className="font-bold text-primary-800 text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  {testimonials[currentIndex].role && (
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary-500 text-primary-600 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary-500 text-primary-600 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-reverse space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
