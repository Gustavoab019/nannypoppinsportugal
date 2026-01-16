"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "I had a wonderful experience with Emma at Nanny Poppins. She sourced a full time teacher / nanny for my daughter and we couldn't be happier. She also helped us to find a Portuguese tutor which has been an equally positive experience. Highly recommend!",
    author: "Rachel Krider",
    role: "Mum of a 9 year old girl",
    rating: 5,
  },
  {
    quote:
      "I absolutely recommend Nanny Poppins Portugal. We had a great experience with them. Emma answered very fast to our request and made 3 proposals for our needs in almost no time. We interviewed one of the candidates and she has been just the perfect match for us. Thank you!",
    author: "Nerea Mendia",
    role: "Mum of a 5 year old girl and 1 year old boy",
    rating: 5,
  },
  {
    quote:
      "Very reliable nanny agency! The service we got was quick and very thorough! They really made an effort to find the perfect candidates - after choosing and interviewing just one we found our perfect match! Thank you Nanny Poppins!",
    author: "Frida Zetterberg",
    role: "Mum of a 1 year old girl",
    rating: 5,
  },
  {
    quote:
      "We found a wonderful nanny through Nanny Poppins and would recommend their services. Despite having a long list of requirements Emma didn't give up in finding us the perfect match!",
    author: "Carina Soccal",
    role: "Mum of a baby girl",
    rating: 5,
  },
  {
    quote:
      "Nanny Poppins is the perfect solution if you need professional, reliable and skillful nannies for your beloved babies. Even when we call at the last moment, Emma always finds a wonderful babysitter for us. And all the nannies who worked for us were kind, patient and effective.",
    author: "Laura Fournier",
    role: "Mum of a baby boy",
    rating: 5,
  },
  {
    quote:
      "Emma works fast, effective and with a great effort and energy. Me and my husband both like to cooperate with her. She understood correctly all our needs and requirements and found an amazing nanny very quickly!",
    author: "Kate",
    role: "Mum of a baby girl",
    rating: 5,
  },
  {
    quote:
      "Highly recommend Nanny Poppins for reliable, friendly babysitters. The babysitter provided was incredibly caring with a lovely energy and love for children. She did art and creative activities with my kids, managed dinner and bedtime. I came home to two sleeping children and a clean house! Amazing.",
    author: "Laura Belfield",
    role: "Mum of a 3 year old boy and 10 month old boy",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAF9]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-lg text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-lg text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="card-premium p-8 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#FBBF24]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1 text-gray-700 leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#A8D5D1] to-[#7BBFB9] flex items-center justify-center text-white font-semibold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "w-8 bg-[#5BA8A2]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="flex items-center gap-3">
            <div className="flex text-[#00B67A]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div>
              <span className="font-semibold text-gray-900">4.9/5</span>
              <span className="text-gray-500 ml-1">on Trustpilot</span>
            </div>
          </div>
          <div className="h-8 w-px bg-gray-200 hidden sm:block" />
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">500+</span> happy families served
          </div>
          <div className="h-8 w-px bg-gray-200 hidden sm:block" />
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">5+</span> years of excellence
          </div>
        </div>
      </div>
    </section>
  );
}
