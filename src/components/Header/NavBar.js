import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <a href="">Nosotros</a>
        <a href="">Hombres</a>
        <a href="">Mujeres</a>
        <a href="">Contactanos</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
