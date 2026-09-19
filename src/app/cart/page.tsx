"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home as HomeIcon,
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headset,
  type LucideIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type CartItem = {
  id: string;
  name: string;
  specs: string[];
  price: number;
  quantity: number;
  inStock: boolean;
  image: string;
};

type RelatedProduct = {
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
  image: string;
};

const initialCartItems: CartItem[] = [
  {
    id: "laptop-hp-fhd",
    name: "Laptop 15.6\" Full HD",
    specs: ["Intel Core i5 (8GB RAM) | 512GB SSD)", "Windows 11"],
    price: 89999,
    quantity: 1,
    inStock: true,
    image: "/products/laptop-hp.png",
  },
];

const relatedProducts: RelatedProduct[] = [
  { name: "Wireless Earbuds", price: 7999, originalPrice: 12999, rating: 4.7, reviews: 2200, discount: 38, image: "/products/earbuds.png" },
  { name: "Smart Watch", price: 12999, originalPrice: 18999, rating: 4.6, reviews: 742, discount: 32, image: "/products/smartwatch.png" },
  { name: "TWS Earphones", price: 6999, originalPrice: 9999, rating: 4.4, reviews: 5300, discount: 30, image: "/products/tws-earphones.png" },
  { name: "Gaming Laptop", price: 159999, originalPrice: 199999, rating: 4.7, reviews: 966, discount: 20, image: "/products/gaming-laptop.png" },
  { name: "Bluetooth Speaker", price: 14599, originalPrice: 19999, rating: 4.6, reviews: 1900, discount: 27, image: "/products/bluetooth-speaker.png" },
];

const trustBadges: { Icon: LucideIcon; title: string; subtitle: string }[] = [
  { Icon: Truck, title: "Free Shipping", subtitle: "On orders over Rs. 5,000" },
  { Icon: ShieldCheck, title: "Secure Payments", subtitle: "100% secure checkout" },
  { Icon: RotateCcw, title: "Easy Returns", subtitle: "Hassle free returns" },
  { Icon: Headset, title: "24/7 Support", subtitle: "We're here to help" },
];

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

