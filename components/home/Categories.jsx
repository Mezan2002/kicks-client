"use client";

import EmptyStateCard from "@/components/shared/EmptyStateCard";
import ErrorCard from "@/components/shared/ErrorCard";
import GenericLoader from "@/components/shared/GenericLoader";
import {
  ArrowRightUp,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/ui/customSvg";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import { useRef, useState } from "react";

/**
 * Categories component renders an interactive hero carousel of product categories.
 * Features:
 * - Dynamic data fetching via useAxios.
 * - Snap-mandatory horizontal scrolling.
 * - Scroll progress tracking for navigation control.
 */
const Categories = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const {
    data: categories,
    loading,
    error,
  } = useAxios("https://api.escuelajs.co/api/v1/categories");

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

  return (
    <div className="bg-secondary px-4 md:px-[60px] pt-12 md:pt-24 -mx-4 md:-mx-[60px]">
      <div className="flex items-center justify-between pb-8 md:pb-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-[74px] font-bold text-white uppercase leading-none">
          Categories
        </h2>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => handleScroll("left")}
            disabled={scrollProgress <= 0}
            className={`p-2 md:p-3 rounded-lg transition-colors ${
              scrollProgress <= 0
                ? "bg-white/20 cursor-not-allowed"
                : "bg-white/90 hover:bg-white"
            }`}
          >
            <ChevronLeftIcon
              strokeColor={scrollProgress <= 0 ? "#2323214D" : "#232321"}
            />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={scrollProgress >= 100}
            className={`p-2 md:p-3 rounded-lg transition-colors ${
              scrollProgress >= 100
                ? "bg-white/20 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <ChevronRightIcon
              strokeColor={scrollProgress >= 100 ? "#2323214D" : "#232321"}
            />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateProgress}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth -mr-20 rounded-tl-[48px] md:rounded-tl-[64px]"
      >
        {loading || !categories ? (
          <div className="min-w-full min-h-[400px] md:min-h-[550px] bg-[#ECEEF0] rounded-tl-[48px] md:rounded-tl-[64px] flex items-center justify-center">
            <GenericLoader />
          </div>
        ) : error ? (
          <div className="min-w-full py-10 md:py-20">
            <ErrorCard message={error} />
          </div>
        ) : categories?.length === 0 ? (
          <div className="min-w-full py-10 md:py-20">
            <EmptyStateCard title="No categories found" />
          </div>
        ) : (
          categories?.map((category, index) => (
            <div
              key={category.id}
              className={`relative min-w-full md:min-w-[50%] h-[480px] md:h-[600px] border-b md:border-b-0 md:border-r border-[#C2C2C3] bg-[#F6F6F6] snap-start ${
                index === 0 ? "bg-[#ECEEF0]!" : ""
              } flex flex-col justify-between p-8 md:p-12 overflow-hidden group`}
            >
              {/* Image container */}
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="relative w-full aspect-4/3 max-w-[280px] md:max-w-full">
                  <Image
                    src={category?.image}
                    alt={category?.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 mt-auto">
                <div className="relative z-10">
                  <h3 className="text-secondary text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight max-w-[200px] md:max-w-[280px]">
                    {category.name}
                  </h3>
                </div>

                <div className="relative z-10">
                  <button className="bg-secondary p-2 rounded-lg hover:bg-primary transition-colors active:scale-90 flex items-center justify-center">
                    <ArrowRightUp className="size-6 md:size-8" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
