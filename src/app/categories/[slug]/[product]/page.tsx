"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home as HomeIcon,
  Star,
  Truck,
  ShieldCheck,
  Headset,
  RotateCcw,
  ShoppingCart,
  Zap,
  Heart,
  Share2,
  Minus,
  Plus,
  Check,
  type LucideIcon,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WishlistButton from "../../../components/WishlistButton";

type RelatedProduct = {
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
  image: string;
};

const product = {
  brand: "HP",
  name: "Laptop 15.6\" Full HD",
  rating: 4.6,
  reviews: 1200,
  price: 89999,
  originalPrice: 142999,
  discount: 37,
  inStock: true,
  freeShipping: true,
  images: [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=85",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&q=85",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1200&q=85",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200&q=85",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=85",
  ],
  colors: ["Silver", "Space Grey"],
  storageOptions: ["256GB SSD", "512GB SSD"],
  quickSpecs: [
    { label: "15.6\" Full HD Display", sub: "Crystal clear visuals" },
    { label: "Intel Core i5", sub: "Fast & reliable" },
    { label: "8GB RAM", sub: "Smooth multitasking" },
    { label: "256GB SSD", sub: "Fast storage" },
    { label: "Windows 11", sub: "Latest OS" },
  ],
  description:
    "The HP Laptop 15.6\" Full HD laptop is designed to deliver a seamless computing experience. Whether you're working, studying, or enjoying entertainment, this laptop offers the perfect balance of performance, style, and portability.",
  keyFeatures: [
    "15.6\" Full HD (1920 x 1080) display",
    "Intel Core i5 processor",
    "8GB DDR4 RAM",
    "256GB SSD storage",
    "Windows 11 Home",
    "Lightweight and portable design",
  ],
};

