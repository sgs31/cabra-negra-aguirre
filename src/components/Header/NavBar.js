import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <NavLink to="/">Nosotros</NavLink>
        <NavLink to="/shop/man">Hombres</NavLink>
        <NavLink to="/shop/woman">Mujeres</NavLink>
        <NavLink to="/contacto">Contactanos</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
