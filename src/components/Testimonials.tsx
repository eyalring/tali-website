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
    name: "ענבל לוי",
    role: "",
    content:
      "היה ממש כייף! וכן, אם יזדמן לכו לשמוע את Tali Surfing Ringwald ותזמינו אותה להרצות במקומות העבודה שלכן ובבתי הספר של הילדים שלכן. מומלצת בחום!",
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
  {
    id: 8,
    name: "גלית זר בסון",
    role: "כתיבת תוכן | שיווק דיגיטלי | עיצוב ובניית אתרים. מייסדת ומנהלת את קהילת השוות של ראש העין",
    content:
      "התוכן שבחמישי האחרון נפגשנו לערב #שווהקפה שהשאיר אותנו מרותקות תרתי משמע (ויעידו אלו שלא רצו ללכת לשירותים כדי לא לפספס אפילו מילה😉) על ההרצאה המרתקת אחראית ד״ר Tali Sufrin-Ringwald שיצאה ממעבדת המחקר והיום היא מרצה נהדרת. היא דיברה איתנו על הגנטיקה של האימהות, על המוח ועל סוגי האימהות שיש בטבע, והשאירה אותנו עם הרצון לשמוע עוד. זו הרצאה חובה לכל אישה ולכל אימא! אז ממליצה לכן בחום לעקוב אחריה. טלי, תודה ענקית על הרצאה מרתקת!",
  },
];
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const fadeVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
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
          <div className="relative w-full pt-16 pb-16 md:pt-0 md:pb-0">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="w-full"
              >
                <p className="text-lg md:text-xl text-black leading-relaxed mb-6 italic">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>
                <div className="text-right">
                  <p className="font-bold text-primary-800 text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  {testimonials[currentIndex].role && (
                    <p className="text-black">
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
            className="absolute left-2 md:-left-8 bottom-4 md:top-1/2 md:transform md:-translate-y-1/2 bg-white hover:bg-primary-500 text-primary-600 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:-right-8 bottom-4 md:top-1/2 md:transform md:-translate-y-1/2 bg-white hover:bg-primary-500 text-primary-600 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
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
