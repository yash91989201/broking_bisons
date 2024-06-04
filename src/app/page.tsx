// CUSTOM COMPONENTS
import HeroSection from "@/components/home/hero-section";
import BenefitsSection from "@/components/home/benefits-section";
import CoursesSection from "@/components/home/courses-section";
import WhyUsSection from "@/components/home/why-us-section";
import FAQSection from "@/components/home/faq-section";
import SecondaryCTASection from "@/components/home/secondary-cta-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<BenefitsSection />
			<CoursesSection />
			<WhyUsSection />
			<FAQSection />
			<SecondaryCTASection />
		</>
	);
}
