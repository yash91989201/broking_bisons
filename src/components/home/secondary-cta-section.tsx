import Link from "next/link";
import { Krona_One } from "next/font/google";
// UTILS
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
// ICONS
import { ChevronRightCircle } from "lucide-react";

const font = Krona_One({ subsets: ["latin"], weight: "400" });

export default function SecondaryCTASection() {
  return (
    <section className="lg:px-6 my-8 lg:my-16">
      <div className="flex items-center justify-between flex-col max-w-[90vw] mx-auto gap-16">
        {/* section heading */}
        <div className="text-center space-y-3">
          <h2
            className={cn(
              "text-xl lg:text-3xl font-semibold space-x-3",
              font.className,
            )}
          >
            Elevate your investing skills now !
          </h2>
          <p className="text-gray-300 max-w-5xl lg:text-base text-sm xl:text-xl">
            Don&apos;t miss out on this opportunity to learn how to invest and
            trade in the stock market.
            <br />
            Enroll in our courses today and start your journey towards financial
            independence
          </p>
        </div>
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
