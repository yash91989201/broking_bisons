import { EmailContactSchema, WhatsappContactSchema } from "@/lib/schemas";
import { z } from "zod";

export type CourseType = {
  id: string;
  name: string;
  imgSrc: string;
  isPro: boolean;
  price: number;
  paymentType: string;
  curriculum: string[];
  registrationFees?: number;
}

export type WhatsappContactSchemaType = z.infer<typeof WhatsappContactSchema>
export type EmailContactSchemaType = z.infer<typeof EmailContactSchema>
