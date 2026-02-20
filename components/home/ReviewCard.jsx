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
    <div className="bg-white rounded-4xl overflow-hidden flex flex-col h-full">
      <div className="p-8 pb-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="text-2xl font-semibold text-secondary mb-1">
              {title}
            </h4>
            <p className="text-secondary font-open-sans text-base leading-relaxed">
              {comment}
            </p>
          </div>
          <div className="relative size-16 rounded-full overflow-hidden border-2 border-primary/10 shrink-0">
            <Image
              src={authorImage || "/images/home/review-author-1.png"}
              alt="Reviewer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
          <span className="text-secondary font-medium font-open-sans text-base">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="relative w-full aspect-4/3">
        <Image
          src={reviewImage || "/images/home/review-image-1.png"}
          alt="Product review"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
