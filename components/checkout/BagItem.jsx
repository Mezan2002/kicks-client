"use client";

import { BinIcon, ChevronDownIcon, HeartIcon } from "@/components/ui/customSvg";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BagDropdown = ({ label, value, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-secondary/70 text-xs md:text-xl font-semibold font-open-sans hover:text-secondary transition-colors"
      >
        {label} {value}
        <div className="hidden lg:block">
          <ChevronDownIcon />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-10 py-2 min-w-[120px] max-h-[200px] overflow-y-auto no-scrollbar animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm md:text-base font-semibold font-open-sans transition-colors ${
                value === option
                  ? "bg-secondary text-white"
                  : "text-secondary/70 hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const BagItem = ({ item }) => {
  const { removeFromCart, updateQuantity, updateSize } = useCart();

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex gap-4 md:gap-6 border-b border-gray-100 last:border-none py-6 first:pt-0">
      <div className="relative w-[150px] h-[220px] md:w-[207px] md:h-[225px] shrink-0 rounded-3xl overflow-hidden bg-[#F6F6F6]">
        <Image
          src={item?.images?.[0] || "/placeholder.png"}
          alt={item?.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col md:flex-row justify-between gap-2 md:gap-4">
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-base md:text-2xl font-semibold text-secondary uppercase leading-tight">
            {item?.title}
          </h3>
          <p className="text-secondary/80 md:text-xl font-semibold font-open-sans">
            {item?.category?.name}
          </p>
          <p className="text-secondary/80 md:text-xl font-semibold font-open-sans">
            {item?.selectedColor || "Default"}
          </p>

          <div className="flex items-center gap-4 md:gap-10 md:mt-3">
            <BagDropdown
              label="Size"
              value={item?.selectedSize}
              options={sizes}
              onSelect={(newSize) =>
                updateSize(
                  item.id,
                  item.selectedSize,
                  item.selectedColor,
                  newSize,
                )
              }
            />
            <BagDropdown
              label="Quantity"
              value={item?.quantity}
              options={quantities}
              onSelect={(newQty) =>
                updateQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor,
                  newQty,
                )
              }
            />
          </div>

          <div className="flex items-center gap-6 mt-2 md:mt-8">
            <button className="hover:text-primary transition-colors text-secondary/70">
              <HeartIcon
                className="size-6 md:size-8"
                strokeColor="currentColor"
                strokeWidth={1}
              />
            </button>
            <button
              onClick={() =>
                removeFromCart(item.id, item.selectedSize, item.selectedColor)
              }
              className="hover:text-red-500 transition-colors text-secondary/70"
            >
              <BinIcon className="size-6 md:size-8" />
            </button>
          </div>
        </div>

        <p className="text-primary text-lg md:text-2xl font-semibold whitespace-nowrap">
          ${item?.price?.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default BagItem;
