import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`} className="block">
      <div className="bg-white p-2 rounded-[28px] overflow-hidden relative">
        <Image
          src={product.images?.[0] || "/images/home/hero-banner.png"}
          alt={product.title}
          height={334}
          width={302}
          className="object-cover rounded-3xl w-full h-[334px]"
        />
        <div className="absolute top-2 left-2 px-4 py-3 bg-primary rounded-tl-3xl rounded-br-3xl">
          <p className="text-xs font-medium text-white">New</p>
        </div>
      </div>
      <div className="mt-4">
        <h5 className="text-2xl font-semibold text-secondary uppercase mb-4 line-clamp-2 h-16">
          {product.title}
        </h5>
        <div className="py-4 w-full rounded-lg text-sm font-medium text-white bg-secondary text-center">
          View Product - <span className="text-yellow">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
