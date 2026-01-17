"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { leadSchema, type LeadInput } from "@/components/forms/formSchema";

type FormErrors = Partial<Record<keyof LeadInput, string>>;

const initialValues: LeadInput = {
  fullName: "",
  email: "",
  whatsapp: "",
  city: "",
  serviceType: "full_time",
  childrenCount: 1,
  childrenAges: "",
  startDate: "",
  scheduleNotes: "",
  budgetRange: "mid",
  languagePreference: "",
  notes: "",
};

const serviceTypes = [
  { value: "one_time", label: "One-time / Babysitter", description: "Single event or occasional care" },
  { value: "part_time", label: "Part-time Nanny", description: "Regular schedule, fewer hours" },
  { value: "full_time", label: "Full-time Nanny", description: "40+ hours per week" },
];

const budgetRanges = [
  { value: "low", label: "Budget-friendly", description: "€8-12/hour" },
  { value: "mid", label: "Mid-range", description: "€12-18/hour" },
  { value: "high", label: "Premium", description: "€18+/hour" },
];

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
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#7BBFB9] focus:outline-none focus:ring-2 focus:ring-[#A8D5D1]/20 transition-all duration-200";

  const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Section: Contact Info */}
      <div>
        <h3 className="text-sm font-semibold text-[#5BA8A2] uppercase tracking-wide mb-4">
          Contact Information
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor="fullName">
              Full name *
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
              <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className={labelClasses} htmlFor="email">
              Email *
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
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label className={labelClasses} htmlFor="whatsapp">
              WhatsApp *
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              value={values.whatsapp}
              onChange={handleChange}
              className={inputClasses}
              placeholder="+351 900 000 000"
            />
            {errors.whatsapp && (
              <p className="mt-1 text-xs text-red-500">{errors.whatsapp}</p>
            )}
          </div>
          <div>
            <label className={labelClasses} htmlFor="city">
              City / Location *
            </label>
            <input
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Cascais"
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-500">{errors.city}</p>
            )}
          </div>
        </div>
      </div>

      {/* Section: Service Type */}
      <div>
        <h3 className="text-sm font-semibold text-[#5BA8A2] uppercase tracking-wide mb-4">
          Type of Service
        </h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {serviceTypes.map((type) => (
            <label
              key={type.value}
              className={`relative flex cursor-pointer flex-col rounded-xl border-2 p-4 transition-all duration-200 ${
                values.serviceType === type.value
                  ? "border-[#5BA8A2] bg-[#F4FAF9]"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="serviceType"
                value={type.value}
                checked={values.serviceType === type.value}
                onChange={handleChange}
                className="sr-only"
              />
              <span className="text-sm font-semibold text-gray-900">
                {type.label}
              </span>
              <span className="mt-1 text-xs text-gray-500">
                {type.description}
              </span>
              {values.serviceType === type.value && (
                <div className="absolute top-3 right-3">
                  <svg className="w-5 h-5 text-[#5BA8A2]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Section: Children */}
      <div>
        <h3 className="text-sm font-semibold text-[#5BA8A2] uppercase tracking-wide mb-4">
          About Your Children
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelClasses} htmlFor="childrenCount">
              Number of children *
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
              <p className="mt-1 text-xs text-red-500">{errors.childrenCount}</p>
            )}
          </div>
          <div>
            <label className={labelClasses} htmlFor="childrenAges">
              Children&apos;s ages *
            </label>
            <input
              id="childrenAges"
              name="childrenAges"
              value={values.childrenAges}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g. 2, 5, 8"
            />
            {errors.childrenAges && (
              <p className="mt-1 text-xs text-red-500">{errors.childrenAges}</p>
            )}
          </div>
          <div>
            <label className={labelClasses} htmlFor="startDate">
              Preferred start date
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
              <p className="mt-1 text-xs text-red-500">{errors.startDate}</p>
            )}
          </div>
        </div>
      </div>

      {/* Section: Schedule */}
      <div>
        <h3 className="text-sm font-semibold text-[#5BA8A2] uppercase tracking-wide mb-4">
          Schedule & Preferences
        </h3>
        <div className="space-y-4">
          <div>
            <label className={labelClasses} htmlFor="scheduleNotes">
              Schedule details
            </label>
            <textarea
              id="scheduleNotes"
              name="scheduleNotes"
              value={values.scheduleNotes}
              onChange={handleChange}
              rows={3}
              className={inputClasses}
              placeholder="e.g. Monday to Friday, 8am to 6pm, flexible on weekends..."
            />
            {errors.scheduleNotes && (
              <p className="mt-1 text-xs text-red-500">{errors.scheduleNotes}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClasses} htmlFor="languagePreference">
                Language preference
              </label>
              <input
                id="languagePreference"
                name="languagePreference"
                value={values.languagePreference}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g. English, Portuguese"
              />
              {errors.languagePreference && (
                <p className="mt-1 text-xs text-red-500">{errors.languagePreference}</p>
              )}
            </div>
            <div>
              <label className={labelClasses}>Budget range</label>
              <select
                name="budgetRange"
                value={values.budgetRange}
                onChange={handleChange}
                className={inputClasses}
              >
                {budgetRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label} ({range.description})
                  </option>
                ))}
              </select>
              {errors.budgetRange && (
                <p className="mt-1 text-xs text-red-500">{errors.budgetRange}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section: Additional Notes */}
      <div>
        <h3 className="text-sm font-semibold text-[#5BA8A2] uppercase tracking-wide mb-4">
          Anything Else?
        </h3>
        <textarea
          id="notes"
          name="notes"
          value={values.notes}
          onChange={handleChange}
          rows={4}
          className={inputClasses}
          placeholder="Special requirements, allergies, pets, specific skills needed..."
        />
        {errors.notes && (
          <p className="mt-1 text-xs text-red-500">{errors.notes}</p>
        )}
      </div>

      {/* Messages */}
      {submitError && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-center gap-2">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {submitError}
        </div>
      )}

      {isSuccess && (
        <div className="rounded-xl border border-[#7BBFB9] bg-[#F4FAF9] px-4 py-3 text-sm text-[#5BA8A2] flex items-center gap-2">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Request received! We&apos;ll contact you within 48 hours.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group btn-primary w-full flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Request</span>
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
