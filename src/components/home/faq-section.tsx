import { Krona_One } from "next/font/google";
// UTILS
import { cn } from "@/lib/utils";
// UI
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
// CONSTANTS
import { FAQS } from "@/constants";

const font = Krona_One({ subsets: ["latin"], weight: "400" });

export default function FAQSection() {
	return (
		<section className="lg:px-6 my-8 lg:my-16">
			<div className="flex items-center justify-between flex-col max-w-[90vw] mx-auto">
				{/* section heading */}
				<h2
					className={cn(
						"text-xl lg:text-3xl font-semibold text-primary text-center",
						font.className
					)}
				>
					Still have some questions?
				</h2>
				{/* benefit cards */}
				<Accordion type="single" collapsible className="lg:w-[800px] my-16">
					{FAQS.map((faq, index) => (
						<AccordionItem
							key={faq.question}
							value={faq.question}
							className="w-full"
						>
							<AccordionTrigger className="lg:text-lg text-left">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="leading-6 space-y-3 text-gray-300">
								{faq.answers.map((answer, index) => (
									<p key={index}>{answer}</p>
								))}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
