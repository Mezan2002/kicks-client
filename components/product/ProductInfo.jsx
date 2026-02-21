import { HeartIcon } from "@/components/ui/customSvg";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductInfo = ({ product }) => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = ["bg-[#2D3344]", "bg-[#718061]"];
  const colorNames = ["Dark Navy", "Sage Green"];
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="bg-[#4C6EF5] text-white text-[10px] md:text-xs font-bold inline-block px-4 py-3 rounded-xl uppercase">
          New Release
        </p>
        <h1 className="text-2xl md:text-[32px] font-bold text-secondary uppercase leading-[1.1] my-4">
          {product?.title}
        </h1>
        <p className="text-primary text-xl md:text-2xl font-bold">
          ${product?.price?.toFixed(2)}
        </p>
      </div>

      {/* Color Selection */}
      <div>
        <p className="text-secondary font-bold uppercase text-xs md:text-base mb-2">
          Color
        </p>
        <div className="flex gap-4">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`size-8 rounded-full border-2 transition-all p-0.5 ${
                selectedColor === index
                  ? "border-secondary"
                  : "border-transparent"
              }`}
            >
              <div className={`w-full h-full rounded-full ${color}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-secondary font-bold uppercase text-xs md:text-base">
            Size
          </p>
          <button className="text-secondary font-medium uppercase text-xs md:text-sm transition-colors underline decoration-2">
            Size Chart
          </button>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-7 gap-1">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-lg text-sm font-medium transition-all p-4 ${
                selectedSize === size
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              addToCart(product, selectedSize, colorNames[selectedColor]);
              router.push("/cart");
            }}
            className="flex-1 bg-secondary text-white font-medium uppercase text-xs md:text-sm py-4 rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center"
          >
            Add to Cart
          </button>
          <button className="bg-secondary rounded-lg flex items-center hover:bg-secondary/90 justify-center transition-all group p-5">
            <HeartIcon />
          </button>
        </div>
        <button className="w-full bg-[#4C6EF5] text-white font-medium uppercase text-sm py-4 rounded-xl hover:bg-[#4C6EF5]/90 transition-all mt-2">
          Buy It Now
        </button>
      </div>

      {/* About the product */}
      <div>
        <p className="text-secondary font-bold uppercase text-xs md:text-sm mb-4">
          About the product
        </p>
        <p className="text-secondary/70 font-open-sans text-sm md:text-base leading-relaxed">
          {product?.description}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
