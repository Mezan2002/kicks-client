"use client";

import Image from "next/image";
import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayImages = images?.slice(0, 4) || [];

  if (displayImages.length === 0) {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-[24px] md:rounded-[48px] bg-white/50 flex items-center justify-center border border-black/5">
        <p className="text-secondary opacity-50 font-medium">
          No images available
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile View: Carousel */}
      <div className="md:hidden flex flex-col gap-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src={displayImages[activeIndex]}
            alt={`Product view ${activeIndex + 1}`}
            fill
            className="object-contain"
            priority
          />

          {/* mobile pagination dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#4C6EF5] w-6"
                    : "bg-[#4C6EF5]/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* thumbnails rail for mobile */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative size-20 shrink-0 rounded-lg overflow-hidden bg-white transition-all`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop View: Grid */}
      <div className="hidden md:grid grid-cols-2 gap-4 rounded-[32px] overflow-hidden">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className="relative h-[510px] w-full overflow-hidden bg-[#FAFAFA] border border-black/5"
          >
            <Image
              src={image}
              alt={`Product view ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
