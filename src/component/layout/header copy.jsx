import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import { handleRedirect } from "../../env/credentials";

const contactNumber = "+800-123-4567 6587";
const contactAddress = "India";

let SocialMideaList = [
    {
        IconName: 'icofont-instagram',
        IconLink: 'https://www.instagram.com/drdiamondexch?igsh=NWVoYzgzM3MxeXNs',
    },
    
]

class Header extends Component {
    menuTrigger() {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    menuTriggerTwo() {
        document.querySelector('.header-top').classList.toggle('open')
        // document.querySelector('.header-bar').classList.toggle('active')
    }

    render() { 

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            }else{
                document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });

        return (
            <header className="header-section ">
                <div className="container mt-4">
                    <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
                        <div className="brand-logo d-none d-lg-inline-block">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo_2.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-menu-part">
                            {/* <div className="header-top">
                                <div className="header-top-area">
                                    <ul className="left">
                                        <li>
                                            <i className="icofont-ui-call"></i> <span>24/7 Available</span>
                                        </li>
                                        
                                        <li>
                                            <i className="icofont-user"></i> Trusted by millions
                                        </li>
                                    </ul>
                                    <ul className="social-icons d-flex align-items-center">
                                        {SocialMideaList.map((val, i) => (
                                            <li key={i}>
                                                <a href={`${val.IconLink}`} className="fb"><i className={`${val.IconName}`}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div> */}
                            <div className="header-bottom">
                                <div className="header-wrapper justify-content-lg-end">
                                    <div className="mobile-logo d-lg-none d-md-none">
                                        <Link to="/"><img src="/assets/images/logo/logo_2.png" alt="logo" /></Link>
                                    </div>
                                    <div className="menu-area">
                                    <ul className="menu">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About Us</NavLink></li>
                                        <li><NavLink to="/blog">Blog</NavLink></li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Games <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/cricket">Cricket</NavLink></li>
                                                <li><NavLink to="/football">Football</NavLink></li>
                                                <li><NavLink to="/tennis">Tennis</NavLink></li>
                                                {/* Add more game links as needed */}
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>

                                        <div onClick={handleRedirect} className="default-button reverse-effect whatsapp-now-header"><span>Whatsapp Now <i class="icofont-whatsapp"></i></span> </div>
                    
                                        <div className="header-bar d-lg-none" onClick={this.menuTrigger}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="ellepsis-bar d-lg-none"
                                            onClick={handleRedirect}>
                                        <i class="icofont-whatsapp"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;