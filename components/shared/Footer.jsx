import Image from "next/image";
import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  TwitterIcon,
} from "@/components/ui/customSvg";

const footerLinks = [
  {
    title: "Categories",
    links: [
      { label: "Runners", href: "#" },
      { label: "Sneakers", href: "#" },
      { label: "Basketball", href: "#" },
      { label: "Outdoor", href: "#" },
      { label: "Golf", href: "#" },
      { label: "Hiking", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="mx-4 md:mx-[60px] bg-secondary rounded-[32px] md:rounded-[48px] overflow-hidden">
        <div className="p-4 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between gap-12 lg:gap-10">
          <div className="max-w-full lg:max-w-[300px] xl:max-w-[450px]">
            <h5 className="text-3xl md:text-4xl font-semibold text-yellow mb-2 md:mb-4">
              About us
            </h5>
            <p className="text-light-gray text-base md:text-xl font-medium font-open-sans">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-8 xl:gap-16 2xl:gap-32">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h6 className="text-xl md:text-2xl font-semibold text-yellow mb-4 md:mb-6">
                  {section.title}
                </h6>
                <ul className="space-y-2 md:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base md:text-xl font-medium font-open-sans text-light-gray hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h6 className="text-xl md:text-2xl font-semibold text-yellow mb-4 md:mb-6">
                Follow us
              </h6>
              <div className="flex items-center gap-x-6">
                <button className="hover:scale-110 transition-transform">
                  <FacebookIcon />
                </button>
                <button className="hover:scale-110 transition-transform">
                  <InstagramIcon />
                </button>
                <button className="hover:scale-110 transition-transform">
                  <TwitterIcon />
                </button>
                <button className="hover:scale-110 transition-transform">
                  <TiktokIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-0">
          <Image
            src="/images/shared/footer-logo.png"
            alt="Footer logo"
            width={1300}
            height={500}
            className="w-full h-auto brightness-110"
          />
        </div>
      </div>
      <h6 className="text-center text-xs md:text-sm text-secondary pt-6 pb-4 md:pt-7 md:pb-[18px] opacity-70">
        © All rights reserved
      </h6>
    </footer>
  );
};

export default Footer;
