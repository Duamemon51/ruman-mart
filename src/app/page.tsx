import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Headset,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,  Award, Lock,
  type LucideIcon,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WishlistButton from "./components/WishlistButton";

const categories = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80" },
  { name: "Homeware", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" },
  { name: "Kitchen Accessories", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80" },
  { name: "Style Gadgets", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80" },
  { name: "Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80" },
];
const checklistItems = [
  { Icon: ShieldCheck, label: "Best Quality Products" },
  { Icon: Award, label: "Trusted Brands" },
  { Icon: Lock, label: "Secure Shopping" },
  { Icon: Truck, label: "Fast Delivery" },
];
type Product = {
  name: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
};

const featuredProducts: Product[] = [
  {
    name: "Wireless Earbuds",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",
    rating: 4.6,
    reviews: 1200,
    price: 7999,
    originalPrice: 12999,
    discount: 38,
  },
  {
    name: "Smart Watch",
    category: "Style Gadgets",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    rating: 4.7,
    reviews: 856,
    price: 12999,
    originalPrice: 18999,
    discount: 32,
  },
  {
    name: "Air Fryer",
    category: "Kitchen Accessories",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80",
    rating: 4.5,
    reviews: 742,
    price: 15499,
    originalPrice: 22999,
    discount: 32,
  },
  {
    name: "Comfort Bed Set",
    category: "Homeware",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    rating: 4.8,
    reviews: 1100,
    price: 8999,
    originalPrice: 14999,
    discount: 33,
  },
  {
    name: "Men's Perfume",
    category: "Perfumes",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
    rating: 4.6,
    reviews: 843,
    price: 5999,
    originalPrice: 9999,
    discount: 40,
  },
  {
    name: "Luxury Watch",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    rating: 4.7,
    reviews: 920,
    price: 18999,
    originalPrice: 28999,
    discount: 37,
  },
];
type PromoBanner = {
  title: string;
  tagline: string;
  discount: string;
  image: string;
};

const promoBanners: PromoBanner[] = [
  {
    title: "Electronics",
    tagline: "Latest Gadgets & Devices",
    discount: "Up to 40% Off",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000&q=80",
  },
  {
    title: "Homeware",
    tagline: "Make Your Home Beautiful",
    discount: "Up to 50% Off",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80",
  },
  {
    title: "Kitchen Accessories",
    tagline: "Cook with Happiness",
    discount: "Up to 45% Off",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&q=80",
  },
  {
    title: "Style Gadgets",
    tagline: "Smart Living Made Easy",
    discount: "Up to 40% Off",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=1000&q=80",
  },
  {
    title: "Perfumes",
    tagline: "Fragrance That Defines You",
    discount: "Up to 50% Off",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1000&q=80",
  },
  {
    title: "Watches",
    tagline: "Timeless Elegance",
    discount: "Up to 45% Off",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1000&q=80",
  },
];
type TrustBadge = {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
};

const trustBadges: TrustBadge[] = [
  {
    Icon: Truck,
    title: "Free Shipping",
    subtitle: "On orders over Rs. 5,000",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Payments",
    subtitle: "100% secure checkout",
  },
  {
    Icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "Hassle free returns",
  },
  {
    Icon: Headset,
    title: "24/7 Support",
    subtitle: "We're here to help",
  },
];
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
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
export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f5f7fb] font-sans text-slate-800 dark:bg-black">
      <Navbar />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-[#031a3b]">
          <Image
            src="/hero.png"
            alt="Ruman Mart products and top brands"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="relative mx-auto flex min-h-[360px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[400px] md:min-h-[470px] md:px-8 lg:min-h-[520px]">
            <div className="max-w-xl text-white">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 sm:text-sm">
                Your one-stop shop
              </p>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Everything You Need
                <span className="block text-[#19d5f2]">Under One Roof</span>
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-200 sm:text-base">
                Electronics, homeware, kitchen accessories, style gadgets,
                perfumes and all types of watches.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-300 sm:text-sm">
                Best quality <span className="px-2 text-[#19d5f2]">•</span>
                Trusted brands <span className="px-2 text-[#19d5f2]">•</span>
                Fast delivery
              </p>
              <a
                href="/categories"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#19c9ee] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition-colors hover:bg-[#0db4d8]"
              >
                Shop Now <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-slate-200 bg-white py-7 sm:py-9">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
              {categories.map(({ name, image }) => (
                <a
                  key={name}
                  href={`/categories/${name.toLowerCase().replaceAll(" ", "-")}`}
                  className="group flex min-w-[220px] snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1fb6e6] hover:shadow-md sm:min-w-0"
                >
                  <div className="h-36 w-full overflow-hidden bg-white sm:h-40">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
                    <span className="truncate text-sm font-semibold text-[#0b1d45]">
                      {name}
                    </span>
                    <ChevronRight
                      size={18}
                      className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#0b75a5]"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-[#f7fafc] py-8 sm:py-10">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#0b1d45] sm:text-xl">
                  Featured Products
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Trending products, handpicked for you
                </p>
              </div>
              <a
                href="/products"
                className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#0b75a5] hover:text-[#064d70] sm:text-sm"
              >
                View All <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.name}
                  className="group flex min-w-[200px] snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:min-w-0"
                >
                  <div className="relative flex h-36 items-center justify-center bg-white px-4 pt-4">
                    <WishlistButton product={product} />
                    <span className="absolute right-2 top-2 rounded-full bg-[#0b75a5] px-2 py-0.5 text-[11px] font-bold text-white">
                      -{product.discount}%
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1 px-4 pb-4 pt-3">
                    <h3 className="truncate text-sm font-bold text-[#0b1d45]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500">{product.category}</p>

                    <div className="flex items-center gap-1.5">
                      <StarRating rating={product.rating} />
                      <span className="text-xs font-semibold text-[#0b1d45]">
                        {product.rating}
                      </span>
                      <span className="text-xs text-slate-400">
                        ({product.reviews.toLocaleString()})
                      </span>
                    </div>

                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-base font-bold text-[#0b1d45]">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[radial-gradient(circle_at_top,#2b5b9a_0%,#0b3268_55%,#06234d_100%)] py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      <ShoppingCart size={14} aria-hidden="true" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
          <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promoBanners.map((banner) => (
            <a
              key={banner.title}
              href={`/categories/${banner.title.toLowerCase().replaceAll(" ", "-")}`}
              className="group relative flex h-40 overflow-hidden rounded-xl bg-gradient-to-br from-[#0b1d45] via-[#0e2a5e] to-[#031633] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:h-44"
            >
              {/* Text content */}
              <div className="relative z-10 flex w-3/5 flex-col justify-center gap-2 px-5">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {banner.title}
                </h3>
                <p className="text-xs text-slate-300 sm:text-sm">
                  {banner.tagline}
                </p>
                <p className="text-sm font-bold text-[#19d5f2] sm:text-base">
                  {banner.discount}
                </p>
                <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#19c9ee] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors group-hover:bg-[#0db4d8]">
                  Shop Now <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>

              {/* Product image */}
              <div className="absolute inset-y-0 right-0 w-3/5">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d45] via-[#0b1d45]/20 to-transparent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
     <section className="bg-[#f5f7fb] py-6 sm:py-8">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-2 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {trustBadges.map(({ Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex items-center gap-3 px-5 py-4 sm:justify-center sm:py-5"
            >
              <Icon
                size={32}
                strokeWidth={1.8}
                className="shrink-0 text-[#0DB4D8]"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-[#0b1d45]">
                  {title}
                </p>
                <p className="truncate text-xs text-slate-500">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#031633] via-[#0b1d45] to-[#0e2a5e] py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
          {/* Left: text + CTA */}
          <div className="w-full shrink-0 text-center lg:w-[26%] lg:text-left">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Smart Shopping
              <span className="block text-[#19d5f2]">Better Living</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-300 lg:mx-0">
              Ruman Mart brings you the best products, great prices and a
              seamless shopping experience. Shop now and upgrade your
              lifestyle!
            </p>
            <a
              href="/products"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#19c9ee] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition-colors hover:bg-[#0db4d8]"
            >
              Start Shopping <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Center: product image */}
          <div className="w-full lg:flex-1">
            <img
              src="about.png"
              alt="Featured products - laptop, headphones, perfume, air fryer, watches"
              className="mx-auto h-40 w-full max-w-2xl object-contain sm:h-52 lg:h-56"
            />
          </div>

          {/* Right: checklist box */}
          <div className="w-full shrink-0 rounded-xl border border-[#1fb6e6]/40 bg-white/5 p-4 backdrop-blur-sm sm:p-5 lg:w-[22%]">
            <ul className="flex flex-col gap-3">
              {checklistItems.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#19c9ee]/15">
                    <Icon size={16} className="text-[#19d5f2]" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-white">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
      </main>

      <Footer />
    </div>
  );
}