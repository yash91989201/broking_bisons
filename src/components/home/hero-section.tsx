"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
// UTILS
import { cn } from "@/lib/utils";
// UI
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
// CONSTANTS
import { CAROUSEL_SLIDES } from "@/constants";
// ICONS
import { ChevronRightCircle } from "lucide-react";

export default function HeroSection() {
	return (
		<section className="relative w-[99vw] aspect-square sm:aspect-video flex items-center justify-center">
			<Image
				src="/assets/hero-img.png"
				alt="hero image"
				fill
				className="brightness-75"
			/>

			<div className="w-[96%] sm:w-4/5 md:w-3/4 lg:w-1/2">
				<Carousel
					plugins={[
						Autoplay({
							delay: 1500,
						}),
					]}
				>
					<CarouselContent>
						<CarouselItem>
							<div className="flex flex-col max-w-2xl gap-3">
								<h2 className="text-xl lg:text-3xl font-semibold space-x-3">
									<span>Master Stock Trading with</span>
									<span className="text-primary">Broking Bisons</span>
								</h2>
								<p className="text-gray-300 text-sm lg:text-base">
									We offer online courses to help individuals of all experience
									levels master stock market trading and investing. Our
									expert-led, tailored courses are designed to meet your unique
									needs and goals.
								</p>
								<Button className="gap-3 dark:text-white w-fit">
									<span>Explore our courses</span>
									<ChevronRightCircle className="size-4" />
								</Button>
							</div>
						</CarouselItem>
						{CAROUSEL_SLIDES.map((carousel, index) => (
							<CarouselItem className="w-fit" key={carousel.heading}>
								<div className="flex flex-col max-w-2xl gap-3">
									<h2
										className={cn(
											index % 2 === 0 ? "text-white" : "text-primary",
											"text-xl lg:text-3xl font-semibold space-x-3"
										)}
									>
										{carousel.heading}
									</h2>
									<p className="text-gray-300 text-sm lg:text-base">
										{carousel.description}
									</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
}
