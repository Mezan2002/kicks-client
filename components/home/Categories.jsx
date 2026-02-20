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
    <div className="bg-secondary px-[60px] pt-24 -mx-[60px]">
      <div className="flex items-end justify-between pb-16">
        <h2 className="text-[74px] font-semibold text-white uppercase leading-none max-w-[50%]">
          Categories
        </h2>
        <div className="flex items-center gap-4">
          <button className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronLeftIcon />
          </button>
          <button className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 -mr-[60px]">
        {loading ? (
          <div className="col-span-2 min-h-[550px] bg-[#ECEEF0] rounded-tl-[64px] flex items-center justify-center pr-[60px]">
            <GenericLoader />
          </div>
        ) : error ? (
          <div className="col-span-2 py-20 pr-[60px]">
            <ErrorCard message={error} />
          </div>
        ) : displayCategories.length === 0 ? (
          <div className="col-span-2 py-20 pr-[60px]">
            <EmptyStateCard title="No categories found" />
          </div>
        ) : (
          displayCategories.map((category, index) => (
            <div
              key={category.id}
              className={`relative min-h-[550px] border-r border-[#C2C2C3] bg-[#F6F6F6] ${
                index === 0 ? "rounded-tl-[64px] bg-[#ECEEF0]!" : ""
              } flex flex-col justify-between p-12 overflow-hidden group`}
            >
              {/* Image container */}
              <div className="flex items-center justify-center pointer-events-none">
                <div className="relative w-[80%] aspect-square">
                  <Image
                    src={category?.image}
                    alt={category?.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-secondary text-4xl font-semibold uppercase leading-[1.1] max-w-[280px]">
                    {category.name.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>
                </div>

                <div className="relative z-10 flex justify-end">
                  <button className="bg-secondary p-2 rounded-lg">
                    <ArrowRightUp />
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