const relatedProducts: RelatedProduct[] = [
  { name: "Wireless Earbuds", price: 7999, originalPrice: 12999, rating: 4.6, reviews: 1200, discount: 38, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80" },
  { name: "Smart Watch", price: 12999, originalPrice: 18999, rating: 4.7, reviews: 856, discount: 32, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80" },
  { name: "TWS Earphones", price: 6999, originalPrice: 9999, rating: 4.4, reviews: 5300, discount: 30, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80" },
  { name: "Gaming Laptop", price: 159999, originalPrice: 199999, rating: 4.7, reviews: 966, discount: 20, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80" },
  { name: "Bluetooth Speaker", price: 14599, originalPrice: 19999, rating: 4.6, reviews: 1900, discount: 27, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80" },
];

const trustIcons: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Truck, title: "Free Shipping", text: "On orders over Rs. 5,000" },
  { Icon: ShieldCheck, title: "Secure Payments", text: "100% secure checkout" },
  { Icon: Headset, title: "24/7 Support", text: "We're here to help" },
  { Icon: RotateCcw, title: "Easy Returns", text: "Hassle free returns" },
];

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
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

export default function ProductDetailsPage() {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "reviews">("description");

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fb] text-slate-800">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-[1400px] px-4 py-5 md:px-8">
          {/* Breadcrumb */}
          <div className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0b75a5]">
              <HomeIcon size={14} aria-hidden="true" />
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
            <Link href="/categories/electronics" className="hover:text-[#0b75a5]">
              Electronics
            </Link>
            <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
            <Link href="/categories/electronics" className="hover:text-[#0b75a5]">
              Laptops
            </Link>
            <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
            <span className="font-semibold text-[#0b1d45]">
              {product.name}
            </span>
          </div>

          {/* Main product section */}
          <div className="grid grid-cols-1 gap-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2">
            {/* Gallery */}
            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border-2 bg-[#f5f7fb] p-1.5 transition-colors ${
                      activeImage === i
                        ? "border-[#19c9ee]"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="relative flex min-h-[420px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#f5f7fb]">
                <WishlistButton product={{ ...product, image: product.images[0] }} />
                <span className="absolute left-3 top-3 rounded-full bg-[#0b75a5] px-2.5 py-1 text-xs font-bold text-white">
                  -{product.discount}%
                </span>
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-[#0b75a5]">{product.brand}</p>
              <h1 className="mt-1 text-2xl font-bold text-[#0b1d45] sm:text-3xl">
                {product.name}
              </h1>

              <div className="mt-2 flex items-center gap-2">
                <StarRating rating={product.rating} />
                <span className="text-sm font-semibold text-[#0b1d45]">
                  {product.rating}
                </span>
                <span className="text-sm text-slate-400">
                  ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-bold text-[#0b1d45]">
                  {formatPrice(product.price)}
                </span>
                <span className="text-base text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-600">
                  Save {product.discount}%
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-600">
                  <Check size={15} aria-hidden="true" />
                  In Stock
                </span>
                {product.freeShipping && (
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Truck size={15} aria-hidden="true" />
                    Free Shipping
                  </span>
                )}
              </div>

              {/* Color */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-semibold text-[#0b1d45]">
                  Color: <span className="font-normal text-slate-500">{selectedColor}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? "border-[#19c9ee] bg-[#e6f7fc] text-[#0b75a5]"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage */}
              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold text-[#0b1d45]">Storage</p>
                <div className="flex gap-2">
                  {product.storageOptions.map((storage) => (
                    <button
                      key={storage}
                      type="button"
                      onClick={() => setSelectedStorage(storage)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        selectedStorage === storage
                          ? "border-[#19c9ee] bg-[#e6f7fc] text-[#0b75a5]"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold text-[#0b1d45]">Quantity</p>
                <div className="flex w-fit items-center rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center text-slate-500 hover:bg-slate-50"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} aria-hidden="true" />
                  </button>
                  <span className="flex h-10 w-12 items-center justify-center text-sm font-semibold text-[#0b1d45]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-10 w-10 items-center justify-center text-slate-500 hover:bg-slate-50"
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => router.push("/cart")}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0b1d45] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b75a5]"
                >
                  <ShoppingCart size={16} aria-hidden="true" />
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#19c9ee] py-3 text-sm font-semibold text-[#0b75a5] transition-colors hover:bg-[#e6f7fc]"
                >
                  <Zap size={16} aria-hidden="true" />
                  Buy Now
                </button>
              </div>

              <div className="mt-4 flex items-center gap-5">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#0b75a5]"
                >
                  <Heart size={16} aria-hidden="true" />
                  Add to Wishlist
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#0b75a5]"
                >
                  <Share2 size={16} aria-hidden="true" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Trust icons */}
          <div className="mt-6 grid grid-cols-2 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {trustIcons.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-center gap-3 px-4 py-4 sm:justify-center">
                <Icon size={22} className="shrink-0 text-[#0b75a5]" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#0b1d45]">{title}</p>
                  <p className="truncate text-xs text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick specs */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {product.quickSpecs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm"
              >
                <p className="text-xs font-bold text-[#0b1d45]">{spec.label}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{spec.sub}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex border-b border-slate-200">
              {(
                [
                  { key: "description", label: "Description" },
                  { key: "specifications", label: "Specifications" },
                  { key: "reviews", label: `Reviews (${product.reviews.toLocaleString()})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-3.5 text-sm font-semibold transition-colors ${
                    activeTab === tab.key
                      ? "border-b-2 border-[#19c9ee] text-[#0b75a5]"
                      : "text-slate-500 hover:text-[#0b1d45]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-6">
              {activeTab === "description" && (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
                  <div>
                    <h3 className="text-base font-bold text-[#0b1d45]">
                      Product Description
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <h4 className="mt-5 text-sm font-bold text-[#0b1d45]">
                      Key Features
                    </h4>
                    <ul className="mt-2 flex flex-col gap-2">
                      {product.keyFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check size={15} className="mt-0.5 shrink-0 text-[#0b75a5]" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#0b1d45] p-6 text-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-32 w-full object-contain"
                    />
                    <p className="text-lg font-bold text-white">
                      Work. Study. Play.
                    </p>
                    <p className="text-sm text-[#19d5f2]">All in One Laptop</p>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {product.keyFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm"
                    >
                      <span className="text-slate-500">{feature.split(" ")[0]}</span>
                      <span className="font-semibold text-[#0b1d45]">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <StarRating rating={product.rating} size={18} />
                    <span className="text-lg font-bold text-[#0b1d45]">
                      {product.rating} out of 5
                    </span>
                    <span className="text-sm text-slate-400">
                      Based on {product.reviews.toLocaleString()} reviews
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Customer reviews will be shown here.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* You May Also Like */}
          <div className="mt-10">
            <div className="mb-5 flex items-end justify-between">
              <h2 className="text-lg font-bold text-[#0b1d45] sm:text-xl">
                You May Also Like
              </h2>
              <Link
                href="/categories/electronics"
                className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#0b75a5] hover:text-[#064d70] sm:text-sm"
              >
                View All <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
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
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-2">
                    <h3 className="truncate text-xs font-bold text-[#0b1d45]">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <StarRating rating={item.rating} size={11} />
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
        </div>
      </main>

      <Footer />
    </div>
  );
}