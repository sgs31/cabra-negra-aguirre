import { NavLink } from 'react-router-dom'
import Contact from './Contact'
import SocialMedia from './SocialMedia'
import logo from '../../assets/goat-icon.svg'
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Contact/>
            <div className="footer-brand">
                <NavLink to="/">
                    <img src={logo} alt="cabra-negra-logo"/>
                </NavLink>
                <p>Copyright 2021 © Agustin Aguirre </p>
            </div>
            <SocialMedia/>
        </footer>
    )
}

export default Footer;
