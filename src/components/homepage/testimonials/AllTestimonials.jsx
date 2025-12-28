import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { testimonialsData } from "./TestimonialsData";

export default function AllTestimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold text-black mb-3">
            All Customer Testimonials
          </h1>
          <p className="text-gray-600">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id...
          </p>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
        >
          <FiArrowLeft />
          Go Back
        </Link>
      </div>

      {/* Testimonials Grid - All testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial) => (
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
    </div>
  );
}
