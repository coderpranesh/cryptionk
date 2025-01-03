

import React from "react";
import x from "./../assets/twitter.png";
import linkedin from "./../assets/linkedin.png";
import fb from "./../assets/fb.png";
import github from "./../assets/github.png";
import s4 from "./../assets/s4.png";
import s5 from "./../assets/s5.png";

const Socialmedia = () => {
    return (
        <div
            style={{
                height: "120px",
                background: "linear-gradient(90deg, #8C3035 0%, #D17561 100%)",
                color: "white",
            }}
            className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 py-4"
        >
            {/* Footer Text */}
            <div className="mb-4 sm:mb-0">
                <p className="text-center sm:text-left text-sm md:text-base">
                    © 2020 Untitled UI. All rights reserved.
                </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-end gap-4">
                <a href="#">
                    <img 
                    src={x} 
                    alt="Twitter" 
                    className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                <a
                    href="#"
                    >
                    <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    </a>

                <a href="#">
                    <img 
                    src={fb} 
                    alt="Facebook" 
                    className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a href="#">
                    <img 
                    src={github} 
                    alt="GitHub" 
                    className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a href="#">
                    <img 
                    src={s4} 
                    alt="Social 4" 
                    className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a href="#">
                    <img 
                    src={s5} 
                    alt="Social 5" 
                    className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
            </div>
        </div>
    );
};

export default Socialmedia;
