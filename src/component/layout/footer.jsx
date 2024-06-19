import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../section/rating";
import SocialMedia from '../section/socialmedia';
import { handleRedirect } from "../../env/credentials";

const postTitle = "Top jackpot games";
const newsTitle = "Our Newsletter";
const desc = "At Diamond Exchange, we have been the beloved choice for punters searching to strike gold and win big. Whether it's IPL Cricket, Tennis, Football, or other sports, we offer thrilling opportunities. Additionally, you can test your skills with games like Teen Patti and Andar Bahar, or immerse yourself in the excitement of Live Casino games such as Lucky 7, Lion Dragon Tiger, and many more.";
const newsdesc = "At Diamond Exchange, we have been the beloved choice for punters searching to strike gold and win big.";

const FooterItemList = [
    {
        imgUrl: '/assets/images/game/dice.gif',
        imgAlt: 'Casino',
        title: 'Casino',
        proName: 'Poker',
        proPrice: '$230',
    },
    {
        imgUrl: '/assets/images/game/cricket.gif',
        imgAlt: 'Cricket',
        title: 'Cricket',
        proName: 'Poker',
        proPrice: '$230',
    },
    {
        imgUrl: '/assets/images/game/plane.gif',
        imgAlt: 'GO-CRASH',
        title: 'GO-CRASH',
        proName: 'Poker',
        proPrice: '$300',
    },
];

const Footer = () => {
    const [trustedUsers, setTrustedUsers] = useState(0);
    const [totalPrizes, setTotalPrizes] = useState(0);
    const [dailyContests, setDailyContests] = useState(0);
    const [luckyWinners, setLuckyWinners] = useState(0);

    const targetTrustedUsers = 5444194;
    const targetTotalPrizes = 3997536;
    const targetDailyContests = 5775976;
    const targetLuckyWinners = 2380295;

    useEffect(() => {
        const incrementCounters = () => {
            setTrustedUsers(prev => Math.min(prev + Math.ceil(targetTrustedUsers / 100), targetTrustedUsers));
            setTotalPrizes(prev => Math.min(prev + Math.ceil(targetTotalPrizes / 100), targetTotalPrizes));
            setDailyContests(prev => Math.min(prev + Math.ceil(targetDailyContests / 100), targetDailyContests));
            setLuckyWinners(prev => Math.min(prev + Math.ceil(targetLuckyWinners / 100), targetLuckyWinners));
        };

        const intervalId = setInterval(incrementCounters, 50); // Increase every 50ms

        return () => clearInterval(intervalId);
    }, [targetTrustedUsers, targetTotalPrizes, targetDailyContests, targetLuckyWinners]);

    return (
        <footer className="footer-section">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-3 justify-content-center g-lg-0 " >
                        <div className="col-lg-3 col-sm-6 col-12 ">
                            <div className="footer-top-item lab-item footer-card">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                     <i class="icofont-user" style={{fontSize:'30px'}}></i>
                                    </div>
                                    <div className="lab-content">
                                        <span>{trustedUsers.toLocaleString()}<br />+ ACTIVE USERS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer-top-item lab-item footer-card">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                    <i class="icofont-award" style={{fontSize:'30px'}}></i>
                                    </div>
                                    <div className="lab-content">
                                        <span>{totalPrizes.toLocaleString()}<br />+ PRIZE IN TOTAL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer-top-item lab-item footer-card">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                    <i class="icofont-diamond" style={{fontSize:'30px'}}></i>
                                    </div>
                                    <div className="lab-content">
                                        <span>{dailyContests.toLocaleString()}<br />+ DAILY CONTESTS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer-top-item lab-item footer-card">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                        <i class="icofont-crown" style={{fontSize:'30px'}}></i> 
                                          </div>
                                    <div className="lab-content">
                                        <span>{luckyWinners.toLocaleString()}<br />+ LUCKY WINNERS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle padding-top padding-bottom" style={{ backgroundImage: "url(/assets/images/footer/bg.jpg)" }}>
                <div className="container">
                    <div className="row padding-lg-top">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item mb-lg-0">
                                    <div className="fm-item-title mb-4">
                                        <img src="/assets/images/logo/logo.png" alt="logo" />
                                    </div>
                                    {/* <div className="fm-item-content">
                                        <p className="mb-4">{desc}</p>
                                        <ul className="match-social-list d-flex flex-wrap align-items-center">
                                            <SocialMedia />
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item mb-lg-0">
                                    <div className="fm-item-title">
                                        <h4>{postTitle}</h4>
                                    </div>
                                    <div className="fm-item-content">
                                        {FooterItemList.map((val, i) => (
                                            <div className="fm-item-widget lab-item" key={i}>
                                                <div className="lab-inner">
                                                    <div className="lab-thumb">
                                                        <Link to="#"> <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                    </div>
                                                    <div className="lab-content">
                                                        <h6>
                                                            <Link to="#">{val.title}</Link>
                                                        </h6>
                                                        <Rating />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item-3 mb-lg-0">
                                    <div className="fm-item-title">
                                        <h4>{newsTitle}</h4>
                                    </div>
                                    <div className="fm-item-content">
                                        <p>{newsdesc}</p>
                                       
                                            <div onClick={handleRedirect} className="default-button reverse-effect">
                                                <span>Whatsapp Now <i className="icofont-whatsapp"></i></span>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom-content text-center">
                                <p>&copy;2024 <Link to="/">DR DIAMOND EXCHANGE</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
