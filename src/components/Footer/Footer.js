import Contact from './Contact'
import BrandLogo from '../Header/BrandLogo'
import SocialMedia from './SocialMedia'
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Contact/>
            <div className="footer-brand">
                <BrandLogo />
                <span>Copyright 2021 © Agustin Aguirre </span>
            </div>
            <SocialMedia/>
        </footer>
    )
}

export default Footer;
