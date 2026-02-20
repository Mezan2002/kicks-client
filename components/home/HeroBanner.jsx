import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="mb-24">
      <h1 className="text-[15.9vw] font-extrabold leading-[1.1] uppercase text-secondary tracking-tight my-4 whitespace-nowrap">
        Do it <span className="text-primary">Right</span>
      </h1>

      <div className="relative rounded-[64px] overflow-hidden h-[750px]">
        <Image
          src="/images/home/hero-banner.png"
          alt="Nike Air Max"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-10 left-0 bg-secondary rounded-r-2xl p-6 z-10">
          <p
            className="text-white text-xs font-semibold uppercase tracking-widest whitespace-nowrap rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Nike product of the year
          </p>
        </div>

        <div className="absolute bottom-12 left-12 z-10">
          <h5 className="text-[74px] font-semibold text-white uppercase leading-none">
            Nike Air Max
          </h5>
          <p className="text-light-gray font-medium text-2xl font-open-sans mb-4 leading-relaxed max-w-[70%]">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <button
            type="button"
            className="inline-block bg-primary text-white text-sm font-medium uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Shop Now
          </button>
        </div>

        <div className="absolute right-8 bottom-10 flex flex-col gap-3 z-10">
          <div className="size-[160px] rounded-4xl overflow-hidden">
            <Image
              src="/images/home/banner-product-feature-1.png"
              alt="Product feature 1"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="size-[160px] rounded-4xl overflow-hidden">
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
