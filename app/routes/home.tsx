import TourenLandingPage from "~/welcome/TourenLandingPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Touren | Premium Car Rentals & Fleet Services" },
    {
      name: "description",
      content:
        "Touren is a professional car rental agency offering reliable vehicles for personal and business use. Built for flexibility today, expanding into private vehicle sales tomorrow.",
    },
    {
      name: "keywords",
      content:
        "car rental, vehicle rental, fleet rentals, premium car rental, business car rental, Touren",
    },
    { name: "author", content: "Touren" },
    { name: "robots", content: "index, follow" },

    // Open Graph (social previews)
    { property: "og:title", content: "Touren | Premium Car Rentals" },
    {
      property: "og:description",
      content:
        "Reliable, professional vehicle rentals built for modern transportation needs.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Touren" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Touren | Premium Car Rentals" },
    {
      name: "twitter:description",
      content:
        "Professional car rentals focused on reliability, flexibility, and growth.",
    },
  ];
}

export default function Home() {
  return <TourenLandingPage />;
}
