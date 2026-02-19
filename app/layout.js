import Navbar from "@/components/shared/Navbar";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kicks | Home",
  description: "Kicks a new era of shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
