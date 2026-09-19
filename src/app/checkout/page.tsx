"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Truck,
  Banknote,
  ShieldCheck,
  RotateCcw,
  Headset,
  Lock,
  Pencil,
  type LucideIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type OrderItem = {
  name: string;
  brand: string;
  qty: number;
  price: number;
  image: string;
};

const orderItems: OrderItem[] = [
  { name: "Laptop 15.6\" Full HD", brand: "Windows 11", qty: 1, price: 89999, image: "/products/laptop-hp.png" },
  { name: "Wireless Earbuds", brand: "Apple", qty: 1, price: 7999, image: "/products/earbuds.png" },
  { name: "Smart Watch", brand: "Samsung", qty: 1, price: 12999, image: "/products/smartwatch.png" },
];

const shippingMethods = [
  { id: "standard", Icon: Truck, title: "Standard Shipping", subtitle: "3 - 5 business days", price: 250 },
];

const paymentMethods = [
  { id: "cod", Icon: Banknote, title: "Cash on Delivery", subtitle: "Pay when you receive your order" },
];

const trustNotes: { Icon: LucideIcon; title: string; subtitle: string }[] = [
  { Icon: ShieldCheck, title: "100% Secure Payments", subtitle: "Your data is safe with us" },
  { Icon: RotateCcw, title: "Easy Returns", subtitle: "Hassle free returns within 7 days" },
  { Icon: Headset, title: "24/7 Support", subtitle: "We're here to help" },
];

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingCost = shippingMethods.find((m) => m.id === shippingMethod)?.price ?? 0;
  const discount = 0;
  const total = subtotal + shippingCost - discount;

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f5f7fb] font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-[1400px] px-4 py-6 md:px-8">
          {/* Back link */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#0b75a5]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Cart
          </Link>

          {/* Header + step indicator */}
          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h1 className="text-2xl font-bold text-[#0b1d45] sm:text-3xl">Checkout</h1>
              <p className="mt-1 text-sm text-slate-500">
                Complete your order and get your products delivered.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              {[
                { step: 1, label: "Shipping Details" },
                { step: 2, label: "Place Order" },
              ].map((s, i, arr) => (
                <div key={s.step} className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        s.step === 1
                          ? "bg-[#19c9ee] text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {s.step}
                    </span>
                    <span
                      className={`hidden text-xs font-medium sm:block ${
                        s.step === 1 ? "text-[#0b1d45]" : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="h-px w-6 bg-slate-200 sm:w-10" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            {/* Left: form */}
            <div className="flex flex-col gap-6">
              {/* Contact Information */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#19c9ee] text-xs font-bold text-white">
                    1
                  </span>
                  <h2 className="text-base font-bold text-[#0b1d45]">
                    Contact Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                    />
                  </div>
                </div>

                <div className="mt-6 mb-4 flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b1d45]/10 text-xs font-bold text-[#0b1d45]">
                    <Truck size={13} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-[#0b1d45]">Shipping Address</h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Address *
                    </label>
                    <input
                      type="text"
                      placeholder="House #, Street, Area"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      City *
                    </label>
                   
                    <select className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30">
                     <option>Hala</option>
                      <option>Hala old</option>
                      <option>hyderabad</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      placeholder="54000"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Country *
                    </label>
                    <select className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30">
                      <option>Pakistan</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#19c9ee] text-xs font-bold text-white">
                    2
                  </span>
                  <h2 className="text-base font-bold text-[#0b1d45]">Shipping Method</h2>
                </div>

                <div className="flex flex-col gap-3">
                  {shippingMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex cursor-pointer items-center justify-between rounded-lg border p-3.5 transition-colors ${
                        shippingMethod === method.id
                          ? "border-[#19c9ee] bg-[#e6f7fc]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping-method"
                          checked={shippingMethod === method.id}
                          onChange={() => setShippingMethod(method.id)}
                          className="h-4 w-4 accent-[#19c9ee]"
                        />
                        <method.Icon size={18} className="shrink-0 text-[#0b75a5]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-[#0b1d45]">{method.title}</p>
                          <p className="text-xs text-slate-500">{method.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-[#0b1d45]">
                        {formatPrice(method.price)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#19c9ee] text-xs font-bold text-white">
                    3
                  </span>
                  <h2 className="text-base font-bold text-[#0b1d45]">Payment Method</h2>
                </div>

                <div className="flex flex-col gap-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex cursor-pointer items-center justify-between rounded-lg border p-3.5 transition-colors ${
                        paymentMethod === method.id
                          ? "border-[#19c9ee] bg-[#e6f7fc]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment-method"
                          checked={paymentMethod === method.id}
                          onChange={() => setPaymentMethod(method.id)}
                          className="h-4 w-4 accent-[#19c9ee]"
                        />
                        <method.Icon size={18} className="shrink-0 text-[#0b75a5]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-[#0b1d45]">{method.title}</p>
                          <p className="text-xs text-slate-500">{method.subtitle}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <p className="mt-4 flex items-center gap-2 rounded-lg bg-[#e6f7fc] px-3.5 py-2.5 text-xs text-[#0b75a5]">
                  <ShieldCheck size={15} className="shrink-0" aria-hidden="true" />
                  Pay safely in cash when your order is delivered.
                </p>
              </div>
            </div>

            {/* Right: order summary */}
            <div className="flex flex-col gap-4">
              <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-base font-bold text-[#0b1d45]">Order Summary</h2>
                  <Link
                    href="/cart"
                    className="flex items-center gap-1 text-xs font-semibold text-[#0b75a5] hover:text-[#064d70]"
                  >
                    <Pencil size={12} aria-hidden="true" />
                    Edit Cart
                  </Link>
                </div>

                <div className="flex flex-col gap-3">
                  {orderItems.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f5f7fb] p-1.5">
                        <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-[#0b1d45]">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {item.brand} · Qty: {item.qty}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-[#0b1d45]">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 text-sm">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Subtotal ({orderItems.length} items)</span>
                    <span className="font-semibold text-[#0b1d45]">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Shipping Charges</span>
                    <span className="font-semibold text-[#0b1d45]">
                      {formatPrice(shippingCost)}
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
                  href="/order-success"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#19c9ee] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0db4d8]"
                >
                  <Lock size={15} aria-hidden="true" />
                  Place Order
                </Link>
              </div>

              {/* Trust notes */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3.5">
                  {trustNotes.map(({ Icon, title, subtitle }) => (
                    <div key={title} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#e6f7fc] text-[#0b75a5]">
                        <Icon size={16} aria-hidden="true" />
                      </span>
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}