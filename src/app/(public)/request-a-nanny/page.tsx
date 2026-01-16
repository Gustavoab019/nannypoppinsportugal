import RequestNannyForm from "@/components/forms/RequestNannyForm";

export default function RequestNannyPage() {
  return (
    <div className="bg-[#D4EEEC] min-h-screen">
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <header className="mb-8 space-y-2">
          <h1 className="text-2xl font-semibold text-[#2D2D2D]">
            Request a nanny
          </h1>
          <p className="text-[#4A4A4A]">
            Tell us about your family, timing, and preferences. It takes about 1-2
            minutes.
          </p>
        </header>
        <div className="rounded-2xl border border-white/50 bg-white p-6 shadow-sm md:p-8">
          <RequestNannyForm />
        </div>
      </div>
    </div>
  );
}
