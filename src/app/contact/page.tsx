"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  User,
  Tag,
  MessageSquare,
  Send,
  Navigation,
  type LucideIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STORE_ADDRESS = "RC7C+294 Shakeel General Store, Misri St, Hala, Pakistan";

const contactInfo: {
  Icon: LucideIcon;
  title: string;
  lines: string[];
}[] = [
  {
    Icon: Phone,
    title: "Phone",
    lines: ["+92 304 1298136", "Mon - Sat, 9:00 AM - 6:00 PM"],
  },
  {
    Icon: Mail,
    title: "Email",
    lines: ["rumanshakee56@gmail.com", "We reply within 24 hours"],
  },
  {
    Icon: MapPin,
    title: "Our Address",
    lines: [STORE_ADDRESS],
  },
];

const subjects = [
  "General Inquiry",
  "Order Support",
  "Returns & Refunds",
  "Reseller Program",
  "Feedback",
];

export default function ContactPage() {
  const [selectedSubject, setSelectedSubject] = useState("");

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
            <div className="max-w-xl text-white">
              <div className="mb-4 flex items-center gap-1.5 text-xs text-slate-300">
                <Link href="/" className="flex items-center gap-1 hover:text-white">
                  <HomeIcon size={12} aria-hidden="true" />
                  Home
                </Link>
                <ChevronRight size={12} aria-hidden="true" />
                <span className="text-slate-100">Contact Us</span>
              </div>
              <h1 className="text-3xl font-bold leading-none tracking-tight sm:text-4xl lg:text-5xl">
                Contact <span className="text-[#19d5f2]">Us</span>
              </h1>
              <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
                We&apos;re Here to Help You
              </h2>
              <p className="mt-3 max-w-lg text-xs leading-5 text-slate-200 sm:text-sm">
                Have a question or need assistance? Reach out to the Ruman Mart
                team and we&apos;ll be happy to help.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-200 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <Phone size={14} className="text-[#19d5f2]" aria-hidden="true" />
                  Call us
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-[#19d5f2]" aria-hidden="true" />
                  Email us
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#19d5f2]" aria-hidden="true" />
                  Visit our store
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-8">
          {/* Form + contact info */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
            {/* Send Us a Message */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-[#0b1d45] sm:text-2xl">
                Send Us <span className="text-[#19d5f2]">a Message</span>
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              <form className="mt-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <User
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                    />
                  </div>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                  />
                </div>

                <div className="relative">
                  <Tag
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-slate-200 py-2.5 pl-10 pr-8 text-sm text-slate-700 focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                  >
                    <option value="" disabled>
                      Select Subject *
                    </option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <ChevronRight
                    size={14}
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rotate-90 text-slate-400"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400"
                    aria-hidden="true"
                  />
                  <textarea
                    rows={5}
                    placeholder="Your Message *"
                    className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-10 pr-3.5 text-sm focus:border-[#19c9ee] focus:outline-none focus:ring-2 focus:ring-[#19c9ee]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#19c9ee] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0db4d8]"
                >
                  Send Message <Send size={16} aria-hidden="true" />
                </button>
              </form>
            </div>

            {/* Contact info sidebar */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ Icon, title, lines }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6f7fc] text-[#0b75a5]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#0b1d45]">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="mt-0.5 text-xs text-slate-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <MessageCircle size={18} aria-hidden="true" />
                </span>
                <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-[#0b1d45]">Live Chat</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Chat with us on WhatsApp. Quick support, anytime.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
                  >
                    Chat Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Find Us On Map */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="text-xl font-bold text-[#0b1d45] sm:text-2xl">
              Find Us <span className="text-[#19d5f2]">On Map</span>
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Visit our office or get in touch with us at our location.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
              {/* Map embed */}
              <div className="relative h-64 overflow-hidden rounded-xl border border-slate-200 sm:h-80">
                <iframe
                  title="Ruman Mart location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(STORE_ADDRESS)}&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Visit our store card */}
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#f5f7fb] p-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f7fc] text-[#0b75a5]">
                  <MapPin size={28} aria-hidden="true" />
                </span>
                <p className="text-base font-bold text-[#0b1d45]">
                  Visit Our Store
                </p>
                <p className="text-sm leading-6 text-slate-500">
                  {STORE_ADDRESS}
                </p>
                <p className="text-xs text-slate-400">
                  You can also visit our physical store for a better shopping
                  experience. Our team is always happy to help!
                </p>
                <Link
                  href={`https://www.google.com/maps?q=${encodeURIComponent(STORE_ADDRESS)}`}
                  target="_blank"
                  className="mt-1 inline-flex items-center gap-2 rounded-lg border-2 border-[#19c9ee] px-5 py-2.5 text-sm font-semibold text-[#0b75a5] transition-colors hover:bg-[#e6f7fc]"
                >
                  <Navigation size={15} aria-hidden="true" />
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}