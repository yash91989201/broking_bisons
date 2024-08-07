import { Krona_One } from "next/font/google";
// CUSTOM COMPONENTS
import BenefitCard from "@/components/home/benefit-card";
// CONSTANTS
import { BENEFITS } from "@/constants";
import { cn } from "@/lib/utils";

const font = Krona_One({ subsets: ["latin"], weight: "400" });

export default function BenefitsSection() {
	return (
		<section className="lg:px-6 my-8 lg:my-16">
			<div className="flex items-center justify-between flex-col max-w-[90vw] mx-auto">
				{/* section heading */}
				<h2
					className={cn(
						"text-xl lg:text-3xl font-semibold space-x-3",
						font.className
					)}
				>
					How can I benefit?
				</h2>
				{/* benefit cards */}
				<div className="my-16">
					<div className="flex items-center justify-center gap-16 flex-wrap">
						{BENEFITS.map((benefit) => (
							<BenefitCard key={benefit.label} benefit={benefit} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
