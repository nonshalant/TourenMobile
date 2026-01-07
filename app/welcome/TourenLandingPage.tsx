import React from "react";
import logo from "./TourenLogoLong.png";

export default function TourenLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <div className="relative flex justify-center">
          <img
            src={logo}
            alt="Touren Logo"
            className="h-auto w-auto max-w-xs md:max-w-sm"
          />
        </div>

        <p className="relative mt-6 max-w-xl text-lg text-gray-300">
          Premium vehicle rentals built for reliability, flexibility, and
          growth.
        </p>

        <div className="relative mt-10 flex gap-4">
          <a
            href="#contact"
            className="rounded-2xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 transition"
          >
            Contact Us
          </a>
          <a
            href="#fleet"
            className="rounded-2xl border border-gray-600 px-8 py-3 font-semibold text-gray-300 hover:bg-gray-800 transition"
          >
            Fleet Coming Soon
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Built to Move You Forward</h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          Touren is a modern car rental agency focused on dependable vehicles
          and a professional experience. Starting with curated rental fleets and
          expanding into private vehicle sales, our mission is simple: provide
          access to quality transportation without friction.
        </p>
      </section>

      {/* FLEET (PLACEHOLDER) */}
      <section
        id="fleet"
        className="px-6 py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Fleet</h2>
          <p className="text-gray-400 max-w-3xl">
            Our fleet is growing. Vehicles are carefully selected for comfort,
            reliability, and performance. More options coming soon.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-red-600"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-red-600"
          />
          <textarea
            placeholder="How can we help you?"
            rows={4}
            className="md:col-span-2 rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-red-600"
          />
          <button
            type="submit"
            className="md:col-span-2 rounded-2xl bg-red-600 py-3 font-semibold hover:bg-red-700 transition"
          >
            Submit Inquiry
          </button>
        </form>
        <p className="mt-6 text-gray-500 text-sm">
          Or email us directly at{" "}
          <span className="text-gray-300">info@touren.com</span>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Touren. All rights reserved.
      </footer>
    </div>
  );
}
