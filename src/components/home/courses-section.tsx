"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BENEFITS, COURSES } from "@/constants";
import { cn, formatPrice } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CoursesSection() {
	const [proCourse, setProCourse] = useState(false);
	const toggleCourseType = () => {
		setProCourse(!proCourse);
	};

	return (
		<section className="lg:px-6 my-8 lg:my-16">
			<div className="flex items-center justify-between flex-col max-w-[90vw] mx-auto">
				{/* section heading */}
				<div className="text-center space-y-3">
					<h2 className="text-xl lg:text-3xl font-semibold space-x-3 text-primary">
						Our Courses
					</h2>
					<p className="text-gray-300 max-w-xl lg:text-base text-sm">
						Unlock the secrets of stock market investing with courses starting
						as low as ₹15,000, offering unbeatable value for comprehensive
						training.
					</p>
				</div>
				{/* course type toggle */}
				<div className="flex items-center justify-center gap-3 lg:gap-6 my-4 lg:my-8 lg:text-base text-sm">
					<span
						className={cn(!proCourse ? "font-semibold" : "", "text-gray-300")}
					>
						Beginner
					</span>
					<Switch
						checked={proCourse}
						onCheckedChange={toggleCourseType}
						className="lg:scale-150"
					/>
					<span
						className={cn(proCourse ? "font-semibold" : "", "text-primary")}
					>
						Pro
					</span>
				</div>
				{/* courses cards */}
				<div className="my-16">
					<div className="flex items-stretch justify-center gap-6 flex-wrap">
						{COURSES.filter((course) => course.isPro === proCourse).map(
							(course) => (
								<div
									key={course.name}
									className="flex flex-col gap-6 w-80 md:w-96 items-center bg-gray-900 p-6 rounded-xl"
								>
									<h4
										className={cn(
											proCourse ? "text-primary" : "text-amber-400",
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
														proCourse ? "text-primary" : "text-amber-400",
														"size-4 shrink-0 "
													)}
												/>
												<p className="text-gray-300 lg:text-base text-xs">
													{item}
												</p>
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
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
