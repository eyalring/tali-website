"use client";

import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

interface TestimonialsProps {
  id?: string;
  limit?: number;
  itemsOverride?: Testimonial[];
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
      'בחמישי האחרון נפגשנו לערב #שווהקפה שהשאיר אותנו מרותקות תרתי משמע (ויעידו אלו שלא רצו ללכת לשירותים כדי לא לפספס אפילו מילה😉) על ההרצאה המרתקת אחראית ד"ר Tali Sufrin-Ringwald שיצאה ממעבדת המחקר והיום היא מרצה נהדרת. היא דיברה איתנו על הגנטיקה של האימהות, על המוח ועל סוגי האימהות שיש בטבע, והשאירה אותנו עם הרצון לשמוע עוד. זו הרצאה חובה לכל אישה ולכל אימא! אז ממליצה לכן בחום לעקוב אחריה. טלי, תודה ענקית על הרצאה מרתקת!',
  },
];

export default function Testimonials({ id = "testimonials", limit, itemsOverride }: TestimonialsProps) {
  const source = itemsOverride ?? testimonials;
  const items = limit ? source.slice(0, limit) : source;

  return (
    <section id={id} className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">המלצות</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <div className="relative h-full bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-lg p-4 md:p-5 flex flex-col">
                <div className="absolute top-4 right-4 text-primary-200 opacity-60">
                  <FaQuoteRight className="text-3xl" />
                </div>

                <p className="text-sm md:text-base text-black leading-relaxed mb-3 mt-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="mt-auto text-right">
                  <p className="font-bold text-primary-800 text-base md:text-lg">
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p className="text-black text-sm md:text-base">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
