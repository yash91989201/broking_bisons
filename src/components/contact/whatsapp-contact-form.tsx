import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// SCHEMAS
import { WhatsappContactSchema } from "@/lib/schemas";
// TYPES
import { WhatsappContactSchemaType } from "@/lib/types";
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

export default function WhatsappContactForm({
	courseName,
}: {
	courseName?: string;
}) {
	const whatsappContactForm = useForm<WhatsappContactSchemaType>({
		defaultValues: {
			message:
				courseName !== undefined
					? `I am interested in purchasing the ${courseName} course that you offer. Please provide me with the necessary details and steps to complete the purchase. Thank you.`
					: "",
		},
		resolver: zodResolver(WhatsappContactSchema),
	});
	const { control } = whatsappContactForm;

	return (
		<Form {...whatsappContactForm}>
			<form className="grid gap-4">
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
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter a valid number" />
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
