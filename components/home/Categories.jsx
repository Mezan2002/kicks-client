"use client";

import GenericLoader from "@/components/shared/GenericLoader";

import EmptyStateCard from "@/components/shared/EmptyStateCard";
import ErrorCard from "@/components/shared/ErrorCard";
import {
  ArrowRightUp,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/ui/customSvg";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";

const Categories = () => {
  const {
    data: categories,
    loading,
    error,
  } = useAxios("https://api.escuelajs.co/api/v1/categories");

  const displayCategories = categories?.slice(0, 2) || [];

  return (
    <div className="bg-secondary px-4 md:px-[60px] pt-12 md:pt-24 -mx-4 md:-mx-[60px]">
      <div className="flex items-center justify-between pb-8 md:pb-16">
        <h2 className="text-2xl md:text-[74px] font-bold text-white uppercase leading-none">
          Categories
        </h2>
        <div className="flex items-center gap-2 md:gap-4">
          <button className="bg-white/90 p-2 md:p-3 rounded-lg hover:bg-white transition-colors">
            <ChevronLeftIcon />
          </button>
          <button className="bg-white p-2 md:p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {loading ? (
          <div className="col-span-1 md:col-span-2 min-h-[400px] md:min-h-[550px] bg-[#ECEEF0] rounded-tl-[48px] md:rounded-tl-[64px] flex items-center justify-center">
            <GenericLoader />
          </div>
        ) : error ? (
          <div className="col-span-1 md:col-span-2 py-10 md:py-20">
            <ErrorCard message={error} />
          </div>
        ) : displayCategories.length === 0 ? (
          <div className="col-span-1 md:col-span-2 py-10 md:py-20">
            <EmptyStateCard title="No categories found" />
          </div>
        ) : (
          displayCategories.map((category, index) => (
            <div
              key={category.id}
              className={`relative h-[480px] md:h-[550px] border-b md:border-b-0 md:border-r border-[#C2C2C3] bg-[#F6F6F6] ${
                index === 0
                  ? "rounded-tl-[48px] md:rounded-tl-[64px] bg-[#ECEEF0]!"
                  : ""
              } flex flex-col justify-between p-8 md:p-12 overflow-hidden group`}
            >
              {/* Image container */}
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="relative w-full aspect-square max-w-[280px] md:max-w-full">
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
                  <h3 className="text-secondary text-2xl md:text-4xl font-bold uppercase leading-tight max-w-[200px] md:max-w-[280px]">
                    {category.name}
                  </h3>
                </div>

                <div className="relative z-10">
                  <button className="bg-secondary p-3 md:p-2 rounded-lg hover:bg-primary transition-colors active:scale-90">
                    <ArrowRightUp className="size-5 md:size-6" />
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
