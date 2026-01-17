import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Emma Nascimento",
    role: "Founder & CEO",
    image: "/emmanascimento.png",
    imagePosition: "object-center",
    bio: "Driven by a deep passion for nurturing young minds and raising the standard of childcare, Emma founded Nanny Poppins with the vision of connecting families with exceptional, compassionate nannies. With years of hands-on experience working closely with both families and caregivers, she built the agency around trust, communication, and truly personalised service.",
  },
  {
    name: "Lois Underwood",
    role: "Business Manager",
    image: "/loisunderwood.png",
    imagePosition: "object-[center_15%]",
    bio: "Our brilliant Business Manager, Lois, is the driving force that keeps the operational wheels turning smoothly behind the scenes. From overseeing finances and refining systems to supporting strategy and day-to-day operations, she ensures that Nanny Poppins runs like a well-oiled machine.",
  },
  {
    name: "Larissa Mendes",
    role: "Head of Placements",
    image: "/larissamendes.png",
    imagePosition: "object-center",
    bio: "Larissa is the heart of our placements team and plays a vital role in matching the right families with the right nannies. With a calm, thoughtful approach and a genuine understanding of both client and candidate needs, she ensures every placement is handled with care and professionalism.",
  },
  {
    name: "Mila Rodrigues Jorge",
    role: "Placement Coordinator",
    image: "/milarodriguesjorge.png",
    imagePosition: "object-[center_15%]",
    bio: "Mila brings a wealth of knowledge and hands-on experience to her role. She holds a Master's degree in Child Psychotherapy and previously worked as a nanny, giving her a strong professional and practical understanding of children's emotional and developmental needs.",
  },
];

export default function Team() {
  return (
    <section className="relative pb-24 pt-32 lg:pb-32 lg:pt-40 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,213,209,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,213,209,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-[#E8F5F3] bg-[#F4FAF9] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#5BA8A2] mb-4">
            OUR TEAM
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-[#5BA8A2] to-[#7BBFB9] bg-clip-text text-transparent">
              Nanny Poppins
            </span>{" "}
            family
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Our dedicated team is committed to connecting families with exceptional,
            compassionate nannies. We believe in trust, communication, and truly
            personalised service.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group card-premium p-6 text-center hover:border-[#A8D5D1]/50"
            >
              {/* Photo */}
              <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-[#E8F5F3] transition-all duration-300 group-hover:ring-[#A8D5D1]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="128px"
                  loading="lazy"
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${member.imagePosition}`}
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#E8F5F3] to-[#D4EEEC] px-3 py-1 text-xs font-medium text-[#5BA8A2] mb-4">
                {member.role}
              </span>

              {/* Bio */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Join Section */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#F4FAF9] to-[#E8F5F3] p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#A8D5D1]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#5BA8A2] mb-4">
                JOIN OUR FAMILY
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                The Nanny Poppins family
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Nanny Poppins, our nannies are more than just a team — we&apos;re a family.
                We believe in creating a supportive and nurturing environment where every
                nanny feels valued and empowered.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join Nanny Poppins and experience the warmth and solidarity of a true family network.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Want to join our team?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We are always looking for excellent, experienced nannies.
                  Send your CV and references to get started.
                </p>

                <a
                  href="mailto:support@nannypoppins.pt"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#F4FAF9] hover:bg-[#E8F5F3] transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#E8F5F3] to-[#D4EEEC] text-[#5BA8A2]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500">Send your application</div>
                    <div className="text-sm font-medium text-gray-900 group-hover:text-[#5BA8A2] transition-colors">
                      support@nannypoppins.pt
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#5BA8A2] transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <Link
                href="/request-a-nanny"
                className="group btn-primary flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
              >
                <span>Looking for a Nanny?</span>
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
        </div>
      </div>
    </section>
  );
}
