
import React from "react";
import Img_1 from "./../assets/img_1.png";
import Img_2 from "./../assets/img_2.png";
import Img_3 from "./../assets/img_3.png";

const Testimonial = () => {
    return (
        <div
            className="flex flex-col items-center justify-center px-4 py-16 text-white"
        >
            {/* Testimonial Section */}
            <div className="text-center mb-12">
                <h1 className="text-[60px] font-[500] mb-6 font-plus jakarta sans">Testimonial</h1>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto"
                style={{ color: '#BEBEC7' }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eum fugit 
                    perferendis perspiciatis reprehenderit expedita laboriosam reiciendis 
                    consectetur facilis. Reiciendis, debitis.
                </p>
            </div>

            {/* Images Section */}
            <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                    <img
                        src={Img_1}
                        alt="Testimonial 1"
                        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[379px] h-auto rounded-xl object-cover"
                    />
                </div>
                <div className="text-center">
                    <img
                        src={Img_2}
                        alt="Testimonial 2"
                        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[379px] h-auto rounded-xl object-cover"
                    />
                </div>
                <div className="text-center">
                    <img
                        src={Img_3}
                        alt="Testimonial 3"
                        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[379px] h-auto rounded-xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
