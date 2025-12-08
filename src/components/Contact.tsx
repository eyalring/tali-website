"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {

  return (
    <section
      id="contact"
      className="section-container bg-gradient-to-b from-primary-700 to-primary-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-white">דברו איתי</h2>
        <p className="text-center text-primary-100 text-lg mb-12">
          מעוניינים בהרצאה? רוצים לשמוע עוד פרטים? יש לכם שאלות? אשמח לשמוע מכם
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">
              פרטי התקשרות
            </h3>

            <div className="space-y-4 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <FaPhone className="text-accent-400 text-2xl ml-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">טלפון</p>
                  <a
                    href="tel:+972507774581"
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    050-777-4581
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <FaEnvelope className="text-accent-400 text-2xl ml-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">אימייל</p>
                  <a
                    href="mailto:talisuf@gmail.com?subject=פניה מהאתר"
                    className="text-primary-100 hover:text-white transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    talisuf@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center space-x-reverse space-x-4">
              <a
                href="https://wa.me/972507774581"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560015465070"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-3xl" />
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">זמינות</h4>
            <p className="text-primary-100">
              אני זמינה להרצאות בכל רחבי הארץ - לקבוצות גדולות וקטנות באירועים פרטיים וציבוריים... פה בשבילכם לכל שאלה 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
