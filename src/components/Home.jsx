
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
    const [ethAmount, setEthAmount] = useState("");
    const [eosAmount, setEosAmount] = useState("");
    const [selectedUpperCrypto, setSelectedUpperCrypto] = useState("ETH");
    const [selectedLowerCrypto, setSelectedLowerCrypto] = useState("EOS");
    const [selectedChain, setSelectedChain] = useState("XYZ Chain");

    const cryptoOptions = [
        { value: "ETH", label: "ETH", icon: ETH },
        { value: "EOS", label: "EOS", icon: eoc },
    ];

    const chainOptions = [
        { value: "XYZ Chain", label: "XYZ Chain" },
        { value: "ABC Chain", label: "ABC Chain" },
    ];

    const handleSwap = () => {
        setIsSwapped(!isSwapped);
        // Swap the selected cryptocurrencies
        const temp = selectedUpperCrypto;
        setSelectedUpperCrypto(selectedLowerCrypto);
        setSelectedLowerCrypto(temp);
        // Reset the amounts
        setEthAmount("");
        setEosAmount("");
    };

    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 lg:px-[2.5rem] py-8">
                {/* Logo */}
                <div className="h-50 w-60  lg:items-start lg:mx-9 ">
                   <button>
                    <img src={logo} alt="Logo" />
                    </button> 
                </div>

                {/* Newsletter Button */}
                <div className="mt-4 sm:mt-0 sm:mr-6">
                    <div className="flex items-center justify-between px-4 py-2 rounded-full bg-gradient-to-r from-[#8C3035] to-[#D17561] text-white">
                        <img src={icon3} alt="Newsletter" className="h-8 w-10" />
                        <button className="ml-2">Newsletter</button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 sm:px-10 lg:mx-10 py-10 space-y-10 lg:space-y-0">
                {/* Left Content */}
                <div className="flex flex-col items-start text-left space-y-8">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold leading-tight text-white max-w-lg">
                        A whole world of crypto, in one simple account
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-lg leading-relaxed">
                        Now it’s easy to do more with crypto. Buy with a card, sell in a snap, and see your wallets in one place. It's all there in your MoonPay account.
                    </p>

                    {/* TrustScore */}
                    <div className="flex items-center gap-2">
                        <img src={icon4} alt="TrustScore" className="h-14 w-14" />
                        <span className="text-white weight-400 font-inter" >TrustScore 4.2
                            <p className="font-inter text-[#BEBEC7] textsize-14px">15k+ Reviews</p>
                        </span>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative w-full sm:w-auto lg:w-[36rem] bg-[#1c1b1b] text-white rounded-2xl p-5 flex flex-col items-center space-y-6"
                style={{ marginBottom: '158px' }}>
                    {/* Title */}
                    <h2 className="text-xl font-semibold">Swap</h2>

                    {/* Swap Sections */}
                    <div className="flex flex-col space-y-4 w-full">
                        {/* ETH Section */}
                        <div className="w-full bg-[#2B3342] p-4 rounded-xl flex items-center justify-between">
                            <div className="flex flex-col space-y-2">
                                <div className="bg-[#252B36] rounded-lg px-3 py-1.5 flex items-center space-x-2">
                                    <img src={selectedUpperCrypto === "ETH" ? ETH : eoc} alt={selectedUpperCrypto} className="w-6 h-6" />
                                    <select
                                        className="bg-[#252B36] text-white rounded-lg px-3 py-1.5"
                                        value={selectedUpperCrypto}
                                        onChange={(e) => setSelectedUpperCrypto(e.target.value)}
                                    >
                                        {cryptoOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
                                    {chainOptions.map((chain) => (
                                        <option key={chain.value} value={chain.value}>
                                            {chain.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input
                                type="number"
                                placeholder="0.00"
                                value={ethAmount}
                                onChange={(e) => setEthAmount(e.target.value)}
                                className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
                            />
                        </div>

                        {/* Divider Button */}
                        <div
                            onClick={handleSwap}
                            className="absolute left-1/2 transform -translate-x-1/2 top-[36%] z-10"
                        >
                            <div className="w-16 h-16 bg-[#2B3342] flex items-center justify-center rounded-full border-4 border-[#252B36] cursor-pointer hover:bg-[#1f2933] transition">
                                <button className="text-[#717A8C] text-2xl">⇅</button>
                            </div>
                        </div>

                        {/* EOS Section */}
                        <div className="w-full bg-[#2B3342] p-4 rounded-xl flex items-center justify-between">
                            <div className="flex flex-col space-y-2">
                                <div className="bg-[#252B36] rounded-lg px-3 py-1.5 flex items-center space-x-2">
                                    <img src={selectedLowerCrypto === "EOS" ? eoc : ETH} alt={selectedLowerCrypto} className="w-6 h-6" />
                                    <select
                                        className="bg-[#252B36] text-white rounded-lg px-3 py-1.5"
                                        value={selectedLowerCrypto}
                                        onChange={(e) => setSelectedLowerCrypto(e.target.value)}
                                    >
                                        {cryptoOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <select className="bg-[#2B3342] text-[#A2A8B4] rounded-lg px-3 py-1.5">
                                    {chainOptions.map((chain) => (
                                        <option key={chain.value} value={chain.value}>
                                            {chain.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input
                                type="number"
                                placeholder="0.00"
                                value={eosAmount}
                                onChange={(e) => setEosAmount(e.target.value)}
                                className="bg-transparent text-right text-white text-lg w-20 focus:outline-none"
                            />
                        </div>
                    </div>

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
            <div className="absolute top-[29rem] right-[36rem] z-[-15]">
                <img src={layer6} alt="Background Decoration" className="h-41 w-40" />
            </div>
        </>
    );
};

export default Home;
