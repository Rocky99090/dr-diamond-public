import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { handleRedirect } from '../../env/credentials';

const title = "WHAT MAKES US THE BEST";
const btnText = "BECOME A PARTNER";

const SponsorListContent = [
    {
        imgUrl: 'assets/images/sponsor/200+ LIVE GAMES.png',
        imgAlt: '200+ LIVE GAMES',
    },
    {
        imgUrl: 'assets/images/sponsor/customer_service.png',
        imgAlt: '24/7 CLIENT SUPPORT',
    },
    {
        imgUrl: 'assets/images/sponsor/INSTANT_PAYMENT.png',
        imgAlt: 'INSTANT PAYMENT',
    },
    {
        imgUrl: 'assets/images/sponsor/love.png',
        imgAlt: 'LOVE FOR OUR CUSTOMERS',
    },
    {
        imgUrl: 'assets/images/sponsor/zero.png',
        imgAlt: 'ZERO CLIENT COMPLAINTS',
    }
];

const SponsorSection = () => {
    const theme = useTheme();

// Check if the screen width is less than the mobile breakpoint (usually 600px)
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // Define settings for the slider
    const sliderSettings = {
        dots: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
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
        margin: '1rem', // Space between cards
        minHeight: isMobile ? '230px' : '250px',
        
    }}
>
    {/* Flex container to handle layout */}
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    {/* Image section (60% of the card) */}
    <div
        style={{
            height: '60%', // Takes 60% of the card's height
            width: '100%',
            borderBottomLeftRadius: '20px', // Rounded bottom left corner
            borderBottomRightRadius: '20px', // Rounded bottom right corner
            overflow: 'hidden',
            marginBottom: '8px', // Add margin at the bottom of the image section
            background: 'linear-gradient(to bottom, black 100%, white 0%)', // Sharp black to white transition at 50%
        }}
    >
        <img
            src={`${val.imgUrl}`}
            alt={`${val.imgAlt}`}
            style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover', // Ensures the image covers the entire div
            }}
        />
    </div>

    {/* Text section (40% of the card) */}
    <CardContent
        style={{
            height: '40%', // Takes 40% of the card's height
            display: 'flex',
            justifyContent: 'center', // Centers content vertically
            alignItems: 'flex-end', // Aligns content to the bottom of the section
            padding: '12px', // Padding around the content
            textAlign: 'center', // Center-aligns text
        }}
    >
        <Typography
            variant="body2"
            color="textSecondary"
            style={{
                fontWeight: 'bold', // Bold text
                color: '#555', // Darker color for better readability
            }}
        >
            {val.imgAlt}
        </Typography>
    </CardContent>
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

                                            margin: '1rem', // Space between cards
                                        }}
                                    >
                                        {/* Wrapper div with gradient background */}
                                        <div
                                            style={{
                                                height: '150px', // Adjust height as needed
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',  }}
                                        >
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} style={{ height: '100%', width: '100%' }} />
                                        </div>
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary">
                                                {val.imgAlt}
                                            </Typography>
                                        </CardContent>
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

export default SponsorSection;
