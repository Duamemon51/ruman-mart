import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Home as HomeIcon,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Category = {
  name: string;
  image: string;
  productCount: number;
  slug: string;
};

const allCategories: Category[] = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80", productCount: 152, slug: "electronics" },
  { name: "Homeware", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", productCount: 98, slug: "homeware" },
  { name: "Kitchen Accessories", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80", productCount: 76, slug: "kitchen-accessories" },
  { name: "Style Gadgets", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80", productCount: 64, slug: "style-gadgets" },
  { name: "Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80", productCount: 48, slug: "perfumes" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80", productCount: 72, slug: "watches" },
  { name: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80", productCount: 36, slug: "wireless-earbuds" },
  { name: "Smart Watches", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80", productCount: 59, slug: "smart-watches" },
  { name: "Air Fryer", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80", productCount: 31, slug: "air-fryer" },
  { name: "Comfort Bed Set", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80", productCount: 29, slug: "comfort-bed-set" },
  { name: "Men's Perfume", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80", productCount: 45, slug: "mens-perfume" },
  { name: "Luxury Watch", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80", productCount: 34, slug: "luxury-watch" },
  { name: "Electronics Accessories", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=80", productCount: 89, slug: "electronics-accessories" },
  { name: "Home Decor", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", productCount: 45, slug: "home-decor" },
  { name: "Fitness & Sports", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", productCount: 27, slug: "fitness-sports" },
  { name: "Beauty & Personal Care", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80", productCount: 52, slug: "beauty-personal-care" },
  { name: "Office & School", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80", productCount: 33, slug: "office-school" },
  { name: "Toys & Games", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80", productCount: 38, slug: "toys-games" },
  { name: "Automotive", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", productCount: 22, slug: "automotive" },
  { name: "Groceries & Household", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80", productCount: 41, slug: "groceries-household" },
];

const benefits = [
  { Icon: Truck, title: "Fast delivery", text: "Across Pakistan" },
  { Icon: ShoppingBag, title: "Curated products", text: "Picked for quality" },
  { Icon: Sparkles, title: "Great value", text: "Deals worth finding" },
];

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7fafc] text-slate-800">
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
          <div className="relative mx-auto flex min-h-[240px] max-w-[1400px] items-center px-5 py-8 sm:min-h-[300px] md:min-h-[380px] md:px-8">
            <div className="absolute inset-x-5 top-0 flex items-center gap-1.5 py-4 text-sm text-slate-300 md:inset-x-8">
              <Link href="/" className="flex items-center gap-1 hover:text-white">
                <HomeIcon size={14} aria-hidden="true" />
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
              <span className="font-semibold text-white">Categories</span>
            </div>
            <div className="w-full min-w-0 max-w-xl text-white">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#19d5f2] sm:text-sm">
                Shop by Categories
              </p>
              <h1 className="max-w-full text-2xl font-bold leading-[1.08] sm:text-5xl">
                Explore Our
                <span className="block text-[#19d5f2]">Product Categories</span>
              </h1>
              <p className="mt-4 max-w-full text-sm leading-6 text-slate-200 sm:mt-5 sm:text-base">
                Find exactly what you need from our wide range of quality
                products. Shop smarter, live better!
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-bold text-[#0b1d45] sm:text-3xl">
                  Find what you need
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Explore our collections and discover your next favorite.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0b75a5] hover:text-[#064d70]"
              >
                Back to home <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {allCategories.map((category) => (
                <Link
                  key={category.name}
                  href={`/categories/${category.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1fb6e6] hover:shadow-md"
                >
                  <div className="h-36 w-full overflow-hidden bg-white sm:h-40">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 border-t border-slate-100 px-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-[#0b1d45]">
                        {category.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {category.productCount} Products
                      </p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6f7fc] text-[#0b75a5] transition-colors group-hover:bg-[#19c9ee] group-hover:text-white">
                      <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      
      </main>

      <Footer />
    </div>
  );
}