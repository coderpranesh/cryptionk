
import React from "react";
import Maskgroup from "./../assets/Mask group.png";
import Maskgroup1 from "./../assets/Mask group (1).png";
import Maskgroup2 from "./../assets/Mask group (2).png";

const Portfolio = () => {
  return (
    <>
      <div
        style={{
          width: "90%", 
          marginTop: "100px",
          maxWidth: "1228px", 
          padding: "20px",
          margin: "auto",
          color: "White",
          marginLeft: "125px",
        }}
      >
        {/* Centered Title and Paragraph */}
        <div style={{ textAlign: "center", marginBottom: "38px"}}>
          <h1 style={{ fontSize: "60px" , font: "Plus Jakarta Sans", marginBottom: "62.7px"}}>
            Automated portfolio tracking
          </h1>
          <p
            style={{
                font: "Inter",
                fontSize: "18px",
                width: "924px",
                height: "60px",
                marginLeft: "125px",
                // textAlign: "center",
                color: "#BEBEC7",
            }}
          >
            Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.
          </p>
        </div>

        {/* Steps in Boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "98px",
          }}
        >
          {/* Step 1 */}
          <div
            style={{
              border: "1px solid pink",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                fontSize: "1.5rem",
                top: "10px",
                left: "10px",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              01
            </div>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={Maskgroup}
                alt="Step 1"
                style={{ width: "100%", maxWidth: "84px", marginBottom: "40px",marginTop: "50px" }} 
              />
              <h2
                style={{
                    font: "plus Jakarta Sans",
                    fontWeight: "600",
                    lineHeight: "34.48px",
                    fontSize: "33px",
                    marginBottom: "20px",
                }}
              >
                Connect wallet & exchange
              </h2>
              <p style={{font: "Inter", fontSize: "15px", fontWeight: "400", lineHeight: "25.27px"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, numquam quia praesentium aliquid odio illum tempora
                libero quaerat autem aspernatur! Magnam.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            style={{
              border: "1px solid pink",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                fontSize: "1.5rem",
                top: "10px",
                left: "10px",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              02
            </div>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={Maskgroup1}
                alt="Step 2"
                style={{ width: "100%", maxWidth: "84px", marginBottom: "40px",marginTop: "50px"}}
              />
              <h2
                style={{
                    font: "plus Jakarta Sans",
                    fontWeight: "600",
                    lineHeight: "34.48px",
                    fontSize: "33px",
                    marginBottom: "20px",
                }}
              >
                Connect wallet & exchange
              </h2>
              <p style={{font: "Inter", fontSize: "15px", fontWeight: "400", lineHeight: "25.27px"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, numquam quia praesentium aliquid odio illum tempora
                libero quaerat autem aspernatur! Magnam.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            style={{
              border: "1px solid pink",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                fontSize: "1.5rem",
                top: "10px",
                left: "10px",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              03
            </div>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={Maskgroup2}
                alt="Step 3"
                style={{ width: "100%",maxWidth: "84px", marginBottom: "40px",marginTop: "50px" }} 
              />
              <h2
                style={{
                    font: "plus Jakarta Sans",
                    fontWeight: "600",
                    lineHeight: "34.48px",
                    fontSize: "33px",
                    marginBottom: "20px",
                }}
              >
                Connect wallet & exchange
              </h2>
              <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, numquam quia praesentium aliquid odio illum tempora
                libero quaerat autem aspernatur! Magnam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
