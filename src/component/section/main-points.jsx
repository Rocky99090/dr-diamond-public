import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { handleRedirect } from '../../env/credentials';

const title = "Why Should you prefer DR DIAMOND EXCHANGE?";

const SponsorListContent = [
    {
        imgUrl: 'assets/images/main-points/DEPOSIT.png',
        imgAlt: 'MIN DEPOSIT ₹100',
    },
    {
        imgUrl: 'assets/images/main-points/WITHDRAWAL.png',
        imgAlt: 'MIN WITHDRAWAL ₹100',
    },
    {
        imgUrl: 'assets/images/main-points/SUPPORT.png',
        imgAlt: 'SUPPORT 24/7',
    },
    {
        imgUrl: 'assets/images/main-points/MIN REFILL.png',
        imgAlt: 'MIN REFILL ₹100',
    },
    {
        imgUrl: 'assets/images/main-points/PROCESS TIME.png',
        imgAlt: 'PROCESS INSTANTLY',
    },
    {
        imgUrl: 'assets/images/main-points/WORKING DAYS.png',
        imgAlt: 'WORKING DAYS 365',
    }
];

const MainPoints = () => {
    const theme = useTheme();

// Check if the screen width is less than the mobile breakpoint (usually 600px)
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // Define settings for the slider
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Show 2 slides at a time on mobile
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // Show 2 slides at a time on mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="sponsor-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header text-center">
                <h2>{title}</h2>
            </div>
            <div className="section-wrapper">
                <div className="row g-4 justify-content-center">
                    {SponsorListContent.length > 2 ? (
                        <Slider {...sliderSettings}>
                            {SponsorListContent.map((val, i) => (
                                <div className="col" key={i}>
                                    <Card
                                        style={{
                                            borderRadius: '10px', // Rounded corners for the whole card
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow
                                            margin: '0.5rem', // Reduced space between cards
                                            minHeight: isMobile ? '150px' : '180px', // Reduced card height
                                            background: 'linear-gradient(to bottom, black 100%, white 0%)', // Sharp black to white transition at 50%
                                            display: 'flex',
                                            flexDirection:'column',
                                            justifyContent:'center'
                                        }}
                                    >
                                        {/* Flex container to handle layout */}
                                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                            {/* Image and text section */}
                                            <div
                                                style={{
                                                    height: '100%', // Full height for image and text section
                                                    width: '100%',
                                                    borderBottomLeftRadius: '10px', // Rounded bottom left corner
                                                    borderBottomRightRadius: '10px', // Rounded bottom right corner
                                                    overflow: 'hidden',
                                                    display: 'flex',
                                                    flexWrap:'nowrap',
                                                    flexDirection:'column',
                                                    justifyContent: 'center', // Centers content horizontally
                                                    alignItems: 'center', // Centers content vertically
                                                    textAlign: 'center', // Center-aligns text,
                                                   }}
                                            >
                                                <img
                                                    src={`${val.imgUrl}`}
                                                    alt={`${val.imgAlt}`}
                                                    style={{
                                                        height: isMobile?'40%':'30%', // Smaller height for image
                                                        width: !isMobile?'40%':'30%',
                                                        objectFit: 'cover', // Ensures the image covers the entire div
                                                    }}
                                                />
                                                <CardContent
                                                    style={{
                                                        height: '60%', // Height for text section
                                                        display: 'flex',
                                                        justifyContent: 'center', // Centers content horizontally
                                                        alignItems: 'center', // Centers content vertically
                                                        paddingTop: '18px', // Reduced padding around the content
                                                        paddingBottom:'4px',
                                                        textAlign: 'center', // Center-aligns text
                                                    }}
                                                >
                                                    <Typography
                                                        variant="span" // Larger text
                                                        color="textSecondary"
                                                        style={{
                                                            fontWeight: 'bold', // Bold text
                                                            color: 'white', // White color text
                                                            fontSize:'15px'
                                                        }}
                                                    >
                                                        {val.imgAlt}
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        // Display cards without a slider if the number of items is 2 or fewer
                        SponsorListContent.map((val, i) => (
                            <div className="col" key={i}>
                                <Card
                                    style={{
                                        borderRadius: '10px', // Rounded corners
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow
                                        background: 'linear-gradient(to bottom, #002366 60%, #ffffff 100%)', // Adjust transition point
                                        margin: '0.5rem', // Reduced space between cards
                                        minHeight: '180px', // Reduced card height
                                    }}
                                >
                                    {/* Wrapper div with gradient background */}
                                    <div
                                        style={{
                                            height: '100%', // Full height for image and text section
                                            display: 'flex',
                                            flexDirection: 'column', // Column direction for image and text
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} style={{ height: '40%', width: '100%', objectFit: 'cover' }} />
                                        <CardContent
                                            style={{
                                                height: '60%', // Height for text section
                                                display: 'flex',
                                                justifyContent: 'center', // Centers content horizontally
                                                alignItems: 'center', // Centers content vertically
                                                padding: '8px', // Reduced padding around the content
                                                textAlign: 'center', // Center-aligns text
                                            }}
                                        >
                                            <Typography variant="h6" color="textSecondary" className='custom-heading' style={{ color: 'white' }}>
                                                {val.imgAlt}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        ))
                    )}
                </div>
                <div className="button-wrapper text-center mt-5">
                    <div onClick={handleRedirect} className="default-button reverse-effect">
                        <span>Whatsapp Now <i className="icofont-whatsapp"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MainPoints;
