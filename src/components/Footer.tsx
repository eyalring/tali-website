import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              ד"ר טלי סופרין רינגולד
            </h3>
            <p className="text-primary-100">
              הרצאות העשרה בגנטיקה וירולוגיה ומדעי החיים
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              קישורים מהירים
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#lectures"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  ההרצאות שלי
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  אודותיי
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">צור קשר</h3>
            <div className="space-y-3">
              <a
                href="tel:+972507774581"
                className="flex items-center text-primary-100 hover:text-white transition-colors"
              >
                <FaPhone className="ml-2" />
                <span>050-777-4581</span>
              </a>
              <a
                href="mailto:talisuf@gmail.com"
                className="flex items-center text-primary-100 hover:text-white transition-colors"
              >
                <FaEnvelope className="ml-2" />
                <span>talisuf@gmail.com</span>
              </a>
              <div className="flex space-x-reverse space-x-4 mt-4">
                <a
                  href="https://wa.me/972507774581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-primary-100 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61560015465070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-primary-100 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-200">
          <p>© {currentYear} כל הזכויות שמורות | ד"ר טלי סופרין רינגולד</p>
        </div>
      </div>
    </footer>
  );
}
