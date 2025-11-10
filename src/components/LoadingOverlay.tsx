"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDna } from "react-icons/fa";

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeout: number | null = null;

    const finishLoading = () => {
      timeout = window.setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-500/10 backdrop-blur-sm"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1.4,
            }}
          >
            <FaDna className="text-4xl text-primary-600 drop-shadow-md" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

