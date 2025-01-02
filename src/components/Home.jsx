
// import logo from "./../assets/logo.svg";
// import icon3 from "./../assets/newsletter.png";
// import icon4 from "./../assets/star.png";
// import layer6 from "./../assets/layer-6.png";

// const Home = () => {
    
//     return (
//         <>
//             {/* Header Section */}
//             <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 lg:px-[2.5rem] py-8">
//                 {/* Logo */}
//                 <div className="h-50 w-80">
//                     <img src={logo} alt="Logo" />
//                 </div>

//                 {/* Newsletter Button */}
//                 <div className="mt-4 sm:mt-0">
//                     <div
//                         className="flex items-center justify-between px-4 py-2 rounded-full bg-gradient-to-r from-[#8C3035] to-[#D17561] text-white"
//                     >
//                         <img src={icon3} alt="Newsletter" className="h-8 w-10" />
//                         <button className="ml-2">Newsletter</button>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 sm:px-10 lg:mx-10 py-10 space-y-10 lg:space-y-0">
//                 {/* Left Content */}
//                 <div className="flex flex-col items-start text-left space-y-6">
//                     {/* Heading */}
//                     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white max-w-lg">
//                         A whole world of crypto, in one simple account
//                     </h1>

//                     {/* Description */}
//                     <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-lg leading-relaxed">
//                         Now it’s easy to do more with crypto. Buy with a card, sell in a snap, and see your wallets in one place. It's all there in your MoonPay account.
//                     </p>

//                     {/* TrustScore */}
//                     <div className="flex items-center gap-2">
//                         <img src={icon4} alt="TrustScore" className="h-8 w-8" />
//                         <span className="text-white">TrustScore 4.2</span>
//                     </div>
//                 </div>

//                 {/* Right Content */}
//                 {/* Right Content */}
// {/* Right Content */}
// <div className="w-full sm:w-auto lg:w-96 bg-[#1c1b1b] text-white rounded-2xl p-5 flex flex-col items-center space-y-6">
//     {/* Title */}
//     <h2 className="text-xl font-semibold">Swap</h2>

//     {/* ETH Section */}
//     <div className="w-full bg-[#2B3342] p-4 rounded-xl flex items-center justify-between">
//         <div className="flex flex-col space-y-2">
//             <div className="flex items-center space-x-2">
//                 <img
//                     src="eth-icon.png"
//                     alt="ETH"
//                     className="w-6 h-6"
//                 />
//                 <select className="bg-[#252B36] text-white rounded-lg px-3 py-1.5">
//                     <option value="ETH">ETH</option>
//                 </select>
//             </div>
//             <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
//                 <option value="XYZ Chain">XYZ Chain</option>
//             </select>
//         </div>
//         <input
//             type="number"
//             placeholder="0.00"
//             className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
//         />
//     </div>

//     {/* Divider Circle */}
//     <div className="w-12 h-12 bg-[#2B3342] flex items-center justify-center rounded-full border-4 border-[#1c1b1b]">
//         <button className="text-white text-2xl">⇅</button>
//     </div>

//     {/* EOS Section */}
//     <div className="w-full bg-[#2B3342] p-4 rounded-xl flex items-center justify-between">
//         <div className="flex flex-col space-y-2">
//             <div className="flex items-center space-x-2">
//                 <img
//                     src="eos-icon.png"
//                     alt="EOS"
//                     className="w-6 h-6"
//                 />
//                 <select className="bg-[#252B36] text-white rounded-lg px-3 py-1.5">
//                     <option value="EOS">EOS</option>
//                 </select>
//             </div>
//             <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
//                 <option value="XYZ Chain">XYZ Chain</option>
//             </select>
//         </div>
//         <input
//             type="number"
//             placeholder="0.00"
//             className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
//         />
//     </div>

//     {/* Connect Wallet Button */}
//     <button
//         className="w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center space-x-2"
//         style={{
//             background: "linear-gradient(90deg, #94383A 0%, #C86C5B 100%)",
//         }}
//     >
//         <span>Connect Wallet</span>
//         <img
//             src="wallet-icon.png"
//             alt="Wallet"
//             className="w-5 h-5"
//         />
//     </button>
// </div>


//             </div>

//             {/* Background Layer */}
//             <div className="absolute top-[25rem] right-[28rem] lg:top-[20rem] lg:right-[20rem] z-[-10]">
//                 <img src={layer6} alt="Background Decoration" className="h-12 w-12 sm:h-16 sm:w-16" />
//             </div>
//         </>
//     );
// };

// export default Home;


import React, { useState } from "react";
import logo from "./../assets/logo.svg";
import icon3 from "./../assets/newsletter.png";
import icon4 from "./../assets/star.png";
import layer6 from "./../assets/layer-6.png";
import ETH from "./../assets/ETH.png";
import eoc from "./../assets/eoc.png";
import wallet from "./../assets/wallet.png";

