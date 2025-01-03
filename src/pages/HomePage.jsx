import Description from "../components/Description";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Socialmedia from "../components/Socialmedia";
import Sponsor from "../components/Sponsor";
import Testimonial from "../components/Testimonial";
import Usercentri from "../components/Usercentri";

import bgImg from "./../assets/image 2.png";
import Rectangle6320 from "./../assets/Rectangle 6320.png"

const HomePage = () => {
    return (
        <>
            <div
                style={
                    {
                        // backgroundColor: "#62262D",
                    }
                }
            >
                <img
                    src={bgImg}
                    alt=""
                    className="z-[-999] absolute w-full h-[950%] lg:h-[575%]"

                />
                <img
                    src={Rectangle6320}
                    alt=""
                    className="z-[-999] absolute w-full h-[950%]  lg:h-[575%] opacity-40%"

                />
                <Home />
                <Sponsor />
                <Description />
                <Portfolio />
                <Usercentri />
                <Testimonial />
                <Footer />
                <Socialmedia />
            </div>
        </>
    )
}


export default HomePage;