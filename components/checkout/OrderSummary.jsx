const OrderSummary = ({
  subtotal,
  delivery = 6.99,
  tax = 0,
  itemCount = 1,
}) => {
  const total = subtotal + delivery + tax;

  return (
    <div className="bg-white md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none flex flex-col gap-6">
      <h2 className="text-[20px] md:text-[32px] font-bold md:font-semibold text-secondary">
        Order Summary
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-secondary font-medium">
          <span className="font-bold md:font-semibold font-open-sans text-sm md:text-xl uppercase md:normal-case">
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </span>
          <span className="font-bold md:font-semibold font-open-sans text-sm md:text-xl">
            ${subtotal?.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-secondary/70 font-medium">
          <span className="font-bold md:font-semibold font-open-sans text-sm md:text-xl">
            Delivery
          </span>
          <span className="font-bold md:font-semibold font-open-sans text-sm md:text-xl">
            ${delivery.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-secondary/70 font-medium">
          <span className="font-bold md:font-semibold font-open-sans text-sm md:text-xl">
            Sales Tax
          </span>
          <span className="font-bold md:font-semibold font-open-sans text-sm md:text-xl">
            -
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[20px] md:text-2xl font-bold md:font-semibold text-secondary">
        <span>Total</span>
        <span className="text-secondary/70">${total.toFixed(2)}</span>
      </div>

      <button className="w-full bg-secondary text-white font-bold md:font-medium uppercase text-xs md:text-sm py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg active:scale-[0.98]">
        Checkout
      </button>

      <button className="text-secondary font-bold md:font-semibold text-sm md:text-xl underline hover:text-primary transition-colors text-left font-open-sans">
        Use a promo code
      </button>
    </div>
  );
};

export default OrderSummary;
