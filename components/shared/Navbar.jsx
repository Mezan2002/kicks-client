import Image from "next/image";
import Link from "next/link";

import { DownArrowIcon, SearchIcon, UserIcon } from "@/components/ui/customSvg";

const Navbar = () => {
  return (
    <div className="mx-[60px] mt-8 bg-light-white p-8 rounded-3xl">
      <div className="flex items-center justify-between">
        {/* nav menu links */}
        <ul className="flex items-center gap-x-10">
          <li>
            <Link href="#" className="text-base font-semibold text-dark">
              New Drops 🔥
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-base font-semibold text-dark flex items-center gap-0.5"
            >
              Men <DownArrowIcon />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-base font-semibold text-dark flex items-center gap-0.5"
            >
              Women <DownArrowIcon />
            </Link>
          </li>
        </ul>
        {/* logo */}
        <Image
          src="/images/shared/logo.png"
          alt="Logo"
          width={128}
          height={32}
        />
        {/* icons */}
        <div className="flex items-center gap-x-10">
          <button>
            <SearchIcon />
          </button>
          <button>
            <UserIcon />
          </button>
          <button className="bg-yellow rounded-full size-8">0</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
