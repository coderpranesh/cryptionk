import { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "../components/Spinner";
// import "./../styles/newsletter.css"

export default function HomePage() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    import('../styles/home.css');

    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

  }, []);


  return (
    <>
      {isLoading && <Spinner />}
      <div >


        <a href="/swap/" className="btn button floating-button"
          style={{
            position: "fixed",
            top: "20px",
            right: "20vw",
            height: "3rem",
            zIndex: 1000,
            width: "8rem",
            fontSize: "22px",
            display: "flex",
          }}
        >
          <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 118.1" style={{ width: 20, fill: 'white', paddingRight:"2px"}}>
            <title>Swap</title>
          </svg> Swap
        </a>



        <a
          href="/newsletter/"
          className="btn button floating-button"
          style={{
            position: "fixed",
            top: "20px",
            right: "5vw",
            height: "3rem",
            zIndex: 1000,
            width: "12rem",
            paddingLeft: "20px",
            paddingRight: "20px",
            fontSize: "22px",
            display: "flex",
            gap:"13px"
          }}
        >
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 118.1" style={{ width: 20, fill: 'white'}}>
            <title>Newsletters</title>
            <path d="M115.17,33.29a3.8,3.8,0,0,1,2.49-.92,4.19,4.19,0,0,1,2.14.62,5.82,5.82,0,0,1,1.32,1.12,7.37,7.37,0,0,1,1.76,4.44v73.64a5.87,5.87,0,0,1-1.73,4.16h0A5.9,5.9,0,0,1,117,118.1H5.91a5.91,5.91,0,0,1-4.17-1.73h0A5.9,5.9,0,0,1,0,112.19V38.55a7.41,7.41,0,0,1,1.8-4.5A5.52,5.52,0,0,1,3.12,33a4.05,4.05,0,0,1,2.1-.6,3.68,3.68,0,0,1,2,.59l.2.17v-26a7.1,7.1,0,0,1,2.08-5h0a7.1,7.1,0,0,1,5-2.08h93.54a7.08,7.08,0,0,1,5,2.08,2.25,2.25,0,0,1,.21.24,7,7,0,0,1,1.87,4.77v26.2ZM70.85,43a3,3,0,0,1,0-6H83.64a3,3,0,0,1,0,6ZM39,43a3,3,0,0,1,0-6H51.77a3,3,0,0,1,0,6ZM54.2,60a3,3,0,0,1,0-6.05H68.42a3,3,0,0,1,0,6.05ZM27.86,26.07a3,3,0,0,1,0-6.05H42.29a3,3,0,0,1,0,6.05Zm52.48,0a3,3,0,0,1,0-6.05H94.77a3,3,0,0,1,0,6.05Zm-24.11,0a3,3,0,0,1,0-6.05h10a3,3,0,0,1,0,6.05ZM13.71,38.65,48.64,69.86l.15.14L60.84,80.76l48.08-42V7.09a.89.89,0,0,0-.17-.51l-.08-.08a.84.84,0,0,0-.59-.25H14.54A.84.84,0,0,0,14,6.5a.83.83,0,0,0-.24.59V38.65ZM114.56,41.4a3.09,3.09,0,0,1-1,.87L79.85,71.72l37.31,32.7h0V39.12l-2.6,2.28ZM58.92,86.68,46.81,75.86l-41.09,36v.33a.17.17,0,0,0,0,.13h0a.17.17,0,0,0,.13,0H117a.17.17,0,0,0,.13,0h0a.17.17,0,0,0,0-.13V112L75.52,75.5,62.7,86.7h0a2.85,2.85,0,0,1-3.78,0ZM42.52,72,5.72,39.15v65.13L42.52,72Z" />
          </svg> Newsletters
        </a>
        <div className="main-container">
          <div className="cryptionk">
            <div className="bg-texture" />
            <Link href="/">
              <div className="logo" />
            </Link>
            <Link href="/newsletter/" className="btn button static-btn">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 118.1" style={{ width: 20, fill: 'white' }}>
                <title>Newsletters</title>
                <path d="M115.17,33.29a3.8,3.8,0,0,1,2.49-.92,4.19,4.19,0,0,1,2.14.62,5.82,5.82,0,0,1,1.32,1.12,7.37,7.37,0,0,1,1.76,4.44v73.64a5.87,5.87,0,0,1-1.73,4.16h0A5.9,5.9,0,0,1,117,118.1H5.91a5.91,5.91,0,0,1-4.17-1.73h0A5.9,5.9,0,0,1,0,112.19V38.55a7.41,7.41,0,0,1,1.8-4.5A5.52,5.52,0,0,1,3.12,33a4.05,4.05,0,0,1,2.1-.6,3.68,3.68,0,0,1,2,.59l.2.17v-26a7.1,7.1,0,0,1,2.08-5h0a7.1,7.1,0,0,1,5-2.08h93.54a7.08,7.08,0,0,1,5,2.08,2.25,2.25,0,0,1,.21.24,7,7,0,0,1,1.87,4.77v26.2ZM70.85,43a3,3,0,0,1,0-6H83.64a3,3,0,0,1,0,6ZM39,43a3,3,0,0,1,0-6H51.77a3,3,0,0,1,0,6ZM54.2,60a3,3,0,0,1,0-6.05H68.42a3,3,0,0,1,0,6.05ZM27.86,26.07a3,3,0,0,1,0-6.05H42.29a3,3,0,0,1,0,6.05Zm52.48,0a3,3,0,0,1,0-6.05H94.77a3,3,0,0,1,0,6.05Zm-24.11,0a3,3,0,0,1,0-6.05h10a3,3,0,0,1,0,6.05ZM13.71,38.65,48.64,69.86l.15.14L60.84,80.76l48.08-42V7.09a.89.89,0,0,0-.17-.51l-.08-.08a.84.84,0,0,0-.59-.25H14.54A.84.84,0,0,0,14,6.5a.83.83,0,0,0-.24.59V38.65ZM114.56,41.4a3.09,3.09,0,0,1-1,.87L79.85,71.72l37.31,32.7h0V39.12l-2.6,2.28ZM58.92,86.68,46.81,75.86l-41.09,36v.33a.17.17,0,0,0,0,.13h0a.17.17,0,0,0,.13,0H117a.17.17,0,0,0,.13,0h0a.17.17,0,0,0,0-.13V112L75.52,75.5,62.7,86.7h0a2.85,2.85,0,0,1-3.78,0ZM42.52,72,5.72,39.15v65.13L42.52,72Z" />
              </svg> Newsletters
            </Link>
            <div className="ellipse-1" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="elements-1" />
            <div className="elements-2" />
            <div className="elements-3" />
            <div className="component" />
            <div className="row m-0">
              <div className="col-12 col-xl-6 coming-soon-col">
                <div id="coming-soon" className="coming-soon">
                  <div className="frame" />
                  <div className="icon" />
                  <div className="ellipse" />
                  <div className="element" />
                  <div className="icon-1" />
                  <div className="element-2" />
                  <div className="coming-soon-3">
                    <span className="coming-soo">COMING SOON!</span>
                  </div>
                  <div className="icon-4" />
                  <div className="icon-5" />
                </div>
              </div>
              <div className="col-12 col-xl-6 form-col">
                <div className="rectangle">
                  <div className="contact">
                    <div className="rectangle-6">
                      <div className="contact-form">
                        <h2 className="mt-4"><span className="text">Get notified when it’s ready !</span></h2>
                        <form className="mt-4" action="/form" method="POST">
                          <input type="hidden" name="csrfmiddlewaretoken" defaultValue="GRC6o653sBF5PU5b60ZAev23QMLlVBEPQf6gsmrN9Ih9dkcdbUU6ny6ri4h8eqaD" />
                          <div className="input-box pt-4">
                            <input className="input" type="text" name="name" placeholder="Enter Your Name" />
                          </div>
                          <div className="input-box mt-4">
                            <input className="input" type="email" name="email" placeholder="Enter Your Email" />
                          </div>
                          <div className="input-box mt-4">
                            <input className="input" type="text" name="message" placeholder="Message" />
                          </div>
                          <div className="mt-4">
                            <button className="button" type="submit">Notify Me</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="rectangle-10" />
            <span className="all-rights-reserved">All Rights Are Reserved By Cryptionk
            </span>
          </div>
          <div className="frame-11">
            <a href="https://t.me/CRYPTIONK_OFFICIAL">
              <div className="ic-outline-telegram" />
            </a>
            <a href="https://x.com/cryptionk">
              <div className="pajamas-twitter" />
            </a>
            <a href="https://www.instagram.com/cryptionk_official?igsh=MXRuMzB2dnY5YXpobg==">
              <div className="mdi-instagram" />
            </a>
          </div>
        </div>
      </div>

    </>
  )
}




