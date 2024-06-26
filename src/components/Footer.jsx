import TrustpilotLogo from '../asset/images/TrustpilotLogo.svg';
import TrustpilotStars from '../asset/images/TrustpilotStars.svg';
import Discord from '../asset/images/Discord.svg';
import Twitter from '../asset/images/Twitter.svg';
import Instagram from '../asset/images/Instagram.svg';
import Facebook from '../asset/images/Facebook.svg';
import Youtube from '../asset/images/Youtube.svg';
import Twitch from '../asset/images/Twitch.svg';
import AppStore from '../asset/images/AppStore.svg';
import GooglePlay from '../asset/images/GooglePlay.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
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
        </footer>
    );
};

export {Footer};
