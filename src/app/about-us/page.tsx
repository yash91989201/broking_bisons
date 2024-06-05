"use client";
import Link from "next/link";
import Image from "next/image";
// ICONS
import { CheckIcon, ChevronRightCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AboutUsPage() {
	useEffect(() => {
		Aos.init({});
	}, []);
	return (
		<main>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div data-aos="fade-right">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								About Us
							</h1>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Welcome to Broking Bisons, your trusted partner in stock market
								education. We are dedicated to empowering individuals with the
								knowledge and skills they need to navigate the complexities of
								the stock market and achieve financial independence.
							</p>
						</div>
						<div
							className="relative aspect-video rounded-lg overflow-hidden"
							data-aos="flip-left"
						>
							<Image
								src="/assets/about-us-img.jpg"
								alt="hero image"
								fill
								className="brightness-75"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div data-aos="fade-right">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Our Mission
							</h2>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Our mission is to provide comprehensive, high-quality education
								that makes stock market investing accessible to everyone. We
								believe that with the right guidance and resources, anyone can
								become a successful trader.
							</p>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Our goal is to demystify the stock market and equip you with
								practical skills and confidence to make informed investment
								decisions.
							</p>
						</div>
						<div
							className="relative rounded-lg overflow-hidden aspect-video"
							data-aos="flip-left"
						>
							<Image
								src="/assets/hero-img.png"
								alt="hero image"
								fill
								className="brightness-75"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div data-aos="fade-right">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Experienced Instructors
							</h2>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Our team of instructors comprises seasoned professionals who
								bring a wealth of experience and insights from their successful
								careers in the stock market. They are passionate about teaching
								and committed to helping you achieve your financial goals.
							</p>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								With their guidance, you’ll gain valuable knowledge and
								practical advice that you can apply in real-world trading
								scenarios.
							</p>
						</div>
						<div className="grid gap-6" data-aos="flip-left">
							<div className="flex items-start gap-4">
								<div className="relative rounded-full aspect-square w-40 overflow-hidden">
									<Image
										src="/assets/hero-img.png"
										alt="hero image"
										fill
										className="brightness-75"
									/>
								</div>
								<div>
									<h3 className="text-xl font-bold">John Doe</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Senior Instructor, 10+ years of experience
									</p>
									<p className="mt-2 text-gray-500 dark:text-gray-400">
										John is a seasoned instructor with a passion for empowering
										learners. He brings a wealth of industry experience and a
										unique teaching approach that combines theory and practical
										application.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="relative rounded-full aspect-square w-40">
									<Image
										src="/assets/hero-img.png"
										alt="hero image"
										fill
										className="brightness-75"
									/>
								</div>
								<div>
									<h3 className="text-xl font-bold">Jane Smith</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Lead Instructor, 8+ years of experience
									</p>
									<p className="mt-2 text-gray-500 dark:text-gray-400">
										Jane is a highly skilled instructor with a passion for
										innovative teaching methods. She is known for her ability to
										make complex topics accessible and engaging for learners of
										all backgrounds.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div data-aos="fade-right">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Why Choose Us?
							</h2>

							<ul className="mt-4 space-y-2">
								<li className="flex items-start gap-2">
									<CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
									<div>
										<h4 className="text-lg font-bold">
											Comprehensive Curriculum
										</h4>
										<p className="text-gray-500 dark:text-gray-400">
											Our courses cover a wide range of topics, ensuring a
											thorough understanding of the stock market.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-2">
									<CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
									<div>
										<h4 className="text-lg font-bold">Expert Guidance</h4>
										<p className="text-gray-500 dark:text-gray-400">
											Learn from industry experts who have a proven track record
											of success.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-2">
									<CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
									<div>
										<h4 className="text-lg font-bold">Practical Skills</h4>
										<p className="text-gray-500 dark:text-gray-400">
											Our focus is on providing actionable knowledge that you
											can use to make informed investment decisions.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-2">
									<CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
									<div>
										<h4 className="text-lg font-bold">Community Support</h4>
										<p className="text-gray-500 dark:text-gray-400">
											Join a community of like-minded individuals who share your
											passion for investing and financial growth.
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div
							className="relative rounded-lg overflow-hidden"
							data-aos="flip-left"
						>
							<Image
								src="/assets/why-choose-us.webp"
								alt="hero image"
								fill
								className="brightness-75"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div data-aos="fade-right">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Our Vision
							</h2>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								At Broking Bisons, we envision a world where financial education
								is accessible to all. We strive to create an environment where
								anyone can learn to invest wisely and achieve financial freedom.
							</p>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Our commitment is to continuous improvement and innovation in
								our teaching methods to ensure the best learning experience for
								our students.
							</p>
						</div>
						<div
							className="relative aspect-video rounded-lg overflow-hidden"
							data-aos="flip-left"
						>
							<Image
								src="/assets/our-vision-img.webp"
								alt="hero image"
								fill
								className="brightness-75"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div data-aos="fade-right">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Join Us
							</h2>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Embark on your journey to financial independence with Broking
								Bisons. Whether you are just starting out or looking to enhance
								your trading skills, we have the right course for you. Let us
								help you unlock the secrets of the stock market and build a
								prosperous future.
							</p>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Thank you for choosing Broking Bisons. We look forward to being
								part of your success story.
							</p>
						</div>
						<Link
							href="/#courses-section"
							className={buttonVariants({
								className: "gap-3 dark:text-white w-fit mx-auto my-auto",
							})}
							data-aos="zoom-in-down"
						>
							<span>Explore our courses</span>
							<ChevronRightCircle className="size-4" />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
