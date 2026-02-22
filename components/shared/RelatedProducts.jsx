"use client";

import ProductCard from "@/components/shared/ProductCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/customSvg";
import useAxios from "@/hooks/useAxios";
import { useEffect, useMemo, useRef, useState } from "react";

const RelatedProducts = ({ categoryId, currentProductId }) => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const {
    data: products,
    loading,
    error,
  } = useAxios("https://api.escuelajs.co/api/v1/products");
  const relatedProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(
      (p) => p.category.id === categoryId && p.id !== currentProductId,
    );
  }, [products, categoryId, currentProductId]);

  useEffect(() => {
    const updateItemsPerView = () => {
      // Always show 4 items per "page" logic for calculation
      // Mobile: 2x2 grid, Desktop: 1x4 horizontal
      setItemsPerView(4);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalSteps = Math.ceil(relatedProducts.length / 4);
  const activeIndex = Math.round((scrollProgress / 100) * (totalSteps - 1));

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress || 0);
    }
  };

  if (loading || !relatedProducts.length) return null;

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-[44px] font-bold text-secondary">
          You may also like
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleScroll("left")}
            disabled={scrollProgress <= 0}
            className={`size-10 md:size-12 rounded-lg flex items-center justify-center transition-all active:scale-95 ${
              scrollProgress <= 0
                ? "bg-secondary/20 text-white/50 cursor-not-allowed"
                : "bg-secondary text-white hover:bg-secondary/90"
            }`}
          >
            <ChevronLeftIcon strokeColor="white" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={scrollProgress >= 100}
            className={`size-10 md:size-12 rounded-lg flex items-center justify-center transition-all active:scale-95 ${
              scrollProgress >= 100
                ? "bg-secondary/20 text-white/50 cursor-not-allowed"
                : "bg-secondary text-white hover:bg-secondary/90"
            }`}
          >
            <ChevronRightIcon strokeColor="white" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateProgress}
        className="grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-4 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory auto-cols-[calc(50%-8px)] md:auto-cols-[calc(25%-12px)] px-0"
      >
        {relatedProducts.map((product) => (
          <div key={product.id} className="snap-start w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Pagination Indicator / Progress Bar */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-10 rounded-lg transition-all duration-300 ${
                activeIndex === index ? "bg-[#4C6EF5] " : "bg-secondary/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
