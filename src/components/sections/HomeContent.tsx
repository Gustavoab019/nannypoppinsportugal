import Link from "next/link";

const services = [
  {
    title: "Live-in nanny",
    description:
      "A great fit when you want full-time support in the home. We align on personality, privacy, and house rules for a smooth match.",
  },
  {
    title: "Babysitter",
    description:
      "Your go-to for date nights or last-minute coverage. Request once or keep a favorite sitter on call.",
  },
  {
    title: "Petsitter",
    description:
      "Trusted petsitting and dog walking so your pets stay cared for while you focus on family.",
  },
  {
    title: "Live-out nanny",
    description:
      "Reliable daily care with a punctual, experienced nanny who fits your routine and commute needs.",
  },
  {
    title: "Pregnancy & postpartum support",
    description:
      "Professional labor support and postpartum doulas to guide, reassure, and help in the early days.",
  },
  {
    title: "Temporary nanny",
    description:
      "Short-term coverage for projects, travel, or summer support. Flexible and fast to onboard.",
  },
  {
    title: "Private educator",
    description:
      "Qualified teachers and tutors with tailored educational styles to match your goals.",
  },
  {
    title: "Housekeeper",
    description:
      "Keep a tidy, organized home with experienced housekeeping support.",
  },
];

const processSteps = [
  {
    title: "We learn about you",
    description:
      "We cover schedule, responsibilities, childcare philosophies, and the qualities you want in your nanny.",
  },
  {
    title: "We find the right candidates",
    description:
      "We personally match you with the most suitable nannies and send profiles for your review.",
  },
  {
    title: "We schedule interviews",
    description:
      "We coordinate interviews at your home and gather feedback from both sides.",
  },
  {
    title: "We guide the hiring process",
    description:
      "We walk you through offers, responsibilities, and the final steps to hire with confidence.",
  },
  {
    title: "We provide ongoing support",
    description:
      "We stay available for questions, backup care, and continuous support.",
  },
  {
    title: "We appreciate your feedback",
    description:
      "We listen, improve, and evolve our service based on your experience.",
  },
];

const testimonials = [
  {
    quote:
      "I had a wonderful experience with Emma at Nanny Poppins. She sourced a full time teacher / nanny for my daughter and we couldn’t be happier.",
    name: "Rachel Krider",
    role: "Mum of a 9 year old girl",
  },
  {
    quote:
      "Emma answered very fast to our request and made 3 proposal for our needs in almost no time. We found the perfect match.",
    name: "Nerea Mendia",
    role: "Mum of a 5 year old girl and 1 year old boy",
  },
  {
    quote:
      "Very reliable nanny agency! The service was quick and thorough. We found our perfect match after interviewing just one candidate.",
    name: "Frida Zetterberg",
    role: "Mum of a 1 year old girl",
  },
  {
    quote:
      "We found a wonderful nanny through Nanny Poppins and would recommend their services.",
    name: "Carina Soccal",
    role: "Mum of a baby girl",
  },
  {
    quote:
      "Even at the last moment, Emma always finds a wonderful babysitter. The nannies are kind, patient, and effective.",
    name: "Laura Fournier",
    role: "Mum of a baby boy",
  },
  {
    quote:
      "Emma works fast and with great energy. She understood our needs and found an amazing nanny very quickly.",
    name: "Kate",
    role: "Mum of a baby girl",
  },
  {
    quote:
      "Highly recommend for reliable, friendly babysitters. The babysitter was incredibly caring and managed dinner and bedtime.",
    name: "Laura Belfield",
    role: "Mum of a 3 year old boy and 10 month old boy",
  },
];

const rates = [
  "Live-in nanny from 1700€ pcm",
  "Live-out full time nanny from 1700€ pcm",
  "Part time nanny from 10€/hour",
  "Babysitter from 12€/hour (minimum 4 hour service)",
  "Housekeeper from 10€/hour",
  "Private education on consultation",
  "Pregnancy & postpartum support on consultation",
  "Petsitter on consultation",
];

