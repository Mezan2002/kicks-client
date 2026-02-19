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
    <div>
      <div className="mx-[60px] bg-secondary rounded-[48px] overflow-hidden">
        <div className="p-10 flex 2xl:gap-40 xl:gap-20 lg:gap-10 justify-between mb-24">
          <div className="xl:max-w-[450px] lg:max-w-[250px]">
            <h5 className="text-4xl font-semibold text-yellow mb-1">
              About us
            </h5>
            <p className="text-light-gray text-xl">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="grid grid-cols-3 2xl:gap-32 xl:gap-16 lg:gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h6 className="text-2xl font-semibold text-yellow mb-4">
                  {section.title}
                </h6>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xl text-light-gray"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h6 className="text-2xl font-semibold text-yellow mb-4">
                Follow us
              </h6>
              <div className="flex items-center gap-x-6">
                <button>
                  <FacebookIcon />
                </button>
                <button>
                  <InstagramIcon />
                </button>
                <button>
                  <TwitterIcon />
                </button>
                <button>
                  <TiktokIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/shared/footer-logo.png"
          alt="Footer logo"
          width={1300}
          height={500}
        />
      </div>
      <h6 className="text-center text-sm text-secondary pt-7 pb-[18px]">
        © All rights reserved
      </h6>
    </div>
  );
};

export default Footer;
