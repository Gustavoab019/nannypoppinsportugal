import { z } from "zod";

const emptyToUndefined = (value: unknown) => {
  if (typeof value === "string" && value.trim() === "") {
    return undefined;
  }
  return value;
};

export const leadSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Please enter a valid email."),
  whatsapp: z.string().min(6, "WhatsApp number is required."),
  city: z.string().min(2, "City is required."),
  serviceType: z
    .enum(["one_time", "part_time", "full_time"])
    .refine((value) => value.length > 0, "Select a service type."),
  childrenCount: z.coerce
    .number()
    .int("Children count must be a whole number.")
    .min(1, "Minimum 1 child.")
    .max(10, "Maximum 10 children."),
  childrenAges: z.string().min(1, "Please share ages."),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use format YYYY-MM-DD."),
  scheduleNotes: z.preprocess(
    emptyToUndefined,
    z.string().max(500, "Max 500 characters.").optional()
  ),
  budgetRange: z
    .enum(["low", "mid", "high"])
    .refine((value) => value.length > 0, "Select a budget range."),
  languagePreference: z.preprocess(
    emptyToUndefined,
    z.string().max(120, "Max 120 characters.").optional()
  ),
  notes: z.preprocess(
    emptyToUndefined,
    z.string().max(800, "Max 800 characters.").optional()
  ),
});

export type LeadInput = z.infer<typeof leadSchema>;
