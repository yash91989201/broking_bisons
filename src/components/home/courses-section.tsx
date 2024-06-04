"use client";
import { useState } from "react";
// UTILS
import { cn } from "@/lib/utils";
// UI
import { Switch } from "@/components/ui/switch";
// CUSTOM COMPONENTS
import CourseCard from "@/components/home/course-card";
// CONSTANTS
import { COURSES } from "@/constants";

export default function CoursesSection() {
	const [proCourse, setProCourse] = useState(false);
	const toggleCourseType = () => {
		setProCourse(!proCourse);
	};

	const displayCourses = COURSES.filter((course) => course.isPro === proCourse);

	return (
		<section className="lg:px-6 my-8 lg:my-16" id="courses-section">
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
						{displayCourses.map((course) => (
							<CourseCard key={course.name} course={course} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
