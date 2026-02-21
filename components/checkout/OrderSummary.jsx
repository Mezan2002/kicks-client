const OrderSummary = ({
  subtotal,
  delivery = 6.99,
  tax = 0,
  itemCount = 1,
}) => {
  const total = subtotal + delivery + tax;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl md:text-[32px] font-semibold text-secondary">
        Order Summary
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-secondary/70 font-medium">
          <span className="font-semibold font-open-sans text-secondary text-xl">
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </span>
          <span className="font-semibold font-open-sans text-secondary/70 text-xl">
            ${subtotal?.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-secondary/70 font-medium">
          <span className="font-semibold font-open-sans text-secondary text-xl">
            Delivery
          </span>
          <span className="font-semibold font-open-sans text-secondary/70 text-xl">
            ${delivery.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-secondary/70 font-medium">
          <span className="font-semibold font-open-sans text-secondary text-xl">
            Sales Tax
          </span>
          <span className="font-semibold font-open-sans text-secondary/70 text-xl">
            -
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center text-xl md:text-2xl font-semibold text-secondary">
        <span>Total</span>
        <span className="font-semibold text-secondary/70 text-2xl">
          ${total.toFixed(2)}
        </span>
      </div>

      <button className="w-full bg-secondary text-white font-medium uppercase text-sm py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg active:scale-[0.98]">
        Checkout
      </button>

      <button className="text-secondary font-semibold text-xl underline hover:text-primary transition-colors text-left font-open-sans">
        Use a promo code
      </button>
    </div>
  );
};

export default OrderSummary;
