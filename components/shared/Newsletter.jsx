import Image from "next/image";

import { PlusCircleIcon } from "@/components/ui/customSvg";

const Newsletter = () => {
  return (
    <div className="mx-[60px] bg-primary rounded-t-[48px] flex items-center justify-between px-[72px] pt-16 pb-32 overflow-hidden -mb-20">
      {/* left side - text & form */}
      <div className="max-w-[600px]">
        <h2
          className="text-5xl font-semibold
         text-white uppercase leading-tight mb-3"
        >
          Join our KicksPlus Club & get 15% off
        </h2>
        <p className="text-light-gray text-xl mb-6 font-open-sans">
          Sign up for free! Join the community.
        </p>
        <div className="flex items-center gap-1">
          <input
            type="email"
            placeholder="Email address"
            className="border border-white placeholder:text-light-gray/75 text-light-gray rounded-lg px-4 py-3 text-base w-[342px] outline-none focus:border-white/50 transition-colors"
          />
          <button className="bg-secondary text-white font-medium text-sm uppercase tracking-wider rounded-lg px-6 py-[15px] hover:bg-secondary/90 transition-colors">
            Submit
          </button>
        </div>
      </div>

      {/* right side - KICKS logo */}
      <div className="select-none relative mr-[7%]">
        <Image
          src="/images/shared/logo-white.png"
          alt="Logo white"
          width={351}
          height={88}
        />
        <div className="absolute -top-6 -right-3">
          <PlusCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
