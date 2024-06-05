"use client";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
// CONSTANTS
import { BENEFITS } from "@/constants";

export default function BenefitCard({
	benefit,
}: {
	benefit: (typeof BENEFITS)[0];
}) {
	useEffect(() => {
		// You can also pass an optional settings object
		// below listed default settings
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "aos-animate", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		});
	}, []);

	return (
		<div
			className="flex flex-col gap-6 w-64 lg:w-72 items-center transition-all"
			data-aos="zoom-in"
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
	);
}
