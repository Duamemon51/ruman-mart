"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Categories", href: "/categories", hasDropdown: true },
  { label: "Deals", href: "/deals" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  "Mobiles & Tablets",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Health",
  "Sports & Outdoor",
];

export default function Navbar({ cartCount = 3 }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    // router.push(`/search?q=${encodeURIComponent(query)}`)
    console.log("search:", query);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#1fb6e6] bg-[radial-gradient(circle_at_top,#173d7a_0%,#001B42_55%,#00132f_100%)] text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
      {/* Single grid controls logo / search+nav / actions so the nav row
          lines up exactly under the search bar's left edge. */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-x-4 px-4 py-3 md:gap-x-8 md:px-8">
     {/* Logo */}
<Link
  href="/"
  className="row-span-2 flex shrink-0 items-center self-center md:mr-2"
>
  <Image
    src="/logo-web.png"
    alt="Ruman Mart logo"
    width={120}
    height={68}
    priority
    className="h-[44px] w-auto object-contain md:h-[52px]"
  />
</Link>

        {/* Search — centered within its grid column */}
        <div className="mx-auto hidden w-full max-w-xl md:block">
          <form onSubmit={handleSearch}>
            <div className="flex w-full overflow-hidden rounded-full bg-white">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products, brands and more..."
                className="w-full bg-transparent px-5 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex items-center justify-center bg-[#1fb6e6] px-6 text-white transition-colors hover:bg-[#189ac4]"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 justify-self-end md:gap-7">
          <Link
            href="/wishlist"
            className="hidden items-center gap-2 text-sm transition-colors hover:text-[#1fb6e6] lg:flex"
          >
            <Heart size={20} strokeWidth={1.75} />
            Wishlist
          </Link>

          <Link href="/cart" aria-label="Cart" className="relative">
            <ShoppingCart size={22} strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#1fb6e6] text-[11px] font-semibold">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop nav row — sits in the same column as search (col 2),
            so its left edge matches the search bar's left edge. */}
        <nav className="col-start-2 hidden md:block">
          <ul className="flex items-center justify-center gap-4 pt-2 text-xs lg:gap-8 lg:text-sm">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setCatOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setCatOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 border-b-2 pb-1.5 transition-colors ${
                      active
                        ? "border-[#1fb6e6] text-white"
                        : "border-transparent text-slate-200 hover:text-[#1fb6e6]"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} />}
                  </Link>

                  {link.hasDropdown && catOpen && (
                    <ul className="absolute left-0 top-full z-50 w-56 overflow-hidden rounded-md bg-white py-2 text-slate-700 shadow-xl">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <Link
                            href={`/categories/${cat
                              .toLowerCase()
                              .replace(/[^a-z]+/g, "-")}`}
                            className="block px-4 py-2 text-sm hover:bg-slate-100 hover:text-[#0b1d45]"
                          >
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <form onSubmit={handleSearch} className="py-3">
            <div className="flex overflow-hidden rounded-full bg-white">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full bg-transparent px-4 py-2 text-sm text-slate-700 outline-none"
              />
              <button type="submit" className="bg-[#1fb6e6] px-4">
                <Search size={18} />
              </button>
            </div>
          </form>

          <ul className="flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-2 py-2 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="block rounded px-2 py-2 hover:bg-white/10"
              >
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}