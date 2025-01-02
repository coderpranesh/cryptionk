
const Description = () => {
  return (
      <>
          <div
              style={{
                  display: "flex", // Enables Flexbox
                  flexDirection: "column", // Stacks items vertically
                  alignItems: "center", // Centers items horizontally
                  justifyContent: "center", // Centers items vertically
                  width: "946px",
                  height: "272px",
                  margin: "auto", // Centers the container horizontally on the page


                  borderRadius: "8px", // Rounded corners
                  // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
                  padding: "20px", // Inner spacing
                  // backgroundColor: "#62262D",
                  marginTop: "150px",
                  marginBottom: "150px",
                  color: "white",
              }}
          >
              <div
                  style={{
                    
                      fontFamily: "Inter, sans-serif",
                      fontSize: "56px", // Adjust font size for better readability
                      fontWeight: "540",
                      lineHeight: "67.77px", // Space between lines
                      textAlign: "center", // Centers text alignment
                      marginBottom: "20px", // Space below the last text
                      marginBottom: "50px",
                  }}
              >
                  <div>Swap your currency seamlessly.</div>
                  <div>Bring together your wallets.</div>
                  <div>See your digital collectibles.</div>
                  <div>Say hello to the new way to crypto.</div>
              </div>
              <div>
                  <button
                      style={{
                        background:"linear-gradient(90deg, #8C3035 0%, #D17561 100%)", // Button color
                          color: "white", // Text color
                          border: "none",
                          borderRadius: "50px", // Rounded corners
                          padding: "14px 32px", // Button padding
                          fontSize: "22px", // Font size
                          width: "201px", // Button width
                          height: "55px", // Button height
                          fontWeight: "500",
                          lineHeight: "26.63px", // Space between lines
                          cursor: "pointer", // Pointer cursor on hover
                      }}
                  >
                      Swap Crypto
                  </button>
                  <br></br>
              </div>
          </div>
      </>
  );
};

export default Description;
