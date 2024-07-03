"use client";
import "aos/dist/aos.css";

import Aos from "aos";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Krona_One } from "next/font/google";
// UTILS
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
// ICONS
import { CheckIcon, ChevronRightCircle } from "lucide-react";

const font = Krona_One({ subsets: ["latin"], weight: "400" });

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
							<h1
								className={cn(
									"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",
									font.className
								)}
							>
								About Us
							</h1>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Welcome to Broking Bisons Academy of Stock Market, a leading
								stock broking company dedicated to providing top-notch training,
								trading, mentorship, and investment services. With a robust
								client base of over 5,000 active clients, we are committed to
								helping individuals and businesses achieve their financial goals
								through comprehensive stock market education and personalized
								support.
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
								At Broking Bisons Academy of Stock Market, our mission is to
								empower our clients with the knowledge and skills needed to
								navigate the complexities of the stock market.
							</p>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								We strive to provide high-quality education and mentorship,
								enabling our clients to make informed trading and investment
								decisions confidently.
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
										src="/assets/hero-img-1.png"
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
								Our vision is to be the premier destination for stock market
								learning and investment services.
							</p>
							<p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								We aim to create a community of informed investors who can
								achieve financial independence and success through the support
								and guidance of Broking Bisons Academy of Stock Market.
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
								Join Broking Bisons Academy of Stock Market and take the first
								step towards mastering the stock market. Whether you&apos;s re a
								beginner looking to learn the basics or an experienced trader
								seeking advanced strategies, our academy offers a range of
								courses and mentorship programs tailored to your needs. Become a
								part of our growing community and start your journey to
								financial success today.
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
