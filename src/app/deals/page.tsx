import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home as HomeIcon, ShoppingCart, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WishlistButton from "../components/WishlistButton";

type Deal = {
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
};

const deals: Deal[] = [
  { name: "Laptop 15.6\" Full HD", brand: "HP", price: 89999, originalPrice: 142999, discount: 37, rating: 4.6, reviews: 1200, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80" },
  { name: "Wireless Earbuds", brand: "Apple", price: 7999, originalPrice: 12999, discount: 38, rating: 4.7, reviews: 2200, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80" },
  { name: "Smart Watch", brand: "Samsung", price: 12999, originalPrice: 18999, discount: 32, rating: 4.5, reviews: 742, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80" },
  { name: "Gaming Laptop", brand: "Asus", price: 159999, originalPrice: 199999, discount: 20, rating: 4.7, reviews: 966, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80" },
  { name: "Bluetooth Speaker", brand: "JBL", price: 14599, originalPrice: 19999, discount: 27, rating: 4.6, reviews: 1900, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80" },
  { name: "Smartphone 256GB", brand: "Apple", price: 149999, originalPrice: 199999, discount: 25, rating: 4.8, reviews: 3900, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" },
];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={12} className={index < Math.round(rating) ? "fill-[#f5a623] text-[#f5a623]" : "fill-slate-200 text-slate-200"} />
      ))}
    </div>
  );
}

export default function DealsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fb] text-slate-800">
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-[#031a3b]">
          <Image src="/hero.png" alt="Ruman Mart deals" fill priority className="object-cover object-center" />
          <div className="relative mx-auto flex min-h-[280px] max-w-[1400px] items-center px-5 py-8 sm:min-h-[300px] md:min-h-[340px] md:px-8 lg:min-h-[380px]">
            <div className="max-w-2xl text-white">
              <div className="mb-4 flex items-center gap-1.5 text-xs text-slate-300">
                <Link href="/" className="flex items-center gap-1 hover:text-white"><HomeIcon size={12} aria-hidden="true" /> Home</Link>
                <ChevronRight size={12} aria-hidden="true" />
                <span className="text-slate-100">Deals</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#19d5f2] sm:text-sm">Limited-time savings</p>
              <h1 className="mt-2 text-4xl font-bold leading-[1.05] sm:text-5xl">Hot <span className="text-[#19d5f2]">Deals</span></h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">Find better prices on customer-favorite products before the offers end.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div><h2 className="text-2xl font-bold text-[#0b1d45] sm:text-3xl">Today&apos;s Best Deals</h2><p className="mt-1 text-sm text-slate-500">Save more on popular picks.</p></div>
            <Link href="/categories" className="text-sm font-semibold text-[#0b75a5] hover:text-[#064d70]">Shop Categories</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {deals.map((deal) => (
              <article key={deal.name} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#19c9ee] hover:shadow-md">
                <div className="relative flex h-36 items-center justify-center bg-white p-3">
                  <WishlistButton product={deal} />
                  <span className="absolute left-2 top-2 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white">-{deal.discount}%</span>
                  <img src={deal.image} alt={deal.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-1 border-t border-slate-100 p-3">
                  <p className="text-[11px] font-semibold text-[#0b75a5]">{deal.brand}</p>
                  <h3 className="truncate text-sm font-bold text-[#0b1d45]">{deal.name}</h3>
                  <div className="flex items-center gap-1"><StarRating rating={deal.rating} /><span className="text-[10px] text-slate-400">({deal.reviews.toLocaleString()})</span></div>
                  <div className="mt-auto flex items-baseline gap-1.5 pt-2"><span className="text-sm font-bold text-[#0b1d45]">{formatPrice(deal.price)}</span><span className="text-[10px] text-slate-400 line-through">{formatPrice(deal.originalPrice)}</span></div>
                  <Link href={`/categories/electronics/${slugify(deal.name)}`} className="mt-2 inline-flex items-center justify-center gap-1 rounded-lg bg-[#0b1d45] py-2 text-xs font-semibold text-white"><ShoppingCart size={13} aria-hidden="true" />View Details</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
