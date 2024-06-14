"use client";
import "./hero-section.css";
import Link from "next/link";
// UI
import { buttonVariants } from "@/components/ui/button";
// ICONS
import { ChevronRightCircle } from "lucide-react";
// CONSTANTS
import AnimatedTextWord from "@/components/shared/animated-text";
import { Krona_One } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Krona_One({ subsets: ["latin"], weight: "400" });

export default function HeroSection() {
	return (
		<section className="">
			<div className="relative w-full h-[40vh] sm:h-screen overflow-hidden">
				<div className="image"></div>
			</div>

			<div className="absolute top-[30%] sm:top-[60%] mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-1/2 backdrop-filter backdrop-blur-md bg-gray-900/30 p-3 rounded-md gap-6 flex items-center flex-col">
				{/* <h1 className="animate-text bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent text-3xl xl:text-8xl font-semibold"> */}
				<h1
					className={cn(
						"text-white text-lg md:text-3xl xl:text-6xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 via-amber-300",
						font.className
					)}
					data-aos="fade-up"
				>
					BROKING BISONS
				</h1>
				{/* <AnimatedTextWord
					text="BROKING  BISONS"
					className={cn(
						"text-white text-lg md:text-3xl xl:text-6xl font-semibold",
						font.className
					)}
				/> */}
				<p
					className="text-sm leading-6 text-white text-center lg:text-lg sm:block hidden"
					data-aos="fade-right"
				>
					BROKING BISONS is a startup that provides online courses on stock
					market trading and investing. Our goal is to help individuals,
					regardless of their level of expertise, to learn and master the art of
					buying and selling stocks. By leveraging our knowledge and experience
					in the field, we aim to provide tailored trading courses that meet the
					needs of our clients.
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
						className: "gap-3 dark:text-white w-fit h-14 text-base lg:text-lg",
					})}
					data-aos="fade-left"
				>
					<span>Explore our courses</span>
					<ChevronRightCircle className="size-4" />
				</Link>
			</div>
		</section>
	);
}
