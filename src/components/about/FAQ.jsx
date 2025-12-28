import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqData } from "./questions";

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
        </p>
      </div>

      {/* FAQ List with Scroll */}
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-gray-50 rounded-lg overflow-hidden transition-all"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleQuestion(faq.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="text-teal-500 font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-black">
                  {faq.question}
                </h3>
              </div>
              <div className="text-teal-500 text-xl">
                {openId === faq.id ? <FaMinus /> : <FaPlus />}
              </div>
            </button>

            {/* Answer Content */}
            {openId === faq.id && (
              <div className="px-6 pb-4 pt-2">
                <p className="text-gray-600 leading-relaxed pl-10">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
