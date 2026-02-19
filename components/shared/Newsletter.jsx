const Newsletter = () => {
  return (
    <div className="mx-[60px] bg-primary rounded-t-[48px] flex items-center justify-between px-10 pt-14 pb-28 overflow-hidden -mb-20">
      {/* left side - text & form */}
      <div className="max-w-[500px]">
        <h2 className="text-4xl font-bold text-white uppercase leading-tight mb-3">
          Join our KicksPlus Club & get 15% off
        </h2>
        <p className="text-white/80 text-lg mb-6">
          Sign up for free! Join the community.
        </p>
        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-full px-6 py-3 text-base w-[280px] outline-none focus:border-white/50 transition-colors"
          />
          <button className="bg-secondary text-white font-semibold text-sm uppercase tracking-wider rounded-full px-6 py-3 hover:bg-secondary/90 transition-colors">
            Submit
          </button>
        </div>
      </div>

      {/* right side - KICKS logo */}
      <div className="select-none">
        <p className="text-white text-[120px] 2xl:text-[140px] font-black leading-none tracking-tight">
          KICKS
          <span className="text-yellow text-3xl align-super">+</span>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
