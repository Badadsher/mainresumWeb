import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/Styles/main.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3 className="logotype">
        <img src="logo.png" width="130" height="60"></img>
      </h3>
      <nav ref={navRef}>
        <a href="/#" onClick={showNavbar}>
          Главная
        </a>
        <a href="#menu" onClick={showNavbar}>
          Работы
        </a>
        <a href="/#about" onClick={showNavbar}>
          Обо мне
        </a>
        <a href="/#contact" onClick={showNavbar}>
          Контакты
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
