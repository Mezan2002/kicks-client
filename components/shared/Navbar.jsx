"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  DownArrowIcon,
  HamburgerMenuIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "@/components/ui/customSvg";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "New Drops 🔥", href: "#", hasIcon: false },
    { name: "Men", href: "#", hasIcon: true },
    { name: "Women", href: "#", hasIcon: true },
  ];

  return (
    <header className="sticky top-8 z-50">
      <nav className="mx-4 md:mx-[60px] mt-8 bg-light-white py-2 px-3 md:p-8 rounded-xl md:rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2"
              aria-label="Open menu"
            >
              <HamburgerMenuIcon />
            </button>
            <ul className="hidden md:flex items-center gap-x-10">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-0.5 group"
                  >
                    {item.name}
                    {item.hasIcon && (
                      <DownArrowIcon className="group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link href="/">
              <Image
                src="/images/shared/logo.png"
                alt="Logo"
                width={128}
                height={32}
                className="w-20 md:w-32 h-auto"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-x-4 md:gap-x-10 w-[306px]">
            <button className="hidden md:block hover:scale-110 transition-transform">
              <SearchIcon />
            </button>
            <button className="hover:scale-110 transition-transform">
              <UserIcon />
            </button>
            <Link
              href="/cart"
              className="bg-[#FFA52F] text-secondary font-bold rounded-full size-8 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="text-sm">{cart.length}</span>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-60 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      <aside
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white z-70 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-black/5">
          <Image
            src="/images/shared/logo.png"
            alt="Logo"
            width={100}
            height={25}
            className="w-20 h-auto"
          />
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <XIcon size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-xl font-bold text-secondary hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {item.name}
                  {item.hasIcon && (
                    <DownArrowIcon className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-black/5 bg-light-white">
          <div className="flex items-center gap-4 mb-6">
            <button className="flex-1 bg-secondary text-white py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors">
              Login
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center">
            &copy; 2026 Kicks Boutique Store.
          </p>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
