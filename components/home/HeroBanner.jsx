import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="mb-12 md:mb-24">
      <h1 className="text-[15.5vw] md:text-[15.9vw] font-extrabold leading-[1.1] uppercase text-secondary tracking-tight my-4 whitespace-nowrap overflow-hidden">
        Do it <span className="text-primary">Right</span>
      </h1>

      <div className="relative rounded-[32px] md:rounded-[64px] overflow-hidden h-[500px] md:h-[750px]">
        <Image
          src="/images/home/hero-banner.png"
          alt="Nike Air Max"
          fill
          className="object-cover"
          priority
        />

        {/* Vertical Tag */}
        <div className="absolute top-6 md:top-10 left-0 bg-secondary rounded-r-xl md:rounded-r-2xl p-4 md:p-6 z-10">
          <p
            className="text-white text-[10px] md:text-xs font-semibold uppercase tracking-widest whitespace-nowrap rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Nike product of the year
          </p>
        </div>

        {/* Text Content */}
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10 pr-6">
          <h5 className="text-3xl md:text-[74px] font-semibold text-white uppercase leading-none mb-2 md:mb-0">
            Nike Air Max
          </h5>
          <p className="text-white font-medium text-sm md:text-2xl font-open-sans mb-4 md:mb-6 leading-relaxed max-w-[60%] md:max-w-[70%]">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <button
            type="button"
            className="inline-block bg-primary text-white text-xs md:text-sm font-medium uppercase tracking-wider px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-primary/90 transition-all active:scale-95"
          >
            Shop Now
          </button>
        </div>

        {/* Feature Images */}
        <div className="absolute right-4 bottom-6 md:right-8 md:bottom-10 flex flex-col gap-2 md:gap-3 z-10 scale-75 md:scale-100 origin-bottom-right">
          <div className="size-[100px] md:size-[160px] rounded-2xl md:rounded-4xl overflow-hidden border-2 border-white/20">
            <Image
              src="/images/home/banner-product-feature-1.png"
              alt="Product feature 1"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="size-[100px] md:size-[160px] rounded-2xl md:rounded-4xl overflow-hidden border-2 border-white/20">
            <Image
              src="/images/home/banner-product-feature-2.png"
              alt="Product feature 2"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
