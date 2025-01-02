import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bg-[#2E2024] text-white py-8 px-16 justify-evenly">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Product */}
                    <div>
                        <h5 className="font-bold text-lg mb-4">Product</h5>
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
                                <a
                                    href="#"
                                    className="hover:text-gray-400 flex row"
                                >
                                    <div className="">Solutions</div>
                                    <div className="bg-white text-[#2E2024] w-10 border-r-4 items-center text-center rounded-[2rem] mx-2">
                                        New
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h5 className="font-bold text-lg mb-4">Company</h5>
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
                        <h5 className="font-bold text-lg mb-4">Resources</h5>
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
                        <h5 className="font-bold text-lg mb-4">Social</h5>
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
                        <h5 className="font-bold text-lg mb-4">Legal</h5>
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