import ReviewCard from "@/components/home/ReviewCard";

const REVIEWS_DATA = [
  {
    id: 1,
    authorImage: "/images/home/review-author-1.png",
    reviewImage: "/images/home/review-image-1.png",
  },
  {
    id: 2,
    authorImage: "/images/home/review-author-2.png",
    reviewImage: "/images/home/review-image-2.png",
  },
  {
    id: 3,
    authorImage: "/images/home/review-author-3.png",
    reviewImage: "/images/home/review-image-3.png",
  },
];

const Reviews = () => {
  return (
    <div className="py-32">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-[74px] font-semibold text-secondary uppercase leading-none">
          REVIEWS
        </h2>
        <button className="bg-primary text-white text-sm font-medium px-8 py-4 rounded-lg uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
          See all
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {REVIEWS_DATA.map((review) => (
          <ReviewCard
            key={review.id}
            authorImage={review.authorImage}
            reviewImage={review.reviewImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
