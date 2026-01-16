import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const LeadSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    whatsapp: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    serviceType: {
      type: String,
      required: true,
      enum: ["one_time", "part_time", "full_time"],
    },
    childrenCount: { type: Number, required: true, min: 1, max: 10 },
    childrenAges: { type: String, required: true, trim: true },
    startDate: { type: String, required: true },
    scheduleNotes: { type: String, trim: true },
    budgetRange: {
      type: String,
      required: true,
      enum: ["low", "mid", "high"],
    },
    languagePreference: { type: String, trim: true },
    notes: { type: String, trim: true },
    status: {
      type: String,
      enum: ["new", "in_contact", "matched", "closed"],
      default: "new",
    },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export type LeadDocument = InferSchemaType<typeof LeadSchema>;

const LeadModel = (models.Lead as Model<LeadDocument>) ||
  model<LeadDocument>("Lead", LeadSchema);

export default LeadModel;
