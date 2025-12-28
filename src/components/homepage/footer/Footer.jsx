import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Job Portal Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded">
                <IoBriefcaseOutline className="text-black text-xl" />
              </div>
              <span className="text-white font-semibold text-lg">Job</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quis enim pellentesque viverra tellus eget malesuada facilisis.
              Congue nibh vivamus aliquet nunc mauris d...
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/candidates"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  For Candidates
                </Link>
              </li>
              <li>
                <Link
                  to="/employers"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  For Employers
                </Link>
              </li>
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Job Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/telecomunications"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Telecomunications
                </Link>
              </li>
              <li>
                <Link
                  to="/category/hotels-tourism"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Hotels & Tourism
                </Link>
              </li>
              <li>
                <Link
                  to="/category/construction"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/category/education"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/category/financial-services"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Financial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded text-gray-300 placeholder-gray-500 outline-none focus:border-teal-500 transition"
              />
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded transition">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© Copyright Job Portal, 2021. Designed by Figma Guru</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
