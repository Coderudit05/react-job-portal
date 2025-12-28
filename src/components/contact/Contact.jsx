import Navbar from "../homepage/hero/Navbar";
import Footer from "../homepage/footer/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <Navbar />

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              You Will Grow, You Will Succeed. We Promise That
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
              lactus tincidunt tincidunt ultrices. Diam convallis morbi
              pellentesque adipiscing
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Call for inquiry */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FaPhoneAlt className="text-teal-500 text-xl" />
                  <h3 className="text-lg font-semibold text-black">
                    Call for inquiry
                  </h3>
                </div>
                <p className="text-gray-700 font-medium">+257 388-6895</p>
              </div>

              {/* Send us email */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="text-teal-500 text-xl" />
                  <h3 className="text-lg font-semibold text-black">
                    Send us email
                  </h3>
                </div>
                <p className="text-gray-700 font-medium">
                  kramulous@sbcglobal.net
                </p>
              </div>

              {/* Opening hours */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FaClock className="text-teal-500 text-xl" />
                  <h3 className="text-lg font-semibold text-black">
                    Opening hours
                  </h3>
                </div>
                <p className="text-gray-700 font-medium">
                  Mon - Fri: 10AM - 10PM
                </p>
              </div>

              {/* Office */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FaMapMarkerAlt className="text-teal-500 text-xl" />
                  <h3 className="text-lg font-semibold text-black">Office</h3>
                </div>
                <p className="text-gray-700 font-medium">
                  19 North Road Piscataway, NY 08854
                </p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-2">Contact Info</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Nibh dis faucibus proin lacus tristique
            </p>

            <form className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-teal-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-teal-500 transition"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your E-mail address"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-teal-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-teal-500 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
