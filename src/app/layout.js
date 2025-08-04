import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Simran Lalchandani | UI/UX Designer Crafting Engaging Digital Experiences",
  description:
    "Discover Simran’s portfolio – a UI/UX designer focused on intuitive interfaces, user-centric design, and seamless digital experiences for web and mobile platforms.",
  openGraph: {
    title:
      "Simran Lalchandani | UI/UX Designer Crafting Engaging Digital Experiences",
    description:
      "Discover Simran’s portfolio – a UI/UX designer focused on intuitive interfaces, user-centric design, and seamless digital experiences for web and mobile platforms.",
    url: "https://www.simranlalchandani.com/",
    siteName:
      "Simran Lalchandani | UI/UX Designer Crafting Engaging Digital Experiences",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title:
      "Simran Lalchandani | UI/UX Designer Crafting Engaging Digital Experiences",
    description:
      "Discover Simran’s portfolio – a UI/UX designer focused on intuitive interfaces, user-centric design, and seamless digital experiences for web and mobile platforms.",
    site: "@_SimranLalchandani",
  },
  alternates: {
    canonical: "https://www.simranlalchandani.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
