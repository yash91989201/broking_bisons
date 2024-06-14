"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// UI
import { buttonVariants } from "@/components/ui/button";
// ICONS
import { ChevronRightCircle } from "lucide-react";
// CONSTANTS
import { HERO_IMG_LIST as images } from "@/constants";

const sliderVariants = {
	incoming: (direction: number) => ({
		x: direction > 0 ? "100%" : "-100%",
		scale: 1.2,
		opacity: 0,
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: (direction: number) => ({
		x: direction > 0 ? "-100%" : "100%",
		scale: 1,
		opacity: 0.2,
	}),
};

const sliderTransition = {
	duration: 1,
	ease: [0.56, 0.03, 0.12, 1.04],
};

export default function HeroSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3500);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative aspect-square sm:aspect-video ">
			<div className="w-full h-[60vh]">
				<AnimatePresence>
					{images.map(
						(image, index) =>
							index === currentIndex && (
								<motion.div
									key={image}
									className="absolute inset-0"
									initial={{
										opacity: 0.75,
										scale: 0.95,
										filter: "brightness(0.8)",
									}}
									animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
									exit={{
										opacity: 0.75,
										scale: 0.95,
										filter: "brightness(0.8)",
									}}
									transition={{
										opacity: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
										scale: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
										filter: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
									}}
								>
									{/* eslint-disable-next-line */}
									<img
										src={image}
										alt={`Slide ${index}`}
										className="w-full h-full object-cover"
									/>
								</motion.div>
							)
					)}
				</AnimatePresence>
			</div>

			<div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-1/2 backdrop-filter backdrop-blur-md bg-gray-900/30 p-3 rounded-md gap-6 flex items-center flex-col">
				{/* <h1 className="animate-text bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent text-3xl xl:text-8xl font-semibold"> */}
				<h1
					className="text-white text-lg md:text-3xl xl:text-6xl font-semibold"
					data-aos="fade-up"
				>
					BROKING BISONS
				</h1>
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
