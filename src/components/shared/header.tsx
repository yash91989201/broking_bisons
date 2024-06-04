"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// UTILS
import { cn } from "@/lib/utils";
// UI
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
	const pathname = usePathname();
	return (
		<header className="lg:px-6 border-b backdrop-filter backdrop-blur-md sticky top-0 bg-opacity-40 z-50 bg-[var(--background)]">
			<div className="max-w-[90vw] flex items-center justify-between mx-auto p-3 px-1.5 lg:py-6 lg:px-0">
				<Link href="/" className="text-xl lg:text-3xl font-semibold">
					Broking Bisons
				</Link>
				<nav className="md:flex items-center gap-3 hidden">
					<Link
						className={cn(
							pathname === "/"
								? "text-primary font-semibold"
								: "hover:text-primary"
						)}
						href="/"
					>
						Home
					</Link>
					<Link
						className={cn(
							pathname === "/courses"
								? "text-primary font-semibold"
								: "hover:text-primary"
						)}
						href="/courses"
					>
						Courses
					</Link>
					<Link
						className={cn(
							pathname === "/contact-us"
								? "text-primary font-semibold"
								: "hover:text-primary"
						)}
						href="/contact-us"
					>
						Contact Us
					</Link>
					<Link
						className={cn(
							pathname === "/about-us"
								? "text-primary font-semibold"
								: "hover:text-primary"
						)}
						href="/about-us"
					>
						About Us
					</Link>
				</nav>
				<Sheet>
					<SheetTrigger className="md:hidden">
						<Menu />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader className="text-left">
							<SheetTitle>Broking Bisons</SheetTitle>
						</SheetHeader>
						<nav className="flex flex-col items-start gap-3 pt-8 text-sm sm:text-base">
							<SheetTrigger asChild>
								<Link
									className={cn(
										pathname === "/"
											? "text-primary font-semibold"
											: "hover:text-primary"
									)}
									href="/"
								>
									Home
								</Link>
							</SheetTrigger>
							<SheetTrigger asChild>
								<Link
									className={cn(
										pathname === "/courses"
											? "text-primary font-semibold"
											: "hover:text-primary"
									)}
									href="/courses"
								>
									Courses
								</Link>
							</SheetTrigger>
							<SheetTrigger asChild>
								<Link
									className={cn(
										pathname === "/contact-us"
											? "text-primary font-semibold"
											: "hover:text-primary"
									)}
									href="/contact-us"
								>
									Contact Us
								</Link>
							</SheetTrigger>
							<SheetTrigger asChild>
								<Link
									className={cn(
										pathname === "/about-us"
											? "text-primary font-semibold"
											: "hover:text-primary"
									)}
									href="/about-us"
								>
									About Us
								</Link>
							</SheetTrigger>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
