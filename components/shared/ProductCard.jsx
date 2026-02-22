import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`} className="block group">
      <div className="bg-white p-1.5 md:p-2 rounded-2xl md:rounded-[28px] overflow-hidden relative">
        <div className="relative h-[164px] md:h-[334px] w-full overflow-hidden rounded-xl md:rounded-3xl">
          <Image
            src={product.images?.[0] || "/images/home/hero-banner.png"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-1.5 md:top-2 left-1.5 md:left-2 px-3 py-1.5 md:px-4 md:py-3 bg-primary rounded-tl-xl md:rounded-tl-3xl rounded-br-xl md:rounded-br-3xl">
          <p className="text-[10px] md:text-xs font-bold text-white uppercase">
            New
          </p>
        </div>
      </div>
      <div className="mt-4 px-1">
        <h5 className="text-base md:text-2xl font-semibold text-secondary uppercase mb-3 line-clamp-3 md:line-clamp-2 min-h-[62px] md:min-h-[64px] leading-tight group-hover:text-primary transition-colors">
          {product.title}
        </h5>
        <div className="py-2.5 md:py-4 w-full rounded-lg text-xs md:text-sm font-medium text-white bg-secondary text-center uppercase tracking-wider group-hover:bg-primary transition-colors active:scale-95">
          View Product -{" "}
          <span className="text-yellow ml-0.5">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
