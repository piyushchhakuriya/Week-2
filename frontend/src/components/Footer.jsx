import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-amber-100 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide text-amber-400">
              HireHub
            </h2>
            <p className="mt-3 text-sm text-amber-200 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Connecting talent with opportunities.  
              Your dream job is just a click away.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Jobs", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-amber-100 hover:underline underline-offset-4 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-amber-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-amber-100 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-amber-100 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">
              Follow Us
            </h3>
            <div className="flex justify-center sm:justify-start space-x-6">
              {[
                { icon: <FaLinkedin size={22} />, href: "#" },
                { icon: <FaGithub size={22} />, href: "#" },
                { icon: <FaTwitter size={22} />, href: "#" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-amber-400 transition transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-10 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-amber-300">
          <p>© {new Date().getFullYear()} HireHub. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Made with ❤️ by HireHub Team</p>
        </div>
      </div>
    </footer>
  );
}