export default function HomeContent() {
  return (
    <div className="bg-[#F8FAFC]">
      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-10 rounded-3xl border border-[#E2E8F0] bg-white p-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-[#0F172A]">
            <h2 className="text-3xl font-semibold tracking-tight">
              Let Nanny Poppins find your perfect nanny!
            </h2>
            <p className="text-base text-[#334155]">
              Welcome to the leading international childcare agency in Cascais,
              Portugal. We connect international families with exceptional
              childcare and household services including nannies, babysitters,
              tutors, maternity nannies, and housekeepers. Whether you are based
              locally or abroad, we deliver trusted solutions focused on safety,
              professionalism, and your family’s well-being.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-a-nanny"
                className="rounded-full bg-[#0B1220] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0B1220]/90"
              >
                Find a nanny
              </Link>
              <Link
                href="/request-a-nanny"
                className="rounded-full border border-[#0B1220] px-6 py-3 text-center text-sm font-semibold text-[#0B1220] transition hover:bg-[#0B1220]/5"
              >
                Meet the team
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-[#334155]">
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Relax and let us do the work
            </h3>
            <p className="mt-3 text-sm">
              Skip the hassle of calling candidates, scheduling interviews, and
              checking references. Share your requirements and we will present
              carefully selected nannies tailored to your family.
            </p>
            <div className="mt-6 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm">
              <span className="font-semibold text-[#0F172A]">
                ⭐⭐⭐⭐⭐ 4.0 on Trustpilot
              </span>
              <div>Trusted by international families</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A]">
              Why choose us?
            </h2>
            <p className="text-base text-[#334155]">
              We believe every family deserves an amazing nanny. We work quickly
              and efficiently to source the right candidates the first time,
              balancing qualifications and personality for a lasting match.
            </p>
            <div className="rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-sm text-[#334155]">
              “It takes a big heart to shape little minds.”
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "5 Star Service",
              "Available 7 days a week",
              "No waitlist",
              "Schedule Ahead",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-5 text-sm font-semibold text-[#0F172A]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A]">
              Our process
            </h2>
            <p className="text-base text-[#334155]">
              A simple, transparent process designed to save you time and keep
              your family in control.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6"
              >
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#334155]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A]">
            What do you need?
          </h2>
          <p className="text-base text-[#334155]">
            A nanny for your required profile — our team covers a wide range of
            care and household services.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0F172A]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-[#334155]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A]">
              Rates and placement fees
            </h2>
            <p className="text-base text-[#334155]">
              Professional nanny rates and a clear overview of placement fees.
              Agency fees are based on salary value and are a one-time payment.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {rates.map((rate) => (
              <div
                key={rate}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 text-sm text-[#0F172A]"
              >
                {rate}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A]">
            Happy clients
          </h2>
          <p className="text-base text-[#334155]">
            Here is what our clients have to say about us.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-[#334155]">“{testimonial.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-[#0F172A]">
                {testimonial.name}
              </div>
              <div className="text-xs text-[#334155]">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A]">
                About us
              </h2>
              <p className="text-base text-[#334155]">
                Nanny Poppins, based in Cascais, is more than a childcare agency —
                we are your partner in nurturing and educating your children. We
                recruit top talent from the UK, Europe, and beyond, representing
                more than 25 nationalities to serve international families.
              </p>
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-sm text-[#334155]">
                <h3 className="text-sm font-semibold text-[#0F172A]">
                  Our mission
                </h3>
                <p className="mt-2">
                  We provide exceptional childcare tailored to the diverse needs
                  of international families, building a nurturing, inclusive, and
                  culturally rich environment where children can thrive.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0F172A]">
                Meet the founder
              </h3>
              <p className="text-sm text-[#334155]">
                Emma Nascimento, originally from Cardiff, moved through Thailand
                and Brazil as an educator before settling in Cascais. Her
                experience teaching children from many nationalities inspired the
                creation of Nanny Poppins in 2019.
              </p>
              <p className="text-sm text-[#334155]">
                Our nannies are at the heart of everything we do. We invest in
                training, ongoing support, and a community where caregivers feel
                empowered to deliver outstanding care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[#E2E8F0] bg-[#0B1220] px-8 py-12 text-center text-white">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#BFE6E2]">
            QUICK, EASY &amp; WORRY-FREE
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Find your perfect nanny today!
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Children want the same things we want: to laugh, to be challenged, to
            be entertained and delighted.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-a-nanny"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:bg-white/90"
            >
              Book a call now!
            </Link>
            <Link
              href="/request-a-nanny"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
