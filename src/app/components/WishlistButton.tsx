"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

type WishlistProduct = {
  name: string;
  brand?: string;
  category?: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
};

const STORAGE_KEY = "ruman-wishlist";

export default function WishlistButton({ product }: { product: WishlistProduct }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = readWishlist();
    setSaved(stored.some((item) => item.name === product.name));
  }, [product.name]);

  const toggleWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const stored = readWishlist();
    const nextSaved = !saved;
    const next = saved
      ? stored.filter((item) => item.name !== product.name)
      : [...stored.filter((item) => item.name !== product.name), product];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(nextSaved);
    window.dispatchEvent(new Event("wishlist-updated"));
  };

  return (
    <button
      type="button"
      onMouseDown={(event) => event.stopPropagation()}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={toggleWishlist}
      aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
      title={saved ? "Remove from wishlist" : "Add to wishlist"}
      className="pointer-events-auto absolute left-2 top-2 z-30 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-rose-500 shadow-md ring-1 ring-slate-200 transition-colors hover:bg-rose-50"
    >
      <Heart size={16} className={saved ? "fill-current" : ""} aria-hidden="true" />
    </button>
  );
}

function readWishlist(): WishlistProduct[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as WishlistProduct[];
  } catch {
    return [];
  }
}
