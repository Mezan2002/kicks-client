import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`} className="block group">
      <div className="bg-white p-1.5 md:p-2 rounded-[24px] md:rounded-[28px] overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
        <div className="relative aspect-square sm:aspect-3/4 md:h-[334px] w-full overflow-hidden rounded-xl md:rounded-3xl">
          <Image
            src={product.images?.[0] || "/images/home/hero-banner.png"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-2 left-2 px-3 py-1.5 md:px-4 md:py-3 bg-primary rounded-tl-xl md:rounded-tl-3xl rounded-br-xl md:rounded-br-3xl">
          <p className="text-[10px] md:text-xs font-bold text-white uppercase">
            New
          </p>
        </div>
      </div>
      <div className="mt-3 md:mt-4 px-1">
        <h5 className="text-base md:text-2xl font-bold text-secondary uppercase mb-3 line-clamp-2 min-h-[40px] md:min-h-[64px] leading-tight group-hover:text-primary transition-colors">
          {product.title}
        </h5>
        <div className="py-3 md:py-4 w-full rounded-lg text-[10px] md:text-sm font-medium text-white bg-secondary text-center uppercase tracking-wider group-hover:bg-primary transition-colors active:scale-95">
          View Product -{" "}
          <span className="text-yellow ml-0.5">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
