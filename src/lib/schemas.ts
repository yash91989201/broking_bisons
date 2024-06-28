import * as z from "zod"

export const WhatsappContactSchema = z.object({
  name: z.string().min(6, { message: "Full name is required" }),
  phone: z.number(),
  message: z.string()
})

export const EmailContactSchema = z.object({
  name: z.string().min(6, { message: "Full name is required" }),
  email: z.string().email(),
  message: z.string()
})