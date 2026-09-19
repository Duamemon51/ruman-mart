import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Home as HomeIcon,
  Copy,
  MapPin,
  CreditCard,
  Headset,
  type LucideIcon,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type OrderItem = {
  name: string;
  brand: string;
  qty: number;
  price: number;
  image: string;
};

const order = {
  orderNumber: "#RM20250915",
  orderDate: "15 Sep 2026, 03:42 PM",
  paymentMethod: "Cash on Delivery",
  customer: {
    name: "Dua Memon",
    phone: "+92 330 1234567",
    email: "dua.memon@gmail.com",
  },
  shippingAddress: {
    address: "House # 123, Street 5, Phase 8",
    city: "Lahore",
    postalCode: "54000",
    country: "Pakistan",
  },
  shippingMethod: "Standard Shipping (3 - 5 business days)",
};

const orderItems: OrderItem[] = [
  { name: "Laptop 15.6\" Full HD", brand: "Intel Core i5 | 8GB RAM | 512GB SSD, Windows 11", qty: 1, price: 89999, image: "/products/laptop-hp.png" },
  { name: "Wireless Earbuds", brand: "Apple", qty: 1, price: 7999, image: "/products/earbuds.png" },
  { name: "Smart Watch", brand: "Samsung", qty: 1, price: 12999, image: "/products/smartwatch.png" },
];

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

export default function OrderDetailsPage() {
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 250;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fb] font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-[1400px] px-4 py-6 md:px-8">
          {/* Breadcrumb + back */}
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <Link href="/" className="flex items-center gap-1 hover:text-[#0b75a5]">
                <HomeIcon size={14} aria-hidden="true" />
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
              <Link href="/orders" className="hover:text-[#0b75a5]">
                My Orders
              </Link>
              <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
              <span className="font-semibold text-[#0b1d45]">{order.orderNumber}</span>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#0b75a5]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Back to Shopping
            </Link>
          </div>

          {/* Header */}
          <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-[#0b1d45] sm:text-2xl">
                  Order {order.orderNumber}
                </h1>
                <button
                  type="button"
                  aria-label="Copy order number"
                  className="text-slate-400 hover:text-[#0b75a5]"
                >
                  <Copy size={14} aria-hidden="true" />
                </button>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Placed on {order.orderDate}
              </p>
            </div>

          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            {/* Left column */}
            <div className="flex flex-col gap-5">
              {/* Shipping + payment info */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin size={16} className="text-[#0b75a5]" aria-hidden="true" />
                    <h3 className="text-sm font-bold text-[#0b1d45]">Shipping Address</h3>
                  </div>
                  <p className="text-sm font-semibold text-[#0b1d45]">
                    {order.customer.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {order.shippingAddress.address}
                  </p>
                  <p className="text-sm text-slate-500">
                    {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                  </p>
                  <p className="text-sm text-slate-500">
                    {order.shippingAddress.country}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">{order.customer.phone}</p>
                  <p className="text-xs text-slate-400">{order.customer.email}</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <CreditCard size={16} className="text-[#0b75a5]" aria-hidden="true" />
                    <h3 className="text-sm font-bold text-[#0b1d45]">Payment & Shipping</h3>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Payment Method</span>
                      <span className="font-semibold text-[#0b1d45]">
                        {order.paymentMethod}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Shipping Method</span>
                      <span className="text-right font-semibold text-[#0b1d45]">
                        {order.shippingMethod}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Order Number</span>
                      <span className="font-semibold text-[#0b1d45]">
                        {order.orderNumber}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-4">
                  <h2 className="text-sm font-bold text-[#0b1d45]">
                    Items ({orderItems.length})
                  </h2>
                </div>
                <div className="flex flex-col divide-y divide-slate-100">
                  {orderItems.map((item) => (
                    <div key={item.name} className="flex items-center gap-4 px-5 py-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#f5f7fb] p-2">
                        <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-[#0b1d45]">
                          {item.name}
                        </p>
                        <p className="truncate text-xs text-slate-500">{item.brand}</p>
                        <p className="mt-1 text-xs text-slate-400">Qty: {item.qty}</p>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-[#0b1d45]">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: summary + support */}
            <div className="flex flex-col gap-4">
              <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-base font-bold text-[#0b1d45]">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Subtotal ({orderItems.length} items)</span>
                    <span className="font-semibold text-[#0b1d45]">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Shipping Charges</span>
                    <span className="font-semibold text-[#0b1d45]">
                      {formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Discount</span>
                    <span className="font-semibold text-emerald-600">
                      - {formatPrice(discount)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-sm font-bold text-[#0b1d45]">Total Amount</span>
                  <span className="text-xl font-bold text-[#0b75a5]">
                    {formatPrice(total)}
                  </span>
                </div>

                <Link
                  href="/"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#19c9ee] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0db4d8]"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e6f7fc] text-[#0b75a5]">
                    <Headset size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#0b1d45]">Need Help?</p>
                    <p className="text-xs text-slate-500">
                      Contact our support team for any questions.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-[#0b1d45] transition-colors hover:bg-slate-50"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}