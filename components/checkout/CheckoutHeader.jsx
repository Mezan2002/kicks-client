const CheckoutHeader = () => {
  return (
    <section className="mb-8">
      <h1 className="text-2xl md:text-[32px] font-semibold text-secondary mb-2">
        Saving to celebrate
      </h1>
      <p className="text-secondary/70 text-sm leading-relaxed font-open-sans font-semibold">
        Enjoy up to 60% off thousands of styles during the End of Year sale -
        while supplies last. No code needed.
      </p>
      <div className="mt-2 flex gap-1 items-baseline">
        <button className="text-secondary/70 font-semibold underline hover:text-primary transition-colors font-open-sans">
          Join us
        </button>
        <span className="text-secondary/70 font-semibold font-open-sans">
          or
        </span>
        <button className="text-secondary/70 font-semibold underline hover:text-primary transition-colors font-open-sans">
          Sign-in
        </button>
      </div>
    </section>
  );
};

export default CheckoutHeader;
