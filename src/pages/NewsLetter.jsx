import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Spinner from '../components/Spinner';

export default function NewsLetter() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    import('./../styles/newsletter.css');
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div>
  <div className="main-container">
    <div className="cryptionk">
      <div className="bg-texture" />
      <Link href="/">
        <div className="logo" />
      </Link>
      <div className="ellipse-1" />
      <div className="ellipse-2" />
      <div className="ellipse-3" />
      <div className="ellipse-4" />
      <div className="elements-1" />
      <div className="elements-2" />
      <div className="elements-3" />
      <div className="component" />
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
      <div className="contact text-white">
        <h1 className="text-center" style={{fontSize: 55, fontWeight: '400 !important', textShadow: '0px 5px 3px #441d20', marginBottom:"10px"}}>
          Newsletter</h1>
        <h5 className="text-center" style={{fontWeight: '400 !important', color: '#b8a8a9 !important', fontSize:"1.25rem", marginBottom:"15px"}}>Bringing you the
          best ideas,
          updates, and innovations</h5>
        <div className="row m-0 pt-4 px-4">
          <div className="p-0 col" />
          <div className="col-12 col-xl-4 mx-4 m0 col-card1">
            <div className="row m-0 pt-5 text-white">
              <div className="col"><h1 style={{fontWeight: 600, fontSize: "2.5rem"}}>Lite</h1></div>
              <div className="col d-flex align-items-end" style={{justifyContent: 'end'}}><h4 style={{fontWeight: 300, paddingBottom: 2, fontSize:"1.5rem"}}>Free</h4></div>
            </div>
            <div className="row m-0 mt-5 text-white card1" style={{border: '1px solid #ffffff4d', borderRadius: 50}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal1"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>Crypto 10x to 100x</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect className="rect" x={8} y={6} width={8} height={12} fill="#ffffff" />
                  <path className="path" fill="#602b77" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card1" style={{border: '1px solid #ffffff4d', borderRadius: 50}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal2"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>Biostocks</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect className="rect" x={8} y={6} width={8} height={12} fill="#ffffff" />
                  <path className="path" fill="#602b77" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card1" style={{border: '1px solid #ffffff4d', borderRadius: 50}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal3"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>Hyperstocks</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect className="rect" x={8} y={6} width={8} height={12} fill="#ffffff" />
                  <path className="path" fill="#602b77" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card1" style={{border: '1px solid #ffffff4d', borderRadius: 50}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal6"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>The Gem Crypto</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect className="rect" x={8} y={6} width={8} height={12} fill="#ffffff" />
                  <path className="path" fill="#602b77" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
                {/* ritesh */}
              </div>

            </div>
          </div>
          <div className="col-12 col-xl-4 mx-4 m0 col-card2">
            <div className="row m-0 pt-5 text-white">
              <div className="col"><h1 style={{fontWeight: 600, fontSize: "2.5rem"}}>Premium</h1></div>
              <div className="col d-flex align-items-end" style={{justifyContent: 'end'}}><h4 style={{fontWeight: 300, paddingBottom: 2,  fontSize: "1.5rem"}}>Paid</h4></div>
            </div>
            {/* pranesh */}
            <div className="row m-0 mt-5 text-white card2" style={{border: '1px solid #2BB7D5', borderRadius: 50, backgroundColor: '#2BB7D5'}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal4"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',  fontSize: "1.25rem"}}>Transforming Defence With AI</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect x={8} y={6} width={8} height={12} fill="#602b77" />
                  <path fill="#fff" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card2" style={{border: '1px solid #2BB7D5', borderRadius: 50, backgroundColor: '#2BB7D5'}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal5"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>Tokenization</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect x={8} y={6} width={8} height={12} fill="#602b77" />
                  <path fill="#fff" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card2" style={{border: '1px solid #2BB7D5', borderRadius: 50, backgroundColor: '#2BB7D5'}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal7"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>NEW GLOBAL D-ECONOMY</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect x={8} y={6} width={8} height={12} fill="#602b77" />
                  <path fill="#fff" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card2" style={{border: '1px solid #2BB7D5', borderRadius: 50, backgroundColor: '#2BB7D5'}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal8"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>Future Of Crypto Energy</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect x={8} y={6} width={8} height={12} fill="#602b77" />
                  <path fill="#fff" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card2" style={{border: '1px solid #2BB7D5', borderRadius: 50, backgroundColor: '#2BB7D5'}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal9"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>Dawn Of New Era 2024-2030</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect x={8} y={6} width={8} height={12} fill="#602b77" />
                  <path fill="#fff" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
            <div className="row m-0 mt-5 text-white card2" style={{border: '1px solid #2BB7D5', borderRadius: 50, backgroundColor: '#2BB7D5'}}>
              <div className="col py-3 pl-4 pr-3 d-flex justify-content-between align-items-center btn text-white" data-toggle="modal" data-target="#Modal10"><h5 className="m-0 pr-3" style={{textTransform: 'uppercase',fontSize: "1.25rem"}}>Wealth Of The Coming Decade</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px">
                  <rect x={8} y={6} width={8} height={12} fill="#602b77" />
                  <path fill="#fff" d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-0 col" />
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="rectangle-10" />
      <span className="all-rights-reserved">All Rights Are Reserved By Cryptionk</span>
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
  {/* Modal */}
  <div className="modal fade" id="Modal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Crypto 10x to 100x" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Biostocks" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Hyperstocks" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Transforming Defence With AI" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Tokenization" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="The Gem Crypto" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal7" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="A NEW GLOBAL D-ECONOMY" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal8" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Future Of Crypto Energy" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal9" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Dawn Of New Era 2024-2030" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="Modal10" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content" style={{background: 'transparent', borderRadius: 20}}>
        <div className="modal-body" style={{backgroundColor: '#210c0ff0', borderRadius: 20, boxShadow: '0 0 20px 10px #261013'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{color: 'white'}}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="pdf-form text-center">
            <h2 className="mt-4 text-center"><span style={{color: 'transparent', backgroundImage: 'linear-gradient(165.52deg, #fffefd, #d28a70)', backgroundSize: '100%', WebkitBackgroundClip: 'text', MozBackgroundClip: 'text', fontSize: 40}}>Download newsletter !</span>
            </h2>
            <form className="mt-4" action="/pdf_form" method="POST">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="VrTjeXx9Mon3uhWbxFBIydVbr7nyt83k5PntidTTtvZ7SH3dCzweHgZzTpTlMXz8" />
              <div className="input-box pt-4">
                <input className="input" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-box mt-4">
                <input className="input" type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-box mt-4" style={{display: 'none'}}>
                <input className="input" type="text" name="pdf" placeholder="Message" defaultValue="Wealth Of The Coming Decade" />
              </div>
              <div className="mt-4">
                <button className="button" type="submit">Download</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
