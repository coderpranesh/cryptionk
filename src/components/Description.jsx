
// const Description = () => {
//   return (
//       <>
//           <div
//               style={{
//                   display: "flex", // Enables Flexbox
//                   flexDirection: "column", // Stacks items vertically
//                   alignItems: "center", // Centers items horizontally
//                   justifyContent: "center", // Centers items vertically
//                   width: "946px",
//                   height: "272px",
//                   margin: "auto", // Centers the container horizontally on the page


//                   borderRadius: "8px", // Rounded corners
//                   // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
//                   padding: "20px", // Inner spacing
//                   // backgroundColor: "#62262D",
//                   marginTop: "150px",
//                   marginBottom: "150px",
//                   color: "white",
//               }}
//           >
//               <div
//                   style={{

//                       fontFamily: "Inter, sans-serif",
//                       fontSize: "56px", // Adjust font size for better readability
//                       fontWeight: "540",
//                       lineHeight: "67.77px", // Space between lines
//                       textAlign: "center", // Centers text alignment
//                       marginBottom: "20px", // Space below the last text
//                       marginBottom: "50px",
//                   }}
//               >
//                   <div>Swap your currency seamlessly.</div>
//                   <div>Bring together your wallets.</div>
//                   <div>See your digital collectibles.</div>
//                   <div>Say hello to the new way to crypto.</div>
//               </div>
//               <div>
//                   <button
//                       style={{
//                         background:"linear-gradient(90deg, #8C3035 0%, #D17561 100%)", // Button color
//                           color: "white", // Text color
//                           border: "none",
//                           borderRadius: "50px", // Rounded corners
//                           padding: "14px 32px", // Button padding
//                           fontSize: "22px", // Font size
//                           width: "201px", // Button width
//                           height: "55px", // Button height
//                           fontWeight: "500",
//                           lineHeight: "26.63px", // Space between lines
//                           cursor: "pointer", // Pointer cursor on hover
//                       }}
//                   >
//                       Swap Crypto
//                   </button>
//                   <br></br>
//               </div>
//           </div>
//       </>
//   );
// };

// export default Description;


const Description = () => {
  return (
    <>
      <div
        style={{
          display: "flex", // Enables Flexbox
          flexDirection: "column", // Stacks items vertically
          alignItems: "center", // Centers items horizontally
          justifyContent: "center", // Centers items vertically
          width: "90%", // Use percentage for responsive width
          maxWidth: "946px", // Limit maximum width
          height: "auto", // Allow height to adjust automatically
          margin: "auto", // Centers the container horizontally on the page
          borderRadius: "8px", // Rounded corners
          padding: "20px", // Inner spacing
          marginTop: "50px", // Adjust spacing for smaller screens
          marginBottom: "50px",
          color: "white",
          textAlign: "center", // Center text alignment
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            // fontSize: "56px", // Smaller font for responsiveness
            fontWeight: "540",
            lineHeight: "1.2", // Space between lines
            marginBottom: "30px", // Space below the last text
          }}
          className="text-[1.5rem] lg:text-[4.5rem]"
        >
          <div>Swap your currency seamlessly.</div>
          <div>Bring together your wallets.</div>
          <div>See your digital collectibles.</div>
          <div>Say hello to the new way to crypto.</div>
        </div>
        <div>
          <button
            className="bg-gradient-to-r from-[#8C3035] to-[#D17561] text-white 
    border-none rounded-full 
    px-8 py-3 text-[18px] font-medium cursor-pointer 
    w-[175px] h-[50px] leading-[26.63px] 
    lg:w-[201px] lg:h-[55px] lg:text-[22px] 
  "
          >
            Swap Crypto
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
