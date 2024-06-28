"use client";
import { useSearchParams } from "next/navigation";
// UI
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// CUSTOM COMPONENTS
import EmailContactForm from "@/components/contact/email-contact-form";
import WhatsappContactForm from "@/components/contact/whatsapp-contact-form";
// CONSTANTS
import { COURSES } from "@/constants";

export default function ContactUsPage() {
	const searchParams = useSearchParams();
	const courseId = searchParams.get("course_id") ?? "";

	const course = COURSES.find(({ id }) => id === courseId);

	return (
		<div className="w-full max-w-3xl mx-auto space-y-8 py-12 md:py-16 lg:py-20 px-3 sm:px-0">
			<div className="space-y-4">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
					Get in touch
				</h1>
				<p className="text-gray-500 dark:text-gray-400 max-w-[650px]">
					Fill out the form below to send us a message. We&apos;ll get back to
					you as soon as possible.
				</p>
			</div>
			<Tabs defaultValue="email" className="space-y-6">
				<TabsList className="flex border-b border-gray-200 dark:border-gray-800 w-fit mx-auto h-12 px-3">
					<TabsTrigger value="email" className="py-2 px-4 font-medium">
						Email
					</TabsTrigger>
					<TabsTrigger value="whatsapp" className="py-2 px-4 font-medium">
						WhatsApp
					</TabsTrigger>
				</TabsList>
				<TabsContent value="email" className="space-y-4">
					<EmailContactForm courseName={course?.name} />
				</TabsContent>
				<TabsContent value="whatsapp" className="space-y-4">
					<WhatsappContactForm courseName={course?.name} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
