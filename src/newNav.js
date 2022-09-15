import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./newNav.css";
import MediaQuery from "react-responsive";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

	return (
		<header>
			<img
            alt=""
            src={"./antk_police.png"}
            width={120}
            height={120}
            className="d-inline-block align-top"
            id="navlogo"
          />
			<nav ref={navRef}>
				<a href="#produit" onClick={hideNavbar}>Produits</a>
				<a href="/white-fr.pdf" target="_blank" onClick={hideNavbar}>Whitepaper</a>
				<a href="#tokenomics" onClick={hideNavbar} >Tokenomics</a>
				<a href="#roadmap" onClick={hideNavbar}>Roadmap</a>
        <a href="#team" onClick={hideNavbar}>Équipe</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes size={70}/>
				</button>
                <div id="langButton"> 
          <MediaQuery minWidth={1000}>
            <Link to="/">
              <button className="lang">FR</button>
            </Link>
            <Link to="/eng">
              <button className="lang">EN</button>
            </Link>
          </MediaQuery>
          </div>
          <div id="langButton"> 
          <MediaQuery minWidth={0} maxWidth={1000}>
            <Link to="/">
              <button className="langMobile">FR</button>
            </Link>
            <Link to="/eng">
              <button className="langMobile">EN</button>
            </Link>
          </MediaQuery>
            </div>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars size={70} />
			</button>

		</header>
	);
}

export default Navbar;