// import { useEffect } from "react";
// import { Link } from "react-router-dom"; // React Router now uses react-router-dom for web apps.

// export default function Home() {
//   useEffect(() => {
//     import("../styles/newsletter.css"); // Use dynamic import for CSS with Vite.
//   }, []);

//   return (
//     <>
//       <div>
//         <a href="/newsletter/" className="btn button floating-button">
//           <svg
//             id="Layer_1"
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 122.88 118.1"
//             style={{ width: 20, fill: "white" }}
//           >
//             <title>Newsletters</title>
//             <path d="M115.17,33.29a3.8,3.8,0,0,1,2.49-.92,4.19,4.19,0,0,1,2.14.62,5.82,5.82,0,0,1,1.32,1.12,7.37,7.37,0,0,1,1.76,4.44v73.64a5.87,5.87,0,0,1-1.73,4.16h0A5.9,5.9,0,0,1,117,118.1H5.91a5.91,5.91,0,0,1-4.17-1.73h0A5.9,5.9,0,0,1,0,112.19V38.55a7.41,7.41,0,0,1,1.8-4.5A5.52,5.52,0,0,1,3.12,33a4.05,4.05,0,0,1,2.1-.6,3.68,3.68,0,0,1,2,.59l.2.17v-26a7.1,7.1,0,0,1,2.08-5h0a7.1,7.1,0,0,1,5-2.08h93.54a7.08,7.08,0,0,1,5,2.08,2.25,2.25,0,0,1,.21.24,7,7,0,0,1,1.87,4.77v26.2ZM70.85,43a3,3,0,0,1,0-6H83.64a3,3,0,0,1,0,6ZM39,43a3,3,0,0,1,0-6H51.77a3,3,0,0,1,0,6ZM54.2,60a3,3,0,0,1,0-6.05H68.42a3,3,0,0,1,0,6.05ZM27.86,26.07a3,3,0,0,1,0-6.05H42.29a3,3,0,0,1,0,6.05Zm52.48,0a3,3,0,0,1,0-6.05H94.77a3,3,0,0,1,0,6.05Zm-24.11,0a3,3,0,0,1,0-6.05h10a3,3,0,0,1,0,6.05ZM13.71,38.65,48.64,69.86l.15.14L60.84,80.76l48.08-42V7.09a.89.89,0,0,0-.17-.51l-.08-.08a.84.84,0,0,0-.59-.25H14.54A.84.84,0,0,0,14,6.5a.83.83,0,0,0-.24.59V38.65ZM114.56,41.4a3.09,3.09,0,0,1-1,.87L79.85,71.72l37.31,32.7h0V39.12l-2.6,2.28ZM58.92,86.68,46.81,75.86l-41.09,36v.33a.17.17,0,0,0,0,.13h0a.17.17,0,0,0,.13,0H117a.17.17,0,0,0,.13,0h0a.17.17,0,0,0,0-.13V112L75.52,75.5,62.7,86.7h0a2.85,2.85,0,0,1-3.78,0ZM42.52,72,5.72,39.15v65.13L42.52,72Z" />
//           </svg>{" "}
//           Newsletters
//         </a>
//         {/* The rest of the JSX remains unchanged */}
//         <div className="main-container">
//     <div className="cryptionk">
//       <div className="bg-texture" />
//       <Link href="/">
//         <div className="logo" />
//       </Link>
//       <Link href="/newsletter/" className="btn button static-btn">
//         <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 118.1" style={{width: 20, fill: 'white'}}>
//           <title>Newsletters</title>
//           <path d="M115.17,33.29a3.8,3.8,0,0,1,2.49-.92,4.19,4.19,0,0,1,2.14.62,5.82,5.82,0,0,1,1.32,1.12,7.37,7.37,0,0,1,1.76,4.44v73.64a5.87,5.87,0,0,1-1.73,4.16h0A5.9,5.9,0,0,1,117,118.1H5.91a5.91,5.91,0,0,1-4.17-1.73h0A5.9,5.9,0,0,1,0,112.19V38.55a7.41,7.41,0,0,1,1.8-4.5A5.52,5.52,0,0,1,3.12,33a4.05,4.05,0,0,1,2.1-.6,3.68,3.68,0,0,1,2,.59l.2.17v-26a7.1,7.1,0,0,1,2.08-5h0a7.1,7.1,0,0,1,5-2.08h93.54a7.08,7.08,0,0,1,5,2.08,2.25,2.25,0,0,1,.21.24,7,7,0,0,1,1.87,4.77v26.2ZM70.85,43a3,3,0,0,1,0-6H83.64a3,3,0,0,1,0,6ZM39,43a3,3,0,0,1,0-6H51.77a3,3,0,0,1,0,6ZM54.2,60a3,3,0,0,1,0-6.05H68.42a3,3,0,0,1,0,6.05ZM27.86,26.07a3,3,0,0,1,0-6.05H42.29a3,3,0,0,1,0,6.05Zm52.48,0a3,3,0,0,1,0-6.05H94.77a3,3,0,0,1,0,6.05Zm-24.11,0a3,3,0,0,1,0-6.05h10a3,3,0,0,1,0,6.05ZM13.71,38.65,48.64,69.86l.15.14L60.84,80.76l48.08-42V7.09a.89.89,0,0,0-.17-.51l-.08-.08a.84.84,0,0,0-.59-.25H14.54A.84.84,0,0,0,14,6.5a.83.83,0,0,0-.24.59V38.65ZM114.56,41.4a3.09,3.09,0,0,1-1,.87L79.85,71.72l37.31,32.7h0V39.12l-2.6,2.28ZM58.92,86.68,46.81,75.86l-41.09,36v.33a.17.17,0,0,0,0,.13h0a.17.17,0,0,0,.13,0H117a.17.17,0,0,0,.13,0h0a.17.17,0,0,0,0-.13V112L75.52,75.5,62.7,86.7h0a2.85,2.85,0,0,1-3.78,0ZM42.52,72,5.72,39.15v65.13L42.52,72Z" />
//         </svg> Newsletters
//       </Link>
//       <div className="ellipse-1" />
//       <div className="ellipse-2" />
//       <div className="ellipse-3" />
//       <div className="ellipse-4" />
//       <div className="elements-1" />
//       <div className="elements-2" />
//       <div className="elements-3" />
//       <div className="component" />
//       <div className="row m-0">
//         <div className="col-12 col-xl-6 coming-soon-col">
//           <div id="coming-soon" className="coming-soon">
//             <div className="frame" />
//             <div className="icon" />
//             <div className="ellipse" />
//             <div className="element" />
//             <div className="icon-1" />
//             <div className="element-2" />
//             <div className="coming-soon-3">
//               <span className="coming-soo">COMING SOON!</span>
//             </div>
//             <div className="icon-4" />
//             <div className="icon-5" />
//           </div>
//         </div>
//         <div className="col-12 col-xl-6 form-col">
//           <div className="rectangle">
//             <div className="contact">
//               <div className="rectangle-6">
//                 <div className="contact-form">
//                   <h2 className="mt-4"><span className="text">Get notified when it’s ready !</span></h2>
//                   <form className="mt-4" action="/form" method="POST">
//                     <input type="hidden" name="csrfmiddlewaretoken" defaultValue="GRC6o653sBF5PU5b60ZAev23QMLlVBEPQf6gsmrN9Ih9dkcdbUU6ny6ri4h8eqaD" />
//                     <div className="input-box pt-4">
//                       <input className="input" type="text" name="name" placeholder="Enter Your Name" />
//                     </div>
//                     <div className="input-box mt-4">
//                       <input className="input" type="email" name="email" placeholder="Enter Your Email" />
//                     </div>
//                     <div className="input-box mt-4">
//                       <input className="input" type="text" name="message" placeholder="Message" />
//                     </div>
//                     <div className="mt-4">
//                       <button className="button" type="submit">Notify Me</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="footer">
//       <div className="rectangle-10" />
//       <span className="all-rights-reserved">All Rights Are Reserved By Cryptionk
//       </span>
//     </div>
//     <div className="frame-11">
//       <a href="https://t.me/CRYPTIONK_OFFICIAL">
//         <div className="ic-outline-telegram" />
//       </a>
//       <a href="https://x.com/cryptionk">
//         <div className="pajamas-twitter" />
//       </a>
//       <a href="https://www.instagram.com/cryptionk_official?igsh=MXRuMzB2dnY5YXpobg==">
//         <div className="mdi-instagram" />
//       </a>
//     </div>
//   </div>
//       </div>
//     </>
//   );
// }
