import { z } from "zod";
import { leadSchema } from "@/components/forms/formSchema";

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadStatus = "new" | "in_contact" | "matched" | "closed";
export type LeadSource = "website";
