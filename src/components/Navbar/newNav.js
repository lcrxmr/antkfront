import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./newNav.css";
import MediaQuery from "react-responsive";

function Navbar() {

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ------------------------- dynamic menu

  // const controlNavbar = () => {
  //   if (typeof window !== 'undefined') { 
  //     if (window.scrollY >= lastScrollY) { // if scroll down hide the navbar
  //       setShow(true); 
  //     } 
  //     else { // if scroll up show the navbar
  //       setShow(false);  
  //     }

  //     // remember current page location to use in the next move
  //     setLastScrollY(window.scrollY); 
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlNavbar);

  //     // cleanup function
  //     return () => {
  //       window.removeEventListener('scroll', controlNavbar);
  //     };
  //   }
  //   // if(window.pageYOffset === 0 && console.log("back at top")){
  //   //   setShow(false);
  //   // }
  // }, [lastScrollY]);


  // -------------------- responsive navbar


	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }



	return (
		<header className={`active ${show && 'hidden'}`}> 
            <img
            alt=""
            src={"./logo-white.png"}
            // className="d-inline-block align-top"
            id="navlogo"
          />
			<nav ref={navRef}  >

				<a href="#produit" onClick={hideNavbar}>Produits</a>
				<a href="/white-fr.pdf" target="_blank" onClick={hideNavbar}>Whitepaper</a>
				<a href="#tokenomics" onClick={hideNavbar} >Tokenomics</a>
				<a href="#roadmap" onClick={hideNavbar}>Roadmap</a>
        <a href="#team" onClick={hideNavbar}>Équipe</a>
        <MediaQuery minWidth={1000}>
        <a href="/how-to-buy-fr.pdf" target="_blank" onClick={hideNavbar}>
          <h6 className="howTo">HOW TO BUY</h6>
        </a>
        <a href="/private" onClick={hideNavbar}>
          <button className="button">BUY</button>
        </a>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
        <a href="/how-to-buy-fr.pdf" target="_blank" onClick={hideNavbar}>
          <button className="howToMobile">HOW TO BUY</button>
        </a>
        <a href="/private" onClick={hideNavbar}>
          <button className="buttonMobile">BUY</button>
        </a>
        </MediaQuery>
        <div className="buyLangFront">
          <MediaQuery minWidth={1000}>
          <a href="/"><h5 className="buyLangButton" >
              fr
            </h5></a>
            <h5>{""} |{""}</h5>
            <a href="/eng"><h5 className="buyLangButton" >
              en
            </h5></a>
          </MediaQuery>
        </div>
        <div className="buyLang">
          <MediaQuery minWidth={0} maxWidth={1000}>
          <a href="/"><h5 className="buyLangButtonMobile" >
              fr
            </h5></a>
            <h5 className="buyLangButtonMobile">{""} |{""}</h5>
            <a href="/eng"><h5 className="buyLangButtonMobile" >
              en
            </h5></a> 
          </MediaQuery>
        </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes size={70}/>
				</button>

			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars size={70} />
			</button>

		</header>
	);
}

export default Navbar;