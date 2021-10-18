import NavBar from "./NavBar";
import BrandLogo from "./BrandLogo";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <BrandLogo />
      <div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
