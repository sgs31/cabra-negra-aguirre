import Logo from '../../assets/goat-icon.svg'
import './BrandLogo.css'

const BrandLogo = () => {
  return (
    <div className="header-logo">
      <img src={Logo} alt="logo-cabra-negra" />
      <p>Cabra Negra</p>
    </div>
  );
};

export default BrandLogo