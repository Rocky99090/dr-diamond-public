import { Component } from "react";
import { Link } from "react-router-dom";
import { handleRedirect } from "../../env/credentials";
import { Typography } from "@mui/material";


const subtitle = "who we are";
const title = "ABOUT DIAMOND EXCHANGE";
const desc = "Experience the thrill of online gaming and betting with India's most trusted book and DiamondExch Id providers. At Diamond Exchange, we create safe and secure online gaming ids for live action on sports, casino, and card games. With us, you can easily fill and refill the desired amount after registering - all hassle-free!";


let AboutListContent = [
    {
        imgUrl: 'assets/images/about/icon-1.png',
        imgAlt: 'About Icon',
        title: 'Choose from hundreds of opportunities to test your skills',
        desc: 'IPL Cricket Betting, Football, Teen Patti, Lucky 7, Lion Dragon, Andar Bahar, Baccarat, 20-20 Cricket Match, Worli Matka, 20-20 Poker, One Day Poker, 6 Player Poker, and much more',
    },
    {
        imgUrl: 'assets/images/about/icon-2.png',
        imgAlt: 'About Icon',
        title: 'We believe in providing top-notch customer satisfaction',
        desc: ' Our commitment is unwavering, and we always go the extra mile for our customers.',
    },
    {
        imgUrl: 'assets/images/about/icon-3.png',
        imgAlt: 'About Icon',
        title: "We understand that you're putting your money",
        desc: 'which is why we prioritize safety and security relentlessly. All transactions on Diamond Exchange are protected using excellent security features, giving you peace of mind when placing bets.',
    },
    {
        imgUrl: 'assets/images/about/icon-1.png',
        imgAlt: 'About Icon',
        title: "Join Us Today and Unlock the Excitement of Cricket Betting!",
        desc: 'Are you ready to experience online cricket betting? Look no further! Here at Diamond Exchange we’re your utmost stop for securing a reliable and verified ID, opening the door to a thrilling online cricket betting experience.',
    },
]

class AboutSection extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="about-image">
                                    <img src={imgUrl} alt="about-image"  />
                            
                                </div>
                                <div className="button-wrapper text-center about-button-section"
                        onClick={handleRedirect}>
                        <div className="default-button reverse-effect"><span>Play Now <i class="icofont-whatsapp"></i></span> </div>
                      </div>
                            </div>
                            <div className="col-lg-9 col-md-10">
                                <div className="about-wrapper">
                                    
                                    <div className="section-header">
                                    
                                        <Typography variant='h4'  color={"white"}>{title}</Typography>
                  
                                    </div>
                                    <div className="about-content">
                                        <p>{desc}</p>
                                        <ul className="about-list">
                                            {AboutListContent.map((val, i) => (
                                                <li className="about-item d-flex flex-wrap" key={i}>
                                                    <div className="about-item-thumb">
                                                        <img 
                                                            src={`${val.imgUrl}`} 
                                                            alt={`${val.imgAlt}`}
                                                        />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutSection;