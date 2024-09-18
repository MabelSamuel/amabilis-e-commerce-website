import { z } from "zod";

export const billingDetailsValidation = z.object({
  firstName: z.string()
    .min(6, { message: "Must be at least 6 characters long" }),
  lastName: z
    .string()
    .min(6, { message: "Must be at least 6 characters long" }),
  companyName: z.string().optional(),
  country: z.string().min(1, { message: "Please select a country" }),
  address: z.object({
    street: z.string()
    .min(1, { message: "Street name and number is required" }),
    apartment: z.string().optional(),
  }),
  townOrCity: z.string().min(1, { message: "Town is required" }),
  stateOrCounty: z.string().min(1, { message: "State is required" }),
  postcodeOrZip: z.string(),
  phone: z.string(),
  email: z.string().email("Please enter a valid email address"),
  additionalInformation: z.string().optional()
});
