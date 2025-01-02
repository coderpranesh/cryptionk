import logo from "./../assets/logo.svg";
import icon3 from "./../assets/newsletter.png";
import icon4 from "./../assets/star.png";
import layer6 from "./../assets/layer-6.png";

const Home = () => {
    return (
        <>
            <div className="flex row justify-between px-[2.5rem] sm:mx-4 py-[2.5rem]">
                <div className="h-[34px] w-[270px]">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="h-[48px] w-[7.5rem]">
                    <div
                        style={{
                            background:
                                "linear-gradient(90deg, #8C3035 0%, #D17561 100%)",
                            color: "white",
                            borderRadius: "2rem",
                            width: "max-content",
                        }}
                        className="flex row justify-between px-5 rounded-xl align-middle items-center"
                    >
                        <img
                            src={icon3}
                            alt=""
                            srcset=""
                            className="h-10 w-10"
                        />

                        <button>Newsletter</button>
                    </div>
                </div>
            </div>
            <div className="flex row justify-between mx-10 px-10 mb-2 py-[2rem]">
                <div className="items-center">
                    {/* Header Section */}
                    <div
                        style={{
                            fontFamily: "Inter",
                            fontStyle: "semi-bold",
                            fontSize: "56px",
                            fontWeight: 600,
                            lineHeight: "67.77px",
                            textAlign: "left",
                            textUnderlinePosition: "from-font",
                            textDecorationSkipInk: "none",
                            width: "591px",
                            top: "228px",
                            // height: "204px",
                            marginTop: "20px",
                            marginLeft: "100px",
                            color: "#ffff",
                        }}
                    >
                        A whole world of crypto, in one simple account
                    </div>

                    {/* Paragraph Section */}
                    <div
                        style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontWeight: 400,
                            lineHeight: "30.33px",
                            textAlign: "left",
                            textUnderlinePosition: "from-font",
                            textDecorationSkipInk: "none",
                            width: "516px",
                            height: "90px",
                            marginTop: "10px",
                            marginLeft: "100px",
                            color: "#bebec7",
                        }}
                    >
                        <p>
                            Now it’s easy to do more with crypto. Buy with a
                            card, sell in a snap, and see your wallets in one
                            place. It's all there in your MoonPay account.
                        </p>
                    </div>
                    <br></br>

                    {/* Conclusion Section */}
                    <div className="flex flex-row ml-[90px] align-middle items-center gap-2">
                        <div className="">
                            <img
                                src={icon4}
                                alt=""
                                srcset=""
                                className="h-10 w-10"
                            />
                        </div>
                        <div className="text-white ">TrustScore 4.2</div>
                    </div>
                </div>

                <div>
                    <div className=" items-center">
                        <div className="bg-[#1c1b1b] text-white rounded-[2rem] h-[25rem] w-[25rem] flex flex-col gap-0 items-center pt-5">
                            <div className="">Exchange Rates</div>
                            <div className="mx-auto w-[20rem] bg-[#2B3342] p-5 rounded-xl flex flex-row justify-between">
                                <div className="flex flex-col gap-2">
                                    <div className="">ETH</div>
                                    <div className="">XYZ Chain</div>
                                </div>
                                <div className="">0.00</div>
                            </div>
                            <div className="mx-auto w-[4.5rem] bg-[#2B3342] py-5 px-[auto] text-center rounded-[2rem] my-[-1.5rem] z-10 border-[#252B36] border-[5px]">
                                11
                            </div>
                            <div className="mx-auto w-[20rem] bg-[#2B3342] p-5 rounded-xl flex flex-row justify-between">
                                <div className="flex flex-col gap-2">
                                    <div className="">BTC</div>
                                    <div className="">XYZ Chain</div>
                                </div>
                                <div className="">0.00</div>
                            </div>

                            <div
                                className="mx-auto mt-10 p-5 w-[20rem] text-center rounded-xl"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #94383A 0%, #C86C5B 100%)",
                                }}
                            >
                                <div className="">Connect Wallet</div>
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[25rem] right-[28rem] z-[-10]">
                <img src={layer6} alt="" className="h-16 w-16" />
            </div>
        </>
    );
};

export default Home;