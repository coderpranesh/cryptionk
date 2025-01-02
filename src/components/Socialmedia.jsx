// import React from "react";
// import x from "./../assets/twitter.png";
// import linkedin from "./../assets/linkedin.png";
// import fb from "./../assets/fb.png";
// import github from "./../assets/github.png";
// import s4 from "./../assets/s4.png";
// import s5 from "./../assets/s5.png";

// const Socialmedia = () => {
//     return (
//         <>
//             <div
//                 style={{
//                     background:
//                         "linear-gradient(90deg, #8C3035 0%, #D17561 100%)",
//                     color: "white",
//                 }}
//                 className="flex row justify-between px-10 h-[120px] "
//             >
//                 <div className="my-auto">
//                     <p className="">© 2020 Untitled UI. All rights reserved.</p>
//                 </div>

//                 <div className="flex row right-0 justify-end w-[50%] my-auto gap-4">
//                     <div className="text-white">
//                         <img src={x} alt="List" className="w-8 h-8 " />
//                     </div>

//                     <div className="">
//                         <img src={linkedin} alt="List" className="w-8 h-8" />
//                     </div>

//                     <div className="">
//                         <img src={fb} alt="List" className="w-8 h-8" />
//                     </div>
//                     <div className="">
//                         <img src={github} alt="List" className="w-8 h-8" />
//                     </div>
//                     <div className="">
//                         <img src={s4} alt="List" className="w-8 h-8" />
//                     </div>
//                     <div className="">
//                         <img src={s5} alt="List" className="w-8 h-8" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Socialmedia;


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
            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
                <img src={x} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
                <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <img src={fb} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
                <img src={github} alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8" />
                <img src={s4} alt="Social 4" className="w-6 h-6 sm:w-8 sm:h-8" />
                <img src={s5} alt="Social 5" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
        </div>
    );
};

export default Socialmedia;
