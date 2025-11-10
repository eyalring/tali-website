import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-20 right-3 z-50 flex flex-col gap-2 md:hidden">
      <a
        href="tel:+972507774581"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-300"
        aria-label="התקשרו אליי"
      >
        <FaPhone className="h-4 w-4" />
      </a>
      <a
        href="https://wa.me/972507774581"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-label="צור קשר בוואטסאפ"
      >
        <FaWhatsapp className="h-5 w-5" />
      </a>
    </div>
  );
}

