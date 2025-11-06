"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual form submission logic
      // For example, send to an API endpoint, email service, or form service like Formspree
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h2 className="section-title text-white">צור קשר</h2>
        <p className="text-center text-primary-100 text-lg mb-12">
          מעוניינים בהרצאה? יש שאלות?
          <span className="block md:inline"> אשמח לשמוע מכם!</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">
              פרטי התקשרות
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-accent-400 text-2xl ml-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">כתובת</p>
                  <p className="text-primary-100">ראש העין, Israel</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-accent-400 text-2xl ml-4 mt-1 flex-shrink-0" />
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

              <div className="flex items-start">
                <FaEnvelope className="text-accent-400 text-2xl ml-4 mt-1 flex-shrink-0" />
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
            <h3 className="text-2xl font-heading font-bold mb-4">עקבו אחריי</h3>
            <div className="flex space-x-reverse space-x-4">
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-8 text-gray-900"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-primary-800">
              שלחו לי הודעה
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  שם מלא <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name", { required: "שדה חובה" })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all text-black"
                  placeholder="הכניסו את שמכם המלא"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  אימייל <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "שדה חובה",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "כתובת אימייל לא תקינה",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all text-black"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold mb-2">
                  טלפון
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all text-black"
                  placeholder="050-123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-2">
                  הודעה <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("message", { required: "שדה חובה" })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none text-black"
                  placeholder="ספרו לי על האירוע, הקהל היעד, וכל מידע נוסף שחשוב לכם..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-6 py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-accent-500 hover:bg-accent-600 text-white transform hover:scale-105"
              }`}
            >
              {isSubmitting ? (
                "שולח..."
              ) : (
                <>
                  <FaPaperPlane className="ml-2" />
                  שלח הודעה
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
              >
                ההודעה נשלחה בהצלחה! אחזור אליכם בהקדם.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
              >
                אירעה שגיאה בשליחת ההודעה. אנא נסו שוב או צרו קשר ישירות בטלפון.
              </motion.div>
            )}

            <p className="text-sm text-gray-500 mt-4 text-center">
              💡 <strong>הערה:</strong> יש להגדיר שירות שליחת טפסים (Formspree,
              EmailJS וכו&apos;) כדי שהטופס יעבוד בפועל.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
