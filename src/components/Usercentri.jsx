
import React from "react";
import support from "./../assets/support.png";
import sales from "./../assets/sales.png";
import onboard from "./../assets/onboard.png";
import product from "./../assets/product.png";
import quality from "./../assets/quality.png";
import result from "./../assets/result.png";

const Usercentri = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 text-white">
            {/* Header Section */}
            <div className="text-center  mb-12"
            style={{ marginBottom: '100px' }}>
            <h1 className="text-[60px] font-[500] text-center font-plus jakarta sans ">
                    Make every step user-centric
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl mx-auto font-inter"
                style={{ color: '#BEBEC7' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-[6rem]">
                {/* Box 1 */}
                <div className="lg:border-r-1 lg:border-b-1 border-pink-500 text-center lg:p-[2.5rem] ">
                    <img src={support} alt="Support" className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-xl font-bold mb-2">Support</h2>
                    <p style={{ color: '#BEBEC7' , marginTop: '25px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum sunt
                        laudantium itaque.
                    </p>
                </div>

                {/* Box 2 */}
                <div className="lg:border-b-1 lg:border-l-2 lg:border-r-1 border-pink-500  text-center lg:p-[2.5rem]">
                    <img src={sales} alt="Sales" className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-xl font-bold mb-2">Sales</h2>
                    <p style={{ color: '#BEBEC7' , marginTop: '25px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa maiores
                        laborum.
                    </p>
                </div>

                {/* Box 3 */}
                <div className="lg:border-b-1 lg:border-l-2  border-pink-500  text-center lg:p-[2.5rem]">
                    <img src={onboard} alt="Onboarding" className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-xl font-bold mb-2">Onboarding</h2>
                    <p style={{ color: '#BEBEC7' , marginTop: '25px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae magni, vitae
                        ratione.
                    </p>
                </div>

                {/* Box 4 */}
                <div className="lg:border-t-2 lg:border-r-1 border-pink-500  text-center lg:p-[2.5rem]">
                    <img src={product} alt="Product" className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-xl font-bold mb-2">Product</h2>
                    <p style={{ color: '#BEBEC7' , marginTop: '25px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veritatis
                        ullam accusantium.
                    </p>
                </div>

                {/* Box 5 */}
                <div className="lg:border-t-2 lg:border-r-1 lg:border-l-2  border-pink-500  text-center lg:p-[2.5rem]">
                    <img src={quality} alt="Quality" className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-xl font-bold mb-2">Quality</h2>
                    <p style={{ color: '#BEBEC7', marginTop: '25px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed porro velit
                        doloribus.
                    </p>
                </div>

                {/* Box 6 */}
                <div className="lg:border-l-2 lg:border-t-2  border-pink-500  text-center lg:p-[2.5rem]">
                    <img src={result} alt="Result" className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-xl font-bold mb-2">Result</h2>
                    <p style={{ color: '#BEBEC7', marginTop: '25px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis non a
                        itaque.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Usercentri;
