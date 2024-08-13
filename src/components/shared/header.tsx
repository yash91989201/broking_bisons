"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// UTILS
import { cn } from "@/lib/utils";
// UI
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Krona_One } from "next/font/google";

// const font = Krona_One({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="lg:px-6 backdrop-filter backdrop-blur-md sticky top-0 bg-opacity-40 z-50 bg-gray-900/30">
      <div className="sm:max-w-[90vw] flex items-center justify-between mx-auto p-3 lg:py-6 lg:px-0 h-20 sm:h-24 gap-6">
        <Link href="/" className="flex-1">
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="relative sm:w-24 sm:h-16 w-16 h-12 rounded-full bg-[var(--background)] overflow-hidden">
              <Image src="/assets/logo.png" alt="logo" fill />
            </div>
            <div className="flex flex-col gap-1.5 ">
              {/* <h1
								className={cn(
									"sm:text-xl lg:text-3xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 via-amber-300",
									font.className
								)}
							>
								Broking Bisons
							</h1> */}
              <div className="relative w-36 md:w-48 lg:w-64 xl:w-72 2xl:w-80 h-10">
                <Image src="/assets/logo_text.png" alt="logo" fill />
              </div>
              <h3 className="text-gray-300 text-xs sm:text-sm">
                Academy of Stock market
              </h3>
            </div>
          </div>
        </Link>
        <nav className="md:flex items-center gap-12 hidden">
          <Link
            className={cn(
              pathname === "/"
                ? "text-primary font-semibold"
                : "hover:text-primary",
            )}
            href="/"
          >
            Home
          </Link>
          <Link
            className={cn(
              pathname === "/about-us"
                ? "text-primary font-semibold"
                : "hover:text-primary",
            )}
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className={cn(
              pathname === "/courses"
                ? "text-primary font-semibold"
                : "hover:text-primary",
            )}
            href="/courses"
          >
            Courses
          </Link>
          <Link
            className={cn(
              pathname === "/contact-us"
                ? "text-primary font-semibold"
                : "hover:text-primary",
            )}
            href="/contact-us"
          >
            Contact Us
          </Link>
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link href="https://m.facebook.com/61557250179825">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="size-10"
            >
              <circle cx="24" cy="24" r="24" fill="#3F51B5"></circle>
              <path
                fill="#FFF"
                d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                transform="translate(-3, -4)"
              ></path>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/brokingbisons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="size-10"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd5"></stop>
                <stop offset=".328" stop-color="#ff543f"></stop>
                <stop offset=".348" stop-color="#fc5245"></stop>
                <stop offset=".504" stop-color="#e64771"></stop>
                <stop offset=".643" stop-color="#d53e91"></stop>
                <stop offset=".761" stop-color="#cc39a4"></stop>
                <stop offset=".841" stop-color="#c837ab"></stop>
              </radialGradient>
              <circle
                cx="24"
                cy="24"
                r="24"
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              ></circle>
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#4168c9"></stop>
                <stop
                  offset=".999"
                  stop-color="#4168c9"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <circle
                cx="24"
                cy="24"
                r="24"
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              ></circle>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="text-left">
              <SheetTitle>Broking Bisons</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col items-start gap-3 pt-8 text-sm sm:text-base">
              <SheetTrigger asChild>
                <Link
                  className={cn(
                    pathname === "/"
                      ? "text-primary font-semibold"
                      : "hover:text-primary",
                  )}
                  href="/"
                >
                  Home
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  className={cn(
                    pathname === "/about-us"
                      ? "text-primary font-semibold"
                      : "hover:text-primary",
                  )}
                  href="/about-us"
                >
                  About Us
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  className={cn(
                    pathname === "/courses"
                      ? "text-primary font-semibold"
                      : "hover:text-primary",
                  )}
                  href="/courses"
                >
                  Courses
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  className={cn(
                    pathname === "/contact-us"
                      ? "text-primary font-semibold"
                      : "hover:text-primary",
                  )}
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </SheetTrigger>

              <SheetTrigger>
                <Link href="https://m.facebook.com/61557250179825">
                  Facebook
                </Link>
              </SheetTrigger>

              <SheetTrigger>
                <Link href="https://www.instagram.com/brokingbisons">
                  Instagram
                </Link>
              </SheetTrigger>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
