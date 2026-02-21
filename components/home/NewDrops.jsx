"use client";

import EmptyStateCard from "@/components/shared/EmptyStateCard";
import ErrorCard from "@/components/shared/ErrorCard";
import ProductCard from "@/components/shared/ProductCard";
import ProductCardSkeleton from "@/components/shared/ProductCardSkeleton";
import useAxios from "@/hooks/useAxios";

const NewDrops = () => {
  const {
    data: products,
    loading,
    error,
  } = useAxios("https://api.escuelajs.co/api/v1/products?offset=0&limit=4");

  return (
    <div className="mb-20 md:mb-32">
      <div className="flex items-center justify-between gap-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-[74px] font-bold text-secondary uppercase leading-[1.1] max-w-[60%] md:max-w-[50%]">
          Don&apos;t miss out new drops
        </h2>
        <button
          type="button"
          className="bg-primary text-white text-[10px] md:text-sm font-bold uppercase tracking-wider px-4 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary/90 transition-all active:scale-95 whitespace-nowrap"
        >
          Shop New Drops
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        ) : error ? (
          <div className="col-span-full">
            <ErrorCard message={error} />
          </div>
        ) : !products || products.length === 0 ? (
          <div className="col-span-full">
            <EmptyStateCard
              title="No new drops yet"
              message="Check back soon for our latest collections!"
            />
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default NewDrops;
