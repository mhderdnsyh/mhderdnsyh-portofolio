"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface DocumentationCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const DocumentationCarousel: React.FC<DocumentationCarouselProps> = ({
  images,
  alt,
  className = "max-h-[320px] object-contain",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Filter out images that failed to load
  const validImages = images.filter((_, idx) => !failedImages[idx]);

  if (!validImages || validImages.length === 0) {
    return null;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  const currentSrc = validImages[currentIndex] || validImages[0];

  return (
    <div className="mt-4 border border-white/10 rounded-2xl overflow-hidden bg-white/5 relative group/carousel select-none">
      {/* Main Image Display */}
      <div className="relative w-full overflow-hidden flex items-center justify-center bg-black/40 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSrc}
            src={currentSrc}
            alt={`${alt} - photo ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className={`w-full h-auto ${className} object-center`}
            onError={() => setFailedImages((prev) => ({ ...prev, [currentIndex]: true }))}
          />
        </AnimatePresence>

        {/* Documentation Tag */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 pointer-events-none">
          <ImageIcon size={12} className="text-indigo-400" />
          <span className="text-white text-[11px] font-mono font-semibold tracking-wider uppercase">
            Documentation
          </span>
        </div>

        {/* Slide Counter (Only if multiple images) */}
        {validImages.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-white text-[11px] font-mono font-medium">
            {currentIndex + 1} / {validImages.length}
          </div>
        )}

        {/* Navigation Controls (Only if multiple images) */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-indigo-600 text-white flex items-center justify-center border border-white/15 opacity-80 hover:opacity-100 transition-all cursor-pointer z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-indigo-600 text-white flex items-center justify-center border border-white/15 opacity-80 hover:opacity-100 transition-all cursor-pointer z-10"
            >
              <ChevronRight size={18} />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {validImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? "w-4 bg-indigo-400"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
