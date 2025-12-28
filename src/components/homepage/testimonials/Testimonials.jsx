import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { testimonialsData } from "./TestimonialsData";

export default function Testimonials() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
          Testimonials from Our Customers
        </h2>
        <p className="text-gray-600 text-sm sm:text-base px-4">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum id...
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {testimonialsData.slice(0, 6).map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition relative"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-lg" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-black mb-3">
              {testimonial.title}
            </h3>

            {/* Feedback */}
            <p className="text-gray-600 text-sm mb-6 italic leading-relaxed">
              {testimonial.feedback}
            </p>

            {/* Quote Icon */}
            <div className="absolute bottom-6 right-6">
              <FaQuoteRight className="text-teal-500 text-4xl opacity-20" />
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button - Only show if more than 6 testimonials */}
      {testimonialsData.length > 6 && (
        <div className="text-center">
          <Link
            to="/testimonials"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded transition"
          >
            View All Testimonials
          </Link>
        </div>
      )}
    </div>
  );
}
