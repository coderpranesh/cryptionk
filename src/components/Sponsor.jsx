// import List from "./../assets/List.png";
// const Sponsor = () => {
//     return (
//         <>
//             <div
//                 className="flex items-center justify-center"
//                 style={{
//                     width: "auto",
//                     height: "132px",
//                     backgroundColor: "#2E2024",
//                     padding: "42px 108.47px 42.68px 108px",
//                     gap: "0px",
//                 }}
//             >
//                 <img src={List} alt="List" className="w-auto h-auto" />
//             </div>
//         </>
//     );
// };

// export default Sponsor;


import List from "./../assets/List.png";

const Sponsor = () => {
    return (
        <div
            className="flex items-center justify-center bg-[#2E2024] py-10 px-5 sm:px-16"
        >
            <img 
                src={List} 
                alt="List" 
                className="w-[90%] sm:w-auto h-auto max-w-[auto]" 
            />
        </div>
    );
};

export default Sponsor;
