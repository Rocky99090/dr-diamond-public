import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Rating from "../section/rating";
import SocialMedia from '../section/socialmedia';
import { handleRedirect } from "../../env/credentials";
import { Typography } from "@mui/material";

const postTitle = "Quick Links";
const newsTitle = "Follow Us";
const desc = "At DR Diamond Exchange, we have been the beloved choice for punters searching to strike gold and win big. Whether it's IPL Cricket, Tennis, Football, or other sports, we offer thrilling opportunities. Additionally, you can test your skills with games like Teen Patti and Andar Bahar, or immerse yourself in the excitement of Live Casino games such as Lucky 7, Lion Dragon Tiger, and many more.";
const newsdesc = "At DR Diamond Exchange, we have been the beloved choice for punters searching to strike gold and win big.";

const Footer = () => {


    return (
        <footer className="footer-section">

            <div className="footer-middle padding-bottom">
                <div className="container">
                    <div className="row padding-lg-top">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item mb-lg-0">
                                    <div className="fm-item-title mb-4">
                                        <img src="/assets/images/logo/logo_2.png" alt="logo" />
                                    </div>
                                    <div className="fm-item-title">
                                    <p>{newsdesc}</p>
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
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item mb-lg-0">
                                    <div className="fm-item-title">
                                        <h4>{postTitle}</h4>
                                    </div>
                                    <div className="fm-item-content">
                                    <ul className="">   
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/about">About Us</NavLink></li>
                                            <li><NavLink to="/blog">Blog</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item mb-lg-0">
                                    <div className="fm-item-title">
                                        <h4>Policies</h4>
                                    </div>
                                    <div className="fm-item-content">
                                    <ul className="">   
                                            <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                                            <li><NavLink to="/responsible-gaming">Responsible Gaming</NavLink></li>
                                            <li><NavLink to="/terms-and-conditions">Terms and Condition</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item-3 mb-lg-0">
                                    <div className="fm-item-title">
                                        <h4>{newsTitle}</h4>
                                    </div>
                                    <div className="fm-item-content">
                                    <ul className="icons-list">   
                                        <li>
                                            <a href="https://www.instagram.com/drdiamondexch" 
                                            target="_blank"
                                            rel="noopener noreferrer nofollow">
                                            <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/drdiamondexch" 
                                            target="_blank"
                                            rel="noopener noreferrer nofollow">
                                            <i className="icofont-telegram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:drdiamondexchhelp@gmail.com" 
                                            target="_blank"
                                            rel="noopener noreferrer nofollow">
                                            <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>

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
