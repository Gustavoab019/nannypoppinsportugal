import Image from "next/image";

const testimonials = [
  {
    quote:
      "I had a wonderful experience with Emma at Nanny Poppins. She sourced a full time teacher / nanny for my daughter and we couldn't be happier. Highly recommend!",
    author: "Rachel Krider",
    role: "Mum of a 9 year old girl",
  },
  {
    quote:
      "Emma answered very fast to our request and made 3 proposals for our needs in almost no time. We found the perfect match!",
    author: "Nerea Mendia",
    role: "Mum of a 5 year old girl and 1 year old boy",
  },
  {
    quote:
      "Very reliable nanny agency! The service we got was quick and very thorough! After interviewing just one we found our perfect match!",
    author: "Frida Zetterberg",
    role: "Mum of a 1 year old girl",
  },
  {
    quote:
      "Despite having a long list of requirements Emma didn't give up in finding us the perfect match! Highly recommend.",
    author: "Carina Soccal",
    role: "Mum of a baby girl",
  },
  {
    quote:
      "Even when we call at the last moment, Emma always finds a wonderful babysitter for us. Kind, patient and effective.",
    author: "Laura Fournier",
    role: "Mum of a baby boy",
  },
  {
    quote:
      "Emma works fast and with great energy. She understood all our needs and found an amazing nanny very quickly!",
    author: "Kate",
    role: "Mum of a baby girl",
  },
  {
    quote:
      "I came home to two sleeping children and a clean house! The babysitter was incredibly caring. Amazing service.",
    author: "Laura Belfield",
    role: "Mum of a 3 year old boy and 10 month old boy",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card flex-shrink-0 w-[340px] sm:w-[380px]">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 text-[#FBBF24]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="flex-1 text-gray-700 text-[15px] leading-relaxed mb-5">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#A8D5D1] to-[#7BBFB9] flex items-center justify-center text-white text-sm font-semibold">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">
              {testimonial.author}
            </div>
            <div className="text-xs text-gray-500">
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAF9]/50 to-transparent" />

      <div className="relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 px-6">
          <span className="inline-flex items-center rounded-full border border-[#E8F5F3] bg-[#F4FAF9] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#5BA8A2] mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Happy families,{" "}
            <span className="bg-gradient-to-r from-[#5BA8A2] to-[#7BBFB9] bg-clip-text text-transparent">
              happy children
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what families across Portugal
            and internationally have to say about our services.
          </p>
        </div>

        {/* Infinite Scroll Carousel - CSS Only */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="overflow-hidden py-2">
            <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Trustpilot Official Badge */}
        <div className="mt-14 flex flex-col items-center gap-8 px-6">
          {/* Trustpilot Card */}
          <a
            href="https://www.trustpilot.com/review/nannypoppins.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
          >
            {/* Rating Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                {/* Trustpilot Stars */}
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <div key={star} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    </div>
                  ))}
                  {/* Partial star for 4.1 */}
                  <div className="w-5 h-5 bg-[#DCDCE6] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[10%] bg-[#00B67A]"></div>
                    <svg className="w-3 h-3 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                </div>
                <span className="font-bold text-gray-900">4.1</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <span className="font-medium text-[#00B67A]">Great</span>
                <span>·</span>
                <span>22 reviews</span>
              </div>
            </div>

            {/* Trustpilot Logo */}
            <Image
              src="/trustpilot.png"
              alt="Trustpilot"
              width={100}
              height={40}
              className="h-10 w-auto"
            />

            {/* Arrow */}
            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Additional Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-sm">
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">500+</span> happy families served
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block" />
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">5+</span> years of excellence
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block" />
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">86%</span> 5-star reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
