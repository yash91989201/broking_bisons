"use client";
import "./hero-section.css";
import Link from "next/link";
// UI
import { buttonVariants } from "@/components/ui/button";
// ICONS
import { ChevronRightCircle } from "lucide-react";
// CONSTANTS
import { Krona_One } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Krona_One({ subsets: ["latin"], weight: "400" });

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative w-full sm:h-[calc(100vh-6rem)] h-[50vh] overflow-hidden">
        <div className="image"></div>
      </div>

      <div className="absolute top-[50%] mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-1/2 2xl:w-[65vw] 3xl:top-[40%] backdrop-filter backdrop-blur-md bg-gray-900/30 p-3 rounded-md gap-3 sm:gap-6 flex items-center flex-col">
        <h1
          className={cn(
            "2xl:hidden block text-white text-xl md:text-3xl xl:text-5xl 2xl:font-black font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 via-amber-300",
            font.className,
          )}
          data-aos="fade-up"
        >
          BROKING BISONS
        </h1>
        <svg
          viewBox="0 0 1098 100"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden 2xl:inline"
        >
          <defs>
            <linearGradient
              id="text-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#ff6b6b", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#ff7f50", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffb347", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <text
            id="responsive-text"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#text-gradient)"
            className={font.className}
            data-aos="fade-up"
          >
            BROKING BISONS
          </text>
        </svg>

        <p
          className="text-xs leading-6 text-white text-center lg:text-sm sm:block hidden 2xl:text-2xl 2xl:max-w-3xl"
          data-aos="fade-right"
        >
          BROKING BISONS is a startup offering online courses on stock market
          trading and investing. We aim to help individuals of all expertise
          levels learn and master the art of buying and selling stocks.
          Leveraging our knowledge and experience, we provide tailored trading
          courses to meet the needs of our clients.
        </p>
        <p
          className="text-xs leading-6 text-white text-center sm:hidden"
          data-aos="fade-right"
        >
          We offer online courses to help individuals of all experience levels
          master stock market trading and investing. Our expert-led, tailored
          courses are designed to meet your unique needs and goals.
        </p>
        <Link
          href="#courses-section"
          className={buttonVariants({
            className:
              "gap-3 dark:text-white w-fit h-14 lg:text-lg sm:text-base text-xs",
          })}
          data-aos="fade-left"
        >
          <span>Explore our courses</span>
          <ChevronRightCircle className="size-3 sm:size-4" />
        </Link>
      </div>
    </section>
  );
}
