"use client";
import Image from "next/image";
import { useIntersectionObserver } from "usehooks-ts";
// UTILS
import { cn, formatPrice } from "@/lib/utils";
// TYPES
import { CourseType } from "@/lib/types";
// UI
import { Button } from "@/components/ui/button";
// ICONS
import { CircleCheckBig } from "lucide-react";

export default function CourseCard({ course }: { course: CourseType }) {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0.25,
		freezeOnceVisible: true,
	});
	return (
		<div
			key={course.name}
			ref={ref}
			className={cn(
				isIntersecting ? "animate-in slide-in-from-top " : "",
				"flex flex-col gap-6 w-80 md:w-96 items-center bg-gray-900 p-6 rounded-xl hover:scale-105 hover:-mt-3 transition-all fade-in-50 hover:duration-150  duration-700"
			)}
		>
			<h4
				className={cn(
					course.isPro ? "text-primary" : "text-amber-400",
					"text-base lg:text-xl font-semibold text-center w-full"
				)}
			>
				{course.name}
			</h4>
			<div className="relative aspect-video w-full">
				<Image src={course.imgSrc} alt="course" fill />
			</div>
			<p>What will I learn ?</p>
			<div className="flex flex-col gap-3 flex-1">
				{course.curriculum.map((item) => (
					<div key={item} className="flex items-start gap-3">
						<CircleCheckBig
							className={cn(
								course.isPro ? "text-primary" : "text-amber-400",
								"size-4 shrink-0 "
							)}
						/>
						<p className="text-gray-300 lg:text-base text-xs">{item}</p>
					</div>
				))}
			</div>
			{course.registrationFees && (
				<p className="text-xs lg:text-base">
					<sup>**</sup>
					<span className="underline">
						registration fees&nbsp;
						{formatPrice(course.registrationFees, {
							notation: "standard",
						})}
					</span>
				</p>
			)}
			<Button className="dark:text-white w-full lg:text-lg lg:h-12 rounded-full">
				Buy @&nbsp;
				{formatPrice(course.price, {
					notation: "standard",
				})}
				&nbsp;
				{course.paymentType === "monthly" ? "/mo" : "only"}
			</Button>
		</div>
	);
}