function StarRating({ rating, size = 11 }: { rating: number; size?: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(rating)
              ? "fill-[#f5a623] text-[#f5a623]"
              : "fill-slate-200 text-slate-200"
          }
        />
      ))}
    </div>
  );
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 250;
  const total = subtotal + shipping;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f5f7fb] font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#031a3b]">
          <Image
            src="/hero.png"
            alt="Ruman Mart products and top brands"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="relative mx-auto flex min-h-[280px] max-w-[1400px] items-center px-5 py-8 sm:min-h-[300px] md:min-h-[340px] md:px-8 lg:min-h-[380px]">
            <div className="w-full max-w-xl text-white">
              <div className="mb-8 flex items-center gap-1 text-xs text-slate-300">
                <Link href="/" className="flex items-center gap-1 hover:text-white">
                  <HomeIcon size={12} aria-hidden="true" />
                  Home
                </Link>
                <ChevronRight size={12} aria-hidden="true" />
                <span className="text-slate-100">Cart</span>
              </div>

              <div className="flex items-center gap-4">
                <ShoppingCart size={42} strokeWidth={1.7} className="shrink-0 text-[#19d5f2]" aria-hidden="true" />
                <div>
                  <h1 className="text-3xl font-bold leading-none tracking-tight sm:text-4xl">
                    Your <span className="text-[#19d5f2]">Cart</span>
                  </h1>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    Review your items and proceed to checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white py-16 text-center shadow-sm">
              <ShoppingCart size={48} strokeWidth={1.5} className="text-slate-300" aria-hidden="true" />
              <p className="text-lg font-bold text-[#0b1d45]">Your cart is empty</p>
              <p className="text-sm text-slate-500">Looks like you haven&apos;t added anything yet.</p>
              <Link
                href="/"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#19c9ee] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0db4d8]"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
              {/* Cart items */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <h2 className="text-base font-bold text-[#0b1d45]">
                    Cart Items ({itemCount})
                  </h2>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b75a5] hover:text-[#064d70] sm:text-sm"
                  >
                    <ArrowLeft size={14} aria-hidden="true" />
                    Continue Shopping
                  </Link>
                </div>

                {/* Table header */}
                <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-slate-100 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Total</span>
                </div>

                <div className="flex flex-col divide-y divide-slate-100">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 gap-4 px-5 py-4 sm:grid-cols-[2fr_1fr_1fr_1fr] sm:items-center"
                    >
                      {/* Product */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#f5f7fb] p-2">
                          <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-[#0b1d45]">
                            {item.name}
                          </p>
                          {item.specs.map((spec) => (
                            <p key={spec} className="truncate text-xs text-slate-500">
                              {spec}
                            </p>
                          ))}
                          <div className="mt-1 flex items-center gap-3">
                            {item.inStock && (
                              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                                <CheckCircle2 size={13} aria-hidden="true" />
                                In Stock
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-rose-600"
                            >
                              <Trash2 size={12} aria-hidden="true" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-sm font-bold text-[#0b1d45] sm:text-left">
                        {formatPrice(item.price)}
                      </div>

                      {/* Quantity */}
                      <div className="flex w-fit items-center rounded-lg border border-slate-200">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-9 w-9 items-center justify-center text-slate-500 hover:bg-slate-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} aria-hidden="true" />
                        </button>
                        <span className="flex h-9 w-10 items-center justify-center text-sm font-semibold text-[#0b1d45]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-9 w-9 items-center justify-center text-slate-500 hover:bg-slate-50"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} aria-hidden="true" />
                        </button>
                      </div>

                      {/* Total */}
                      <div className="text-sm font-bold text-[#0b75a5]">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order summary */}
              <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-bold text-[#0b1d45]">Order Summary</h2>

                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
                    <span className="font-semibold text-[#0b1d45]">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Shipping Charges</span>
                    {shipping === 0 ? (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                        Free Shipping
                      </span>
                    ) : (
                      <span className="font-semibold text-[#0b1d45]">{formatPrice(shipping)}</span>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-sm font-bold text-[#0b1d45]">Total Amount</span>
                  <span className="text-xl font-bold text-[#0b75a5]">{formatPrice(total)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#19c9ee] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0db4d8]"
                >
                  <Lock size={15} aria-hidden="true" />
                  Proceed to Checkout
                </Link>

                <Link
                  href="/"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-semibold text-[#0b1d45] transition-colors hover:bg-slate-50"
                >
                  <ShoppingCart size={15} aria-hidden="true" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}

          {/* You May Also Like */}
          <div className="mt-10">
            <div className="mb-5 flex items-end justify-between">
              <h2 className="text-lg font-bold text-[#0b1d45] sm:text-xl">
                You May Also Like
              </h2>
              <Link
                href="/"
                className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#0b75a5] hover:text-[#064d70] sm:text-sm"
              >
                View All <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="scrollbar-hide flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
              {relatedProducts.map((item) => (
                <div
                  key={item.name}
                  className="group flex min-w-[180px] snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:min-w-0"
                >
                  <div className="relative flex h-32 items-center justify-center bg-white px-3 pt-3">
                    <span className="absolute right-2 top-2 rounded-full bg-[#0b75a5] px-2 py-0.5 text-[10px] font-bold text-white">
                      -{item.discount}%
                    </span>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-2">
                    <h3 className="truncate text-xs font-bold text-[#0b1d45]">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <StarRating rating={item.rating} />
                      <span className="text-[11px] font-semibold text-[#0b1d45]">
                        {item.rating}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        ({item.reviews.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold text-[#0b1d45]">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-[11px] text-slate-400 line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0b1d45] py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#0b75a5]"
                    >
                      <ShoppingCart size={12} aria-hidden="true" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-2 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {trustBadges.map(({ Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-3 px-5 py-4 sm:justify-center sm:py-5">
                <Icon size={26} strokeWidth={1.8} className="shrink-0 text-[#0b75a5]" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#0b1d45]">{title}</p>
                  <p className="truncate text-xs text-slate-500">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}