import Image from "next/image";

import { StarIcon } from "@/components/ui/customSvg";

const ReviewCard = ({
  title = "Good Quality",
  comment = "I highly recommend shopping from kicks",
  rating = 5.0,
  authorImage,
  reviewImage,
}) => {
  return (
    <div className="bg-white rounded-[24px] md:rounded-4xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow group">
      <div className="p-6 md:p-8 flex-1">
        <div className="flex justify-between items-start gap-4 mb-4 md:mb-2">
          <div className="flex-1">
            <h4 className="text-xl md:text-2xl font-bold text-secondary mb-1">
              {title}
            </h4>
            <p className="text-secondary/70 font-open-sans text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
              {comment}
            </p>
          </div>
          <div className="relative size-12 md:size-16 rounded-full overflow-hidden border-2 border-primary/10 shrink-0">
            <Image
              src={authorImage || "/images/home/review-author-1.png"}
              alt="Reviewer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="size-4 md:size-5" />
          ))}
          <span className="text-secondary font-bold font-open-sans text-sm md:text-base ml-1">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={reviewImage || "/images/home/review-image-1.png"}
          alt="Product review"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
