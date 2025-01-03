
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#2E2024] text-white py-6 px-8 md:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Product */}
          <div>
            <h5 className="font-semibold text-[#BEBEC7] mb-4">Product</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Features
                </a>
              </li>
              <li className="flex">
                <a href="#" className="hover:text-gray-400 flex items-center">
                  <div>Solutions</div>
                  <div className="bg-white text-[#2E2024] w-10 h-6 flex items-center justify-center rounded-full ml-2 text-sm">
                    New
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-[#BEBEC7] mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-semibold text-[#BEBEC7] mb-4">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-semibold text-[#BEBEC7] text-lg mb-4">Social</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  AngelList
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold text-[#BEBEC7] mb-4">Legal</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
