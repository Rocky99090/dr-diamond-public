import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';
import { Typography } from '@mui/material';

const title = "India's No.1 Gaming Platform";
const subtitle = "today's";
const btnText = "Browse All games";


const CollectionSectionTwo = () => {
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

        const intervalId = setInterval(incrementCounters, 150); // Increase every 50ms

        return () => clearInterval(intervalId);
    }, [targetTrustedUsers, targetTotalPrizes, targetDailyContests, targetLuckyWinners]);
    return (
        <section className="footer-section ">
            <div className="footer-top">
                <div className="container">
                <div className="section-header">
    <Typography variant="h4" className="custom-heading">
        India's No.1 Book
    </Typography>
</div>
                    <div className="row g-3 justify-content-center g-lg-0">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer-top-item lab-item footer-card">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                        <i className="icofont-user" style={{ fontSize: '30px' }}></i>
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
                                        <i className="icofont-award" style={{ fontSize: '30px' }}></i>
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
                                        <i className="icofont-diamond" style={{ fontSize: '30px' }}></i>
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
                                        <i className="icofont-crown" style={{ fontSize: '30px' }}></i>
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
        </section>
    );
};

export default CollectionSectionTwo;
