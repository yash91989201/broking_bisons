"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
// UI
import { buttonVariants } from "@/components/ui/button";
// ICONS
import { ChevronRightCircle } from "lucide-react";

export default function HeroSection() {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.8;
		}
	}, []);

	return (
		<section className="relative aspect-square sm:aspect-video flex flex-col items-center justify-center">
			<div className="sm:absolute w-full h-fit sm:h-full overflow-hidden">
				{/* <Image
					src="/assets/hero-img.png"
					alt="hero image"
					fill
					className="brightness-75"
				/> */}
				<video
					ref={videoRef}
					src="/assets/hero-video.mp4"
					className="sm:absolute w-screen sm:h-full"
					autoPlay
				/>
			</div>

			<div className="w-4/5 lg:w-1/2 animate-in slide-in-from-top duration-700 backdrop-filter backdrop-blur-md bg-gray-900/30 p-3 rounded-md gap-6 flex items-center flex-col">
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
