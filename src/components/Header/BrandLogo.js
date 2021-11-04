import { NavLink } from "react-router-dom";
import Logo from '../../assets/goat-icon.svg'
import './styles/BrandLogo.css'

const BrandLogo = () => {
  
  const activeStyle = {
    textDecoration: "none",
    color:"black"
  }
  
  return (
    <NavLink to="/" activeStyle={activeStyle}>
      <div className="header-logo">
        <img src={Logo} alt="logo-cabra-negra" />
        <p>Cabra Negra</p>
      </div>
    </NavLink>
    
  );
};

export default BrandLogo;