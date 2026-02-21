import Image from "next/image";
import Link from "next/link";

import {
  DownArrowIcon,
  HamburgerMenuIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/customSvg";

const Navbar = () => {
  return (
    <nav className="mx-4 md:mx-[60px] mt-8 bg-light-white p-4 md:p-8 rounded-2xl md:rounded-3xl">
      <div className="flex items-center justify-between">
        {/* mobile hamburger / desktop nav menu links */}
        <div className="flex items-center">
          <button className="md:hidden p-2">
            <HamburgerMenuIcon />
          </button>
          <ul className="hidden md:flex items-center gap-x-10">
            <li>
              <Link
                href="#"
                className="text-base font-semibold text-secondary hover:text-primary transition-colors"
              >
                New Drops 🔥
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-base font-semibold text-secondary flex items-center gap-0.5 hover:text-primary transition-colors group"
              >
                Men{" "}
                <DownArrowIcon className="group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-base font-semibold text-secondary flex items-center gap-0.5 hover:text-primary transition-colors group"
              >
                Women{" "}
                <DownArrowIcon className="group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/">
            <Image
              src="/images/shared/logo.png"
              alt="Logo"
              width={128}
              height={32}
              className="w-24 md:w-32 h-auto"
            />
          </Link>
        </div>

        {/* icons */}
        <div className="flex items-center justify-end gap-x-4 md:gap-x-10 w-[306px]">
          <button className="hidden md:block hover:scale-110 transition-transform">
            <SearchIcon />
          </button>
          <button className="hover:scale-110 transition-transform">
            <UserIcon />
          </button>
          <button className="bg-[#FFA52F] text-secondary font-bold rounded-full size-8 flex items-center justify-center hover:scale-110 transition-transform">
            0
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
