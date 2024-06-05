"use client";
import Image from "next/image";
import { useIntersectionObserver } from "usehooks-ts";
// UTILS
import { cn } from "@/lib/utils";
// CONSTANTS
import { REASONS } from "@/constants";
// ICONS
import { Dot } from "lucide-react";

export default function ReasonCard({
	reason,
}: {
	reason: (typeof REASONS)[0];
}) {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0.5,
		freezeOnceVisible: true,
	});

	return (
		<div
			ref={ref}
			className={cn(
				isIntersecting
					? "animate-fade-in-left xl:animate-fade-in-down fade-in-0"
					: "",
				"flex flex-col gap-6 max-w-96 items-center bg-gray-900 p-6 lg:pt-0 rounded-xl xl:hover:scale-105 transition-all"
			)}
		>
			<div className="relative aspect-square w-20 md:w-24 lg:w-32 lg:-mt-16">
				<Image src={reason.imgSrc} alt="reason" fill />
			</div>
			<h4 className="text-amber-400 lg:text-lg font-semibold text-center w-full h-12">
				{reason.label}
			</h4>
			<ul className="flex flex-col gap-3 ">
				{reason.points.map((point) => (
					<li key={point} className="text-gray-300 flex items-start gap-1.5">
						<Dot className="shrink-0" />
						<span className="text-xs lg:text-base">{point}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
