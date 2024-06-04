import ReasonCard from "@/components/home/reason-card";
import { REASONS } from "@/constants";

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
						{REASONS.map((reason, index) => (
							<ReasonCard key={index} reason={reason} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