const Home = () => {
    // State to handle swapping ETH and EOS sections
    const [isSwapped, setIsSwapped] = useState(false);

    // Function to handle the swap
    const handleSwap = () => {
        setIsSwapped(!isSwapped);
    };

    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 lg:px-[2.5rem] py-8">
                {/* Logo */}
                <div className="h-50 w-80">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Newsletter Button */}
                <div className="mt-4 sm:mt-0">
                    <div
                        className="flex items-center justify-between px-4 py-2 rounded-full bg-gradient-to-r from-[#8C3035] to-[#D17561] text-white"
                    >
                        <img src={icon3} alt="Newsletter" className="h-8 w-10" />
                        <button className="ml-2">Newsletter</button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 sm:px-10 lg:mx-10 py-10 space-y-10 lg:space-y-0">
                {/* Left Content */}
                <div className="flex flex-col items-start text-left space-y-6">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white max-w-lg">
                        A whole world of crypto, in one simple account
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-lg leading-relaxed">
                        Now it’s easy to do more with crypto. Buy with a card, sell in a snap, and see your wallets in one place. It's all there in your MoonPay account.
                    </p>

                    {/* TrustScore */}
                    <div className="flex items-center gap-2">
                        <img src={icon4} alt="TrustScore" className="h-8 w-8" />
                        <span className="text-white">TrustScore 4.2</span>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full sm:w-auto lg:w-96 bg-[#1c1b1b] text-white rounded-2xl p-5 flex flex-col items-center space-y-6">
                    {/* Title */}
                    <h2 className="text-xl font-semibold">Swap</h2>

                    {/* Swap Sections */}
                    {!isSwapped ? (
                        <>
                            {/* ETH Section */}
                            <div className="w-full bg-[#2B3342] p-4 rounded-xl flex items-center justify-between">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <img src={ETH} alt="ETH" className="w-6 h-6" />
                                        <select className="bg-[#252B36] text-white rounded-lg px-3 py-1.5">
                                            <option value="ETH">ETH</option>
                                        </select>
                                    </div>
                                    <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
                                        <option value="XYZ Chain">XYZ Chain</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
                                />
                            </div>

                            {/* Divider Button */}
                            <div
                                onClick={handleSwap}
                                className="w-12 h-12 bg-[#2B3342] flex inset-x-0 top-1/2 transform -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#1c1b1b] cursor-pointer hover:bg-[#1f2933] transition"
                            >
                                <button className="text-white text-2xl ">⇅</button>
                            </div>

                            {/* EOS Section */}
                            <div className="w-full bg-[#2B3342] top-1/2 transform -translate-y-1/2 p-4 rounded-xl flex items-center justify-between">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <img src={eoc} alt="EOS" className="w-6 h-6" />
                                        <select className="bg-[#252B36] text-white rounded-lg px-3 py-1.5">
                                            <option value="EOS">EOS</option>
                                        </select>
                                    </div>
                                    <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
                                        <option value="XYZ Chain">XYZ Chain</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* EOS Section */}
                            <div className="w-full bg-[#2B3342] p-4 rounded-xl flex items-center justify-between">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <img src={eoc}  alt="EOS" className="w-6 h-6" />
                                        <select className="bg-[#252B36] text-white rounded-lg px-3 py-1.5">
                                            <option value="EOS">EOS</option>
                                        </select>
                                    </div>
                                    <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
                                        <option value="XYZ Chain">XYZ Chain</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
                                />
                            </div>

                            {/* Divider Button */}
                            <div
                                onClick={handleSwap}
                                className="w-12 h-12 bg-[#2B3342] flex inset-x-0 top-1/2 transform -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#1c1b1b] cursor-pointer hover:bg-[#1f2933] transition"
                            >
                                <button className="text-white text-2xl">⇅</button>
                            </div>

                            {/* ETH Section */}
                            <div className="w-full bg-[#2B3342] top-1/2 transform -translate-y-1/2 p-4 rounded-xl flex items-center justify-between">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <img src={ETH} alt="ETH" className="w-6 h-6" />
                                        <select className="bg-[#252B36] text-white rounded-lg px-3 py-1.5">
                                            <option value="ETH">ETH</option>
                                        </select>
                                    </div>
                                    <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
                                        <option value="XYZ Chain">XYZ Chain</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
                                />
                            </div>
                        </>
                    )}

                    {/* Connect Wallet Button */}
                    <button
                        className="w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center space-x-2"
                        style={{
                            background: "linear-gradient(90deg, #94383A 0%, #C86C5B 100%)",
                        }}
                    >
                        <span>Connect Wallet</span>
                        <img src={wallet} alt="Wallet" className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Background Layer */}
            <div className="absolute top-[32rem] right-[25rem] z-[-10]">
                <img src={layer6} alt="" className="h-41 w-40" />
            </div>
            {/* <div className="absolute top-[25rem] right-[50rem] lg:top-[30rem] lg:right-[20rem] z-[-20]">
                <img src={layer6} alt="Background Decoration" className="h-12 w-12 sm:h-16 sm:w-16" />
            </div> */}
        </>
    );
};

export default Home;
