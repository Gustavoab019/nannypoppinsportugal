import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-[#F8FAF9] overflow-hidden">
      {/* Background Elements */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#A8D5D1]/20 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-[#E8F5F3]/40 to-transparent blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#E8F5F3] bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#5BA8A2] mb-4">
              ABOUT NANNY POPPINS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              The leading international{" "}
              <span className="bg-gradient-to-r from-[#5BA8A2] to-[#7BBFB9] bg-clip-text text-transparent">
                childcare agency
              </span>{" "}
              in Cascais
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Welcome to Nanny Poppins, the leading international childcare agency in
                Cascais, Portugal. We specialize in connecting international families
                with exceptional childcare and household services.
              </p>
              <p>
                Our dedicated team provides top-tier nannies, babysitters, tutors,
                maternity nannies, housekeepers, and more, ensuring your children and
                home receive the best care and attention.
              </p>
              <p>
                Whether you are based locally or internationally, we are here to meet
                your family&apos;s unique needs. Trust us to deliver unparalleled solutions
                that prioritize safety, professionalism, and your family&apos;s well-being.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { label: "Background Verified", icon: "shield" },
                { label: "English Support", icon: "globe" },
                { label: "Personalized Matching", icon: "heart" },
                { label: "Ongoing Support", icon: "support" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#E8F5F3] to-[#D4EEEC] text-[#5BA8A2]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="relative">
            <div className="card-premium p-8 lg:p-10 bg-gradient-to-br from-[#1A1A1A] to-[#111827] border-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#5BA8A2]/20 to-transparent rounded-bl-[100px]" />

              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Ready to find your perfect nanny?
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Let us take the stress out of finding the right childcare solution
                  for your family. Fill out our quick form and we&apos;ll get back to you
                  within 24 hours.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/request-a-nanny"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100"
                  >
                    <span>Find a Nanny</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="https://wa.me/351916592174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <a
                    href="mailto:emma@nannypoppins.pt"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">emma@nannypoppins.pt</span>
                  </a>
                  <a
                    href="tel:+351916592174"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">+351 916 592 174</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
