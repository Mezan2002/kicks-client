const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-white p-2 rounded-[28px] overflow-hidden relative">
        {/* Image Placeholder */}
        <div className="bg-gray-200 rounded-3xl w-full h-[334px]" />

        {/* Badge Placeholder */}
        <div className="absolute top-2 left-2 px-8 py-5 bg-gray-300 rounded-tl-3xl rounded-br-3xl" />
      </div>

      <div className="mt-4">
        {/* Title Placeholder */}
        <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-2" />
        <div className="h-8 bg-gray-300 rounded-md w-1/2 mb-4" />

        {/* Button Placeholder */}
        <div className="h-[52px] w-full rounded-lg bg-gray-300" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
