import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Needs",
      description:
        "Fill out our simple request form with your family's requirements, schedule preferences, and any specific needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "We Find Candidates",
      description:
        "Our team carefully selects pre-vetted candidates that match your criteria. We handle background checks and reference verification.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Interview & Choose",
      description:
        "Meet your shortlisted candidates through interviews we help coordinate. Choose the perfect fit for your family.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "We stay with you throughout the placement, offering support and ensuring everything runs smoothly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#F8FAF9] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-[#A8D5D1]/20 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#E8F5F3]/40 to-transparent blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-[#E8F5F3] bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#5BA8A2] mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Relax and let us{" "}
            <span className="bg-gradient-to-r from-[#5BA8A2] to-[#7BBFB9] bg-clip-text text-transparent">
              do the work
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Skip the hassle of calling numerous candidates, scheduling interviews,
            checking references, and conducting background checks. We handle everything.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-[#A8D5D1] to-[#D4EEEC]" />
              )}

              <div className="relative flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F5F3] to-[#D4EEEC] text-[#5BA8A2]">
                      {step.icon}
                    </div>
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A1A] text-white text-xs font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/request-a-nanny"
            className="group btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
          >
            <span>Get Started Today</span>
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
