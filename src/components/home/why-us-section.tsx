import { REASONS } from "@/constants";
import { Dot } from "lucide-react";
import Image from "next/image";

export default function WhyUsSection() {
	return (
		<section className="lg:px-6 my-8 lg:my-16">
			<div className="flex items-center justify-between flex-col max-w-[90vw] mx-auto">
				{/* section heading */}
				<div className="text-center space-y-3">
					<h2 className="text-xl lg:text-3xl font-semibold space-x-3">
						Why choose our courses?
					</h2>
					<p className="text-gray-300 max-w-5xl text-sm lg:text-xl">
						Are you interested in learning how to invest and trade in stock
						market? Our 3-months course is the perfect solution for anyone who
						wants to gain the knowledge and skills necessary to become a
						successful trader. <br />
						Here are some reasons why you should choose our course:
					</p>
				</div>
				{/* benefit cards */}
				<div className="my-16">
					<div className="flex my-16 justify-center gap-6 flex-wrap">
						{REASONS.map((reason) => (
							<div
								key={reason.label}
								className="flex flex-col gap-6 max-w-96 items-center bg-gray-900 p-6 lg:pt-0 rounded-xl hover:scale-105 transition-all"
							>
								<div className="relative aspect-square w-20 md:w-24 lg:w-32 lg:-mt-16">
									<Image src={reason.imgSrc} alt="reason" fill />
								</div>
								<h4 className="text-amber-400 lg:text-lg font-semibold text-center w-full h-12">
									{reason.label}
								</h4>
								<ul className="flex flex-col gap-3 ">
									{reason.points.map((point) => (
										<li
											key={point}
											className="text-gray-300 flex items-start gap-1.5"
										>
											<Dot className="shrink-0" />
											<span className="text-xs lg:text-base">{point}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
