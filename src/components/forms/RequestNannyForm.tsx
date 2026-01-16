"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { leadSchema, type LeadInput } from "@/components/forms/formSchema";

type FormErrors = Partial<Record<keyof LeadInput, string>>;

const initialValues: LeadInput = {
  fullName: "",
  email: "",
  whatsapp: "",
  city: "",
  serviceType: "one_time",
  childrenCount: 1,
  childrenAges: "",
  startDate: "",
  scheduleNotes: "",
  budgetRange: "mid",
  languagePreference: "",
  notes: "",
};

export default function RequestNannyForm() {
  const [values, setValues] = useState<LeadInput>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => {
      if (name === "childrenCount") {
        const parsed = Number(value);
        return {
          ...prev,
          childrenCount: Number.isNaN(parsed) ? prev.childrenCount : parsed,
        };
      }
      const key = name as Exclude<keyof LeadInput, "childrenCount">;
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSuccess(false);
    setSubmitError(null);

    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const nextErrors: FormErrors = {};
      for (const key of Object.keys(fieldErrors) as (keyof LeadInput)[]) {
        const message = fieldErrors[key]?.[0];
        if (message) {
          nextErrors[key] = message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        setSubmitError("Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
      setValues(initialValues);
    } catch (error) {
      setSubmitError("Unable to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-[#D4EEEC] bg-white px-3 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#4A4A4A]/50 focus:border-[#7BBFB9] focus:outline-none focus:ring-1 focus:ring-[#A8D5D1]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="fullName">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Jane Doe"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600">{errors.fullName}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@email.com"
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="whatsapp">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            value={values.whatsapp}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+00 00000-0000"
          />
          {errors.whatsapp && (
            <p className="text-xs text-red-600">{errors.whatsapp}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="city">
            City
          </label>
          <input
            id="city"
            name="city"
            value={values.city}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Lisbon"
          />
          {errors.city && <p className="text-xs text-red-600">{errors.city}</p>}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="serviceType">
            Service type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={values.serviceType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="one_time">One-time care</option>
            <option value="part_time">Part-time</option>
            <option value="full_time">Full-time</option>
          </select>
          {errors.serviceType && (
            <p className="text-xs text-red-600">{errors.serviceType}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="childrenCount">
            Number of children
          </label>
          <input
            id="childrenCount"
            name="childrenCount"
            type="number"
            min={1}
            max={10}
            value={values.childrenCount}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.childrenCount && (
            <p className="text-xs text-red-600">{errors.childrenCount}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="childrenAges">
            Children ages
          </label>
          <input
            id="childrenAges"
            name="childrenAges"
            value={values.childrenAges}
            onChange={handleChange}
            className={inputClasses}
            placeholder="2, 5"
          />
          {errors.childrenAges && (
            <p className="text-xs text-red-600">{errors.childrenAges}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="startDate">
            Start date
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={values.startDate}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.startDate && (
            <p className="text-xs text-red-600">{errors.startDate}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="scheduleNotes">
          Schedule notes
        </label>
        <textarea
          id="scheduleNotes"
          name="scheduleNotes"
          value={values.scheduleNotes}
          onChange={handleChange}
          rows={3}
          className={inputClasses}
          placeholder="Days, hours, flexibility, etc."
        />
        {errors.scheduleNotes && (
          <p className="text-xs text-red-600">{errors.scheduleNotes}</p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="budgetRange">
            Budget range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={values.budgetRange}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
          {errors.budgetRange && (
            <p className="text-xs text-red-600">{errors.budgetRange}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="languagePreference">
            Language preference (optional)
          </label>
          <input
            id="languagePreference"
            name="languagePreference"
            value={values.languagePreference}
            onChange={handleChange}
            className={inputClasses}
            placeholder="English, Portuguese, Spanish"
          />
          {errors.languagePreference && (
            <p className="text-xs text-red-600">{errors.languagePreference}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[#2D2D2D]" htmlFor="notes">
          Additional notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={values.notes}
          onChange={handleChange}
          rows={4}
          className={inputClasses}
          placeholder="Anything else we should know?"
        />
        {errors.notes && <p className="text-xs text-red-600">{errors.notes}</p>}
      </div>

      {submitError && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </p>
      )}

      {isSuccess && (
        <p className="rounded-lg border border-[#7BBFB9] bg-[#D4EEEC] px-4 py-3 text-sm text-[#2D2D2D]">
          Request received. We'll contact you soon.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#2D2D2D] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4A4A4A] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Send request"}
      </button>
    </form>
  );
}
