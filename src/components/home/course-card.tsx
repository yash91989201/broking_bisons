"use client";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
// UTILS
import { cn, formatPrice } from "@/lib/utils";
// TYPES
import { CourseType } from "@/lib/types";
// UI
import { buttonVariants } from "@/components/ui/button";
// ICONS
import { CircleCheckBig } from "lucide-react";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";

export default function CourseCard({ course }: { course: CourseType }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div
      key={course.name}
      className="flex flex-col h-fit gap-6 w-80 md:w-96 items-center bg-gray-900 p-6 rounded-xl xl:hover:scale-105 xl:hover:-mt-6 transition-all xl:hover:duration-150 duration-700 hover:scale-110"
      data-aos={isMobile ? "fade-right" : "fade-up"}
    >
      <h4
        className={cn(
          course.isPro ? "text-primary" : "text-amber-400",
          "text-base lg:text-xl font-semibold text-center w-full",
        )}
      >
        {course.name}
      </h4>
      <div className="relative aspect-video w-full">
        <Image src={course.imgSrc} alt="course" fill />
      </div>
      <p>What will I learn ?</p>
      <div className="flex flex-col gap-3 ">
        {course.curriculum.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CircleCheckBig
              className={cn(
                course.isPro ? "text-primary" : "text-amber-400",
                "size-4 shrink-0 ",
              )}
            />
            <p className="text-gray-300 lg:text-base text-xs">{item}</p>
          </div>
        ))}
      </div>
      {course.registrationFees && (
        <p className="text-xs lg:text-base">
          <sup>**</sup>
          <span className="underline">
            registration fees&nbsp;
            {formatPrice(course.registrationFees, {
              notation: "standard",
            })}
          </span>
        </p>
      )}
      <Link
        href={`/contact-us?course_id=${course.id}`}
        className={buttonVariants({
          variant: "default",
          className: "dark:text-white w-full lg:text-lg lg:h-12 rounded-full",
        })}
      >
        Buy Now !!
        {/* Buy @&nbsp; */}
        {/* {formatPrice(course.price, { */}
        {/* 	notation: "standard", */}
        {/* })} */}
        {/* &nbsp; */}
        {/* {course.paymentType === "monthly" ? "/mo" : "only"} */}
      </Link>
    </div>
  );
}
