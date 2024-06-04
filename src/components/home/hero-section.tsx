"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
// UI
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
// ICONS
import { ChevronRightCircle } from "lucide-react";

export default function HeroSection() {
	return (
		<section className="lg:px-6 my-8 lg:my-16">
			<div className="flex items-center justify-between flex-col-reverse lg:flex-row max-w-[90vw] mx-auto">
				{/* hero content */}
				<div className="flex flex-col max-w-2xl gap-3">
					<h2 className="text-xl lg:text-3xl font-semibold space-x-3">
						<span>Master Stock Trading with</span>
						<span className="text-primary">Broking Bisons</span>
					</h2>
					<p className="text-gray-300 text-sm lg:text-base">
						We offer online courses to help individuals of all experience levels
						master stock market trading and investing. Our expert-led, tailored
						courses are designed to meet your unique needs and goals.
					</p>
					<Button className="gap-3 dark:text-white w-fit">
						<span>Explore our courses</span>
						<ChevronRightCircle className="size-4" />
					</Button>
				</div>
				{/* hero-image/s */}
				<div className="p-6">
					<Carousel
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
					>
						<CarouselContent>
							{[1, 2, 3, 4].map((imgSrc) => (
								<CarouselItem
									className="relative aspect-video w-20 md:w-24 lg:w-44 rounded-md overflow-hidden"
									key={imgSrc}
								>
									<Image src="/assets/hero-img.png" alt="hero image" fill />
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
