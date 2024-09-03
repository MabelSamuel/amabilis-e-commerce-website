import { z } from "zod";

export const contactValidations = z.object({
    name: z.string()
    .min(6, { message: "Must be at least 6 characters long" }),
    email: z.string()
    .email("Please enter a valid email address"),
    subject: z.string()
    .min(6, { message: "Must be at least 6 characters long" }),
    message: z.string()
    .min(6, {message: "Must be at least 6 characters long"})
})