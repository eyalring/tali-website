"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "הרצאה בקהילה",
    description: 'הרצאת גנטיקה מרתקת למבוגרים במתנ"ס',
  },
  {
    id: 2,
    title: "הרצאה לתלמידי תיכון",
    description: "שיעור על וירולוגיה לתלמידי תיכון",
  },
  {
    id: 3,
    title: "יום האישה",
    description: "הרצאה מיוחדת ליום האישה בחברת היי-טק",
  },
  {
    id: 4,
    title: "הרצאת בית",
    description: "ערב אינטימי עם קבוצה פרטית",
  },
  {
    id: 5,
    title: "במעבדה",
    description: "הדגמות מעבדתיות והסברים על מחקר",
  },
  {
    id: 6,
    title: "אירוע קהילתי",
    description: "הרצאה באירוע קהילתי גדול",
  },
  {
    id: 7,
    title: "תמונה 7",
    description: "תיאור קצר לתמונה 7",
  },
  {
    id: 8,
    title: "תמונה 8",
    description: "תיאור קצר לתמונה 8",
  },
  {
    id: 9,
    title: "תמונה 9",
    description: "תיאור קצר לתמונה 9",
  },
  {
    id: 10,
    title: "תמונה 10",
    description: "תיאור קצר לתמונה 10",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

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
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              activeTab === "images"
                ? "bg-primary-800 text-white border-primary-800"
                : "bg-white text-primary-800 border-primary-300 hover:bg-primary-50"
            }`}
          >
            תמונות
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              activeTab === "videos"
                ? "bg-primary-800 text-white border-primary-800"
                : "bg-white text-primary-800 border-primary-300 hover:bg-primary-50"
            }`}
          >
            סרטונים
          </button>
        </div>
      </motion.div>

      {activeTab === "images" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group relative w-full h-28 sm:h-32 rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={`/images/gallery/${image.id}.jpg`}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === "videos" && (
        <div className="text-center text-black mt-8">
          <p>סרטונים יופיעו כאן בקרוב.</p>
        </div>
      )}

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
              <Image
                src={`/images/gallery/${galleryImages[selectedImage].id}.jpg`}
                alt={galleryImages[selectedImage].title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-white text-center">
              <p className="text-white text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
