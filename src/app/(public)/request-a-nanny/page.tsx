import RequestNannyForm from "@/components/forms/RequestNannyForm";
import Link from "next/link";

export const metadata = {
  title: "Request a Nanny | Nanny Poppins",
  description:
    "Fill out our form to find the perfect nanny for your family. We'll get back to you within 48 hours with a personalized quote.",
};

const steps = [
  {
    number: "01",
    title: "Fill out the form",
    description: "Tell us about your family's needs and preferences.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Receive a quote",
    description: "We'll get back to you within 48 hours.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Meet your nanny",
    description: "We'll find the perfect match for your family.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What is your guarantee?",
    answer: "Nanny Poppins is pleased to offer a 30 day placement guarantee. If for any reason your current Nanny is not working out, we will find the replacement free of charge.",
  },
  {
    question: "What benefits should I offer a nanny?",
    answer: "Benefits are not mandated by our agency or by law. Additional benefits to consider are health insurance, use of a family car or transportation allowance, paid holiday, paid sick leave. Live-in nannies are also offered housing, to include a separate bedroom, separate bathroom, and use of the common spaces within the home. To attract the best nannies, you should offer a comprehensive benefits package.",
  },
  {
    question: "How does your agency screen nannies?",
    answer: "Only candidates who have a minimum of three years of childcare experience are allowed to register with our agency. We conduct a thorough interview with all nannies. We verify all childcare references. We conduct a background screening which includes a criminal background check and employment history verification. All nannies must be CPR and First Aid certified or must be willing to become certified prior to commencement of employment.",
  },
  {
    question: "In what areas do you refer nannies?",
    answer: "Although we are based in Cascais, our services cover the whole of mainland Portugal. If you are unsure if we service your local area, please drop us an e-mail. We actually work worldwide, so wherever you are in the world, you can have your very own Nanny Poppins.",
  },
  {
    question: "Can you provide references from families?",
    answer: "Absolutely, we will be glad to provide you with many of our family references. Send us a message via the contact page.",
  },
  {
    question: "What are the costs associated with using your agency?",
    answer: "Nanny Poppins charges an agency fee for our services. All fees are based on the value of the nanny's salary and are one time payment. 20% of the agency fee is due upon requesting our services to cover admin work. This deposit is non refundable. The balance is due once your chosen nanny has accepted an employment offer with your family.",
  },
];

export default function RequestNannyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#A8D5D1]/20 to-transparent blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-[#E8F5F3]/40 to-transparent blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center rounded-full border border-[#E8F5F3] bg-[#F4FAF9] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#5BA8A2] mb-4">
              FIND YOUR NANNY
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              Let us find the{" "}
              <span className="bg-gradient-to-r from-[#5BA8A2] to-[#7BBFB9] bg-clip-text text-transparent">
                perfect nanny
              </span>{" "}
              for your family
            </h1>
            <blockquote className="text-lg text-gray-600 italic leading-relaxed">
              &ldquo;Most of what children need to learn in their early childhood years cannot be taught, it&apos;s discovered through play&rdquo;
            </blockquote>
          </div>

          {/* Steps */}
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-[#A8D5D1] to-[#D4EEEC]" />
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F5F3] to-[#D4EEEC] text-[#5BA8A2]">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1A1A] text-white text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#F8FAF9] to-white">
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <div className="card-premium p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Tell us about your family
              </h2>
              <p className="text-gray-600">
                It takes about 2 minutes. We&apos;ll get back to you within 48 hours.
              </p>
            </div>
            <RequestNannyForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,213,209,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,213,209,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-[#E8F5F3] bg-[#F4FAF9] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#5BA8A2] mb-4">
              FAQ
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group card-premium p-0 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[#5BA8A2] transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-[#F8FAF9]">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1A1A1A] p-8 lg:p-12 text-center">
            <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#5BA8A2]/30 to-transparent rounded-bl-[100px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#7BBFB9]/20 to-transparent rounded-tr-[80px]" />

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Have more questions?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                We&apos;re here to help. Reach out to us directly and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:emma@nannypoppins.pt"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100"
                >
                  <svg className="w-5 h-5 text-[#5BA8A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>emma@nannypoppins.pt</span>
                </a>
                <a
                  href="https://wa.me/351916592174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10"
                >
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
