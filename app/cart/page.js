"use client";

import BagItem from "@/components/checkout/BagItem";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import OrderSummary from "@/components/checkout/OrderSummary";
import RelatedProducts from "@/components/shared/RelatedProducts";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4 uppercase">
          Your bag is empty
        </h2>
        <p className="text-secondary/60 max-w-md mb-8 font-medium">
          Looks like you haven&apos;t added anything to your bag yet. Start
          exploring our latest drops to find your perfect pair!
        </p>
        <Link
          href="/"
          className="bg-secondary text-white font-bold px-10 py-4 rounded-xl uppercase transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          Shop New Drops
        </Link>
      </div>
    );
  }

  return (
    <main className="px-4 md:px-[60px] py-8 min-h-screen">
      <CheckoutHeader />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-11 items-center">
        <section className="bg-white p-6 rounded-2xl">
          <div className="mb-12">
            <h2 className="text-2xl md:text-[32px] font-semibold text-secondary mb-2">
              Your Bag
            </h2>
            <p className="text-secondary/70 text-sm md:text-base font-open-sans">
              Items in your bag not reserved- check out now to make them yours.
            </p>
          </div>

          <div className="flex flex-col space-y-5">
            {cart.map((item, index) => (
              <BagItem
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                item={item}
              />
            ))}
          </div>
        </section>

        <aside className="lg:sticky lg:top-24">
          <OrderSummary
            subtotal={subtotal}
            itemCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
          />
        </aside>
      </div>

      <div className="mt-24">
        <RelatedProducts
          categoryId={cart[0]?.category?.id}
          currentProductId={cart[0]?.id}
        />
      </div>
    </main>
  );
};

export default CartPage;
