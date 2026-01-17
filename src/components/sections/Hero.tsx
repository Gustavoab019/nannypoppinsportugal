import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F8FAF9] via-white to-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orb */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#A8D5D1]/40 via-[#D4EEEC]/50 to-transparent blur-[100px] animate-pulse-soft" />
        {/* Secondary orb */}
        <div className="pointer-events-none absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-[#7BBFB9]/20 via-[#A8D5D1]/30 to-transparent blur-[120px]" />
        {/* Accent orb */}
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-[#E8F5F3]/60 to-transparent blur-[80px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,213,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,213,209,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl gap-12 px-6 lg:px-8 pt-32 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        {/* Left Column - Copy */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Trust Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 rounded-full border border-[#E8F5F3] bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-gray-700">
              CASCAIS, PORTUGAL
            </span>
            <span className="h-4 w-px bg-gray-200" />
            <span className="text-xs font-medium text-gray-500">
              Leading International Childcare Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up delay-100 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-[3.5rem] leading-[1.1]">
            Let Nanny Poppins find your{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-[#5BA8A2] to-[#7BBFB9] bg-clip-text text-transparent">
                perfect nanny
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#A8D5D1]/30 -rotate-1 rounded-sm" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 max-w-xl text-lg text-gray-600 leading-relaxed lg:text-xl">
            Skip the hassle. We connect international families with exceptional,
            vetted childcare professionals. Background-checked, reference-verified,
            and tailored to your unique needs.
          </p>

          {/* Value Props */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5BA8A2]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Rigorous Background Checks</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5BA8A2]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Personalized Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5BA8A2]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Ongoing Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-400 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/request-a-nanny"
              className="group btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white sm:w-auto"
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
              href="/#about"
              className="btn-secondary inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-gray-900 sm:w-auto"
            >
              <span>Meet the Team</span>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="animate-fade-in-up delay-500 pt-4 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm">
            <div className="flex -space-x-2">
              {["RK", "NM", "FZ", "CS", "LF"].map((initials, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-[#A8D5D1] to-[#7BBFB9] shadow-sm flex items-center justify-center text-white text-xs font-semibold"
                  title={["Rachel Krider", "Nerea Mendia", "Frida Zetterberg", "Carina Soccal", "Laura Fournier"][i]}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-gray-900">
                Trusted by 500+ families
              </div>
              <div className="text-gray-500">across Portugal and internationally</div>
            </div>
          </div>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {/* Main Feature Card */}
          <div className="card-premium p-8 animate-fade-in-up delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F5F3] to-[#D4EEEC]">
                <svg className="w-6 h-6 text-[#5BA8A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Premium Childcare Services
                </h2>
                <p className="text-sm text-gray-500">For international families</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "shield", text: "Background-checked & reference-verified" },
                { icon: "globe", text: "English-speaking professional support" },
                { icon: "calendar", text: "Babysitters, nannies, tutors & housekeepers" },
                { icon: "heart", text: "Personalized matching to your family's needs" },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F5F3] text-[#5BA8A2] transition-colors group-hover:bg-[#5BA8A2] group-hover:text-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card-premium p-5 text-center animate-fade-in-up delay-300">
              <div className="text-3xl font-bold text-gray-900">86%</div>
              <div className="text-sm text-gray-500 mt-1">5-Star Reviews</div>
            </div>
            <div className="card-premium p-5 text-center animate-fade-in-up delay-400">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-500 mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Trustpilot Card */}
          <a
            href="https://www.trustpilot.com/review/nannypoppins.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium px-6 py-5 animate-fade-in-up delay-500 block hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Trustpilot Stars */}
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <div key={star} className="w-6 h-6 bg-[#00B67A] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    </div>
                  ))}
                  <div className="w-6 h-6 bg-[#DCDCE6] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[10%] bg-[#00B67A]"></div>
                    <svg className="w-3.5 h-3.5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-1.5">
                    <span className="text-[#00B67A]">Great</span>
                    <span className="text-gray-400">·</span>
                    <span>4.1</span>
                  </div>
                  <div className="text-xs text-gray-500">22 reviews on Trustpilot</div>
                </div>
              </div>
              {/* Trustpilot Logo */}
              <Image
                src="/trustpilot.png"
                alt="Trustpilot"
                width={80}
                height={32}
                loading="lazy"
                className="h-8 w-auto"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
