import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
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
					<form className="grid gap-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="Enter your email" />
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="Enter your message"
								rows={6}
							/>
						</div>
						<Button type="submit" className="justify-self-end">
							Submit
						</Button>
					</form>
				</TabsContent>
				<TabsContent value="whatsapp" className="space-y-4">
					<form className="grid gap-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="phone">Phone</Label>
								<Input id="phone" type="tel" placeholder="Enter your phone" />
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="Enter your message"
								rows={6}
							/>
						</div>
						<Button type="submit" className="justify-self-end">
							Submit
						</Button>
					</form>
				</TabsContent>
			</Tabs>
		</div>
	);
}
