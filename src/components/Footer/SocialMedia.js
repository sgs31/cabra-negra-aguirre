import github from '../../assets/social/github.svg'
import instagram from '../../assets/social/insta.svg'
import linkedin from '../../assets/social/in.svg'
import './styles/SocialMedia.css'

const SocialMedia = () => {
    return (
            <div className="social-media">
                <a href="https://github.com/sgs31" target="_blank"><img src={github} alt="icon-github" /></a>
                <a href="https://www.instagram.com/_aaaguirre/" target="_blank"><img src={instagram} alt="instagram-github" /></a>
                <a href="https://www.linkedin.com/in/aaaguirre/" target="_blank"><img src={linkedin} alt="linkedin-github" /></a>
            </div>
    )
}

export default SocialMedia
