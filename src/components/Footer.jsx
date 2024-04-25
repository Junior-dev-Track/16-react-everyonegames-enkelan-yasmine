import TrustpilotLogo from '../assets/images/TrustpilotLogo.svg';
import TrustpilotStars from '../assets/images/TrustpilotStars.svg';
import Discord from '../assets/images/Discord.svg';
import Twitter from '../assets/images/Twitter.svg';
import Instagram from '../assets/images/Instagram.svg';
import Facebook from '../assets/images/Facebook.svg';
import Youtube from '../assets/images/Youtube.svg';
import Twitch from '../assets/images/Twitch.svg';
import AppStore from '../assets/images/AppStore.svg';
import GooglePlay from '../assets/images/GooglePlay.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='sectionContainer container grid'>
                <div className='trustpilotSection'>
                    <div className="logoAndText">
                        <img src={TrustpilotLogo} alt="Trustpilot logo" className="trustpilotLogo"/>
                        <span className="trustpilotText">Trustpilot</span>
                    </div>
                    <img src={TrustpilotStars} alt="4.5 stars" className="trustpilotStars"/>
                    <p> TrustScore <span className='ratingScore'>4.7 | 697,337</span> reviews</p>
                </div>
                <div className='linksSection'>
                    <a>FAQ</a>
                    <a>Copyright</a>
                    <a>Contact us</a>
                    <a>Terms of use</a>
                    <a>Cookie policy</a>
                    <a>Privacy policy</a>
                    <a>Community guidelines</a>
                </div>
                <div className='mediaAndStoresSection'>
                    <div className='socialMediaSection'>
                        <img src={Discord} alt="Discord" className="socialLogo Discord"/>
                        <img src={Twitter} alt="Twitter" className="socialLogo Twitter"/>
                        <img src={Instagram} alt="Instagram" className="socialLogo Instagram"/>
                        <img src={Facebook} alt="Facebook" className="socialLogo Facebook"/>
                        <img src={Youtube} alt="Youtube" className="socialLogo Youtube"/>
                        <img src={Twitch} alt="Twitch" className="socialLogo Twitch"/>
                    </div>
                    <div className='appStoresSection'>
                        <img src={AppStore} alt="App Store" className="storeLogo"/>
                        <img src={GooglePlay} alt="Google Play" className="storeLogo"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Footer};