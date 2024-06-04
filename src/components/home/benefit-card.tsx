"use client";
import Image from "next/image";
import { useIntersectionObserver } from "usehooks-ts";
// UTILS
import { cn } from "@/lib/utils";
// CONSTANTS
import { BENEFITS } from "@/constants";

export default function BenefitCard({
	benefit,
}: {
	benefit: (typeof BENEFITS)[0];
}) {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0.25,
		freezeOnceVisible: true,
	});

	return (
		<div
			ref={ref}
			className={cn(
				isIntersecting ? "animate-in slide-in-from-top duration-700" : "",
				"flex flex-col gap-6 w-64 lg:w-72 items-center transition-all fade-in-50 delay-75"
			)}
		>
			<div className="relative aspect-square w-20 md:w-24 lg:w-32">
				<Image src={benefit.imgSrc} alt="benefit" fill />
			</div>
			<h4 className="text-amber-400 text-sm lg:text-lg font-semibold text-center w-full">
				{benefit.label}
			</h4>
			<p className="text-center text-gray-300 text-xs lg:text-base">
				{benefit.description}
			</p>
		</div>
	);
}
