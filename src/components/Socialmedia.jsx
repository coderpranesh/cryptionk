import React from "react";
import x from "./../assets/twitter.png";
import linkedin from "./../assets/linkedin.png";
import fb from "./../assets/fb.png";
import github from "./../assets/github.png";
import s4 from "./../assets/s4.png";
import s5 from "./../assets/s5.png";
import insta from "./../assets/insta.png";
import twitter from "./../assets/x.png";
import telegram from "./../assets/telegram.png";

const Socialmedia = () => {
    return (
        <>
            <div
                style={{
                    background:
                        "linear-gradient(90deg, #8C3035 0%, #D17561 100%)",
                    color: "white",
                }}
                className="flex row justify-between px-10 h-[120px] "
            >
                <div className="my-auto">
                    <p className="">© 2020 Untitled UI. All rights reserved.</p>
                </div>

                <div className="flex row right-0 justify-end w-[50%] my-auto gap-4">
                    <div className="text-white">
                        <img src={x} alt="List" className="w-8 h-8 " />
                    </div>

                    <div className="">
                        <img src={linkedin} alt="List" className="w-8 h-8" />
                    </div>

                    <div className="">
                        <img src={fb} alt="List" className="w-8 h-8" />
                    </div>
                    <div className="">
                        <img src={github} alt="List" className="w-8 h-8" />
                    </div>
                    <div className="">
                        <img src={s4} alt="List" className="w-8 h-8" />
                    </div>
                    <div className="">
                        <img src={s5} alt="List" className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Socialmedia;