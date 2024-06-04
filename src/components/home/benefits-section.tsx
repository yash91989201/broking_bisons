import { BENEFITS } from "@/constants";
import Image from "next/image";

export default function BenefitsSection() {
	return (
		<section className="lg:px-6 my-8 lg:my-16">
			<div className="flex items-center justify-between flex-col max-w-[90vw] mx-auto">
				{/* section heading */}
				<h2 className="text-xl lg:text-3xl font-semibold space-x-3">
					How can I benefit?
				</h2>
				{/* benefit cards */}
				<div className="my-16">
					<div className="flex items-center justify-center gap-16 flex-wrap">
						{BENEFITS.map((benefit) => (
							<div
								key={benefit.label}
								className="flex flex-col gap-6 w-64 lg:w-72 items-center"
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
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
