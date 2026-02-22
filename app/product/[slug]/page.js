/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import GenericLoader from "@/components/shared/GenericLoader";
import RelatedProducts from "@/components/shared/RelatedProducts";
import useAxios from "@/hooks/useAxios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const {
    data: products,
    loading,
    error,
  } = useAxios("https://api.escuelajs.co/api/v1/products");

  useEffect(() => {
    if (products && slug) {
      const foundProduct = products.find((p) => p.slug === slug);
      setProduct(foundProduct);
    }
  }, [products, slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GenericLoader />
      </div>
    );
  }

  if (error || (!loading && !product)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Product Not Found
        </h2>
        <p className="text-secondary/60 max-w-md">
          {error ||
            "The product you are looking for does not exist or has been removed."}
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="px-4 md:px-[60px] py-4 md:py-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-11">
          <ProductGallery images={product?.images} />
          <ProductInfo product={product} />
        </div>

        <RelatedProducts
          categoryId={product?.category?.id}
          currentProductId={product?.id}
        />
      </div>
    </main>
  );
};

export default ProductDetailPage;
