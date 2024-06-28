import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// SCHEMAS
import { EmailContactSchema } from "@/lib/schemas";
// TYPES
import { EmailContactSchemaType } from "@/lib/types";
// UI
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getMaxListeners } from "events";

export default function EmailContactForm({
	courseName,
}: {
	courseName?: string;
}) {
	const emailContactForm = useForm<EmailContactSchemaType>({
		defaultValues: {
			message:
				courseName !== undefined
					? `I am interested in purchasing the ${courseName} course that you offer. Please provide me with the necessary details and steps to complete the purchase. Thank you.`
					: "",
		},
		resolver: zodResolver(EmailContactSchema),
	});

	const { control, handleSubmit } = emailContactForm;

	const submitAction: SubmitHandler<EmailContactSchemaType> = (formData) => {
		const { name, message } = formData;
		const email = "yashraj6370@gmail.com";
		const contactForm = document.getElementById("email-contact-form");

		// Open the user's email client with a pre-filled email
		const emailMessage = encodeURIComponent(`Hi I am ${name}, ${message}`);
		const emailLink = document.createElement("a");
		emailLink.href = `mailto:${email}?subject=Enquiry for ${courseName} course&body=${emailMessage}`;
		emailLink.target = "_blank";
		emailLink.rel = "noopener noreferrer";

		contactForm?.appendChild(emailLink);
		emailLink.click();
		contactForm?.removeChild(emailLink);
	};

	return (
		<Form {...emailContactForm}>
			<form
				className="grid gap-4 email-contact-form"
				onSubmit={handleSubmit(submitAction)}
			>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<FormField
						control={control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter your name" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter a valid email" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="space-y-2">
					<FormField
						control={control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										placeholder="Enter your message"
										rows={6}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit" className="justify-self-end">
					Submit
				</Button>
			</form>
		</Form>
	);
}
