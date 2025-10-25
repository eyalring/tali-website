"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  placeholder: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "הרצאה בקהילה",
    description: 'הרצאת גנטיקה מרתקת למבוגרים במתנ"ס',
    placeholder: "🎤",
  },
  {
    id: 2,
    title: "הרצאה לתלמידי תיכון",
    description: "שיעור על וירולוגיה לתלמידי תיכון",
    placeholder: "🎓",
  },
  {
    id: 3,
    title: "יום האישה",
    description: "הרצאה מיוחדת ליום האישה בחברת היי-טק",
    placeholder: "💼",
  },
  {
    id: 4,
    title: "הרצאת בית",
    description: "ערב אינטימי עם קבוצה פרטית",
    placeholder: "🏡",
  },
  {
    id: 5,
    title: "במעבדה",
    description: "הדגמות מעבדתיות והסברים על מחקר",
    placeholder: "🔬",
  },
  {
    id: 6,
    title: "אירוע קהילתי",
    description: "הרצאה באירוע קהילתי גדול",
    placeholder: "🎪",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToNext();
    if (e.key === "ArrowRight") goToPrevious();
  };

  return (
    <section id="gallery" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">גלריה</h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          תמונות מהרצאות, אירועים ופעילויות שונות
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            {/* Show real image for image 1, emoji placeholder for others */}
            {image.id === 1 ? (
              <Image
                src={`/images/gallery/${image.id}.jpg`}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-200 via-accent-100 to-primary-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="text-center">
                  <div className="text-6xl mb-2">{image.placeholder}</div>
                  <p className="text-gray-700 font-semibold px-4">
                    {image.title}
                  </p>
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <h3 className="text-white font-bold text-lg mb-1">
                  {image.title}
                </h3>
                <p className="text-white/90 text-sm">{image.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Images Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 p-6 bg-accent-50 border border-accent-200 rounded-xl"
      >
        <p className="text-center text-gray-700">
          💡 <strong>הוראות להוספת תמונות:</strong> שמור תמונות אמיתיות בתיקיה{" "}
          <code className="bg-white px-2 py-1 rounded">
            public/images/gallery/
          </code>{" "}
          ועדכן את הקוד להשתמש בתמונות האמיתיות במקום ה-placeholders.
        </p>
      </motion.div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 text-white text-3xl hover:text-accent-400 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-accent-400 transition-colors z-50"
            aria-label="Previous image"
          >
            <FaChevronRight />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-accent-400 transition-colors z-50"
            aria-label="Next image"
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Placeholder */}
              <div className="bg-gradient-to-br from-primary-200 via-accent-100 to-primary-300 rounded-lg p-12 max-w-2xl text-center">
                <div className="text-9xl mb-4">
                  {galleryImages[selectedImage].placeholder}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
              {/* Uncomment when you have actual images:
              <Image
                src={`/images/gallery/${galleryImages[selectedImage].id}.jpg`}
                alt={galleryImages[selectedImage].title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              */}
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold mb-1">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {galleryImages[selectedImage].description}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
