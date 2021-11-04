import NavBar from "./NavBar";
import BrandLogo from "./BrandLogo";

import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <BrandLogo />
      <NavBar />  
    </header>
  );
};

export default Header;
