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
    <div className="mb-32">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-[74px] font-semibold text-secondary uppercase leading-none max-w-[50%]">
          Don&apos;t miss out new drops
        </h2>
        <button
          type="button"
          className="inline-block bg-primary text-white text-sm font-medium uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Shop New Drops
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        ) : error ? (
          <ErrorCard message={error} />
        ) : !products || products.length === 0 ? (
          <EmptyStateCard
            title="No new drops yet"
            message="Check back soon for our latest collections!"
          />
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
