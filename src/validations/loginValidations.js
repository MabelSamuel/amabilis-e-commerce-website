import { z } from "zod";

export const loginValidations = z.object({
  username: z.string()
    .min(6, { message: "Must be at least 6 characters long" }),
  password: z.string()
    .min(8, {message: "Password must be at least 8 characters long"})
    .max(20, {message: "Password must not exceed 20 characters"})
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Password must contain at least one lower letter, one uppercase letter, one number, and one special character"
    ),
  rememberMe: z.boolean(),
});
