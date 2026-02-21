import Image from "next/image";

import { PlusCircleIcon } from "@/components/ui/customSvg";

const Newsletter = () => {
  return (
    <div className="mx-6 md:mx-[60px] bg-primary rounded-[32px] md:rounded-t-[48px] flex flex-col md:flex-row items-start md:items-center md:justify-between px-4 pt-4 pb-32 md:px-[72px] md:pt-16 md:pb-32 overflow-hidden -mb-40 md:-mb-40">
      {/* left side - text & form */}
      <div className="max-w-full md:max-w-[600px] text-left mb-10 md:mb-0">
        <h2 className="text-[32px] md:text-5xl font-bold text-white uppercase leading-tight mb-2">
          Join our KicksPlus Club & get 15% off
        </h2>
        <p className="text-white/80 text-sm md:text-xl mb-6 font-open-sans">
          Sign up for free! Join the community.
        </p>
        <div className="flex items-center gap-1 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent border border-white/40 placeholder:text-white/60 text-white rounded-lg px-4 py-2.5 text-sm flex-1 sm:flex-none sm:w-[280px] md:w-[342px] outline-none focus:border-white transition-colors"
          />
          <button className="bg-secondary text-white font-bold text-xs uppercase tracking-wider rounded-lg px-4 md:px-6 py-3 md:py-[13px] hover:bg-secondary/90 transition-colors shrink-0">
            Submit
          </button>
        </div>
      </div>

      {/* right side - KICKS logo */}
      <div className="select-none relative group">
        <Image
          src="/images/shared/logo-white.png"
          alt="Logo white"
          width={351}
          height={88}
          className="w-[180px] md:w-[351px] h-auto"
        />
        <div className="absolute md:-top-6 -top-5 -right-4 md:-right-3 scale-50 md:scale-100">
          <PlusCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
