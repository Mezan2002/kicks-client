import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Newsletter from "@/components/shared/Newsletter";
import { Open_Sans, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kicks | Home",
  description: "Kicks a new era of shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${openSans.variable} bg-light-gray antialiased`}
      >
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
