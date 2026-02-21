import Image from "next/image";

const ProductGallery = ({ images }) => {
  // Use first 4 images or repeat if fewer
  const displayImages = images?.slice(0, 4) || [];

  return (
    <div className="grid grid-cols-2 gap-4 rounded-[24px] md:rounded-[32px] overflow-hidden">
      {displayImages.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square md:aspect-auto md:h-[510px] w-full overflow-hidden bg-[#F6F6F6]"
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

      {/* Fallback if no images */}
      {displayImages.length === 0 && (
        <div className="col-span-2 relative aspect-video w-full overflow-hidden rounded-[48px] bg-[#F6F6F6] flex items-center justify-center">
          <p className="text-secondary opacity-50 font-medium">
            No images available
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
