import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from './rating';
import { handleRedirect } from '../../env/credentials';

const title = "Our Game Collection";

const CollectionSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    let CollectionListContent = [
        {
            imgUrl: 'assets/images/game/dice.gif',
            imgAlt: 'Casino',
            title: 'Casino',
        },
        {
            imgUrl: 'assets/images/game/cricket.gif',
            imgAlt: 'Cricket',
            title: 'Cricket',
        },
        {
            imgUrl: 'assets/images/game/plane.gif',
            imgAlt: 'GO-CRASH',
            title: 'GO-CRASH',
        },
        {
            imgUrl: 'assets/images/game/soccer.gif',
            imgAlt: 'SOCCER',
            title: 'SOCCER',
        },
        {
            imgUrl: 'assets/images/game/tennis.gif',
            imgAlt: 'Tennis',
            title: 'Tennis',
        },
    ]
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-header" color='primary'>
                    <Typography variant='h4' color={"black"}>{title}</Typography>
                </div>
                <div className="section-wrapper">
                    
                    <div className="row g-4 justify-content-center CollectionStyle">
                        {CollectionListContent.length > 2 ? (
                            <Slider {...sliderSettings}>
                                {CollectionListContent.map((val, i) => (
                                    <div className="col" key={i}>
                                        <Card
                                            style={{
                                                borderRadius: '10px',
                                                boxShadow: 'none',
                                                margin: '1rem',
                                                minHeight: isMobile ? '200px' : '250px',
                                                background: 'transparent' 
                                             }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                                <div
                                                    style={{
                                                        height: '100%',
                                                        width: '100%',
                                                        borderBottomLeftRadius: '10px',
                                                        borderBottomRightRadius: '10px',
                                                        overflow: 'hidden',
                                                        background:'black'
                                                        // background: 'linear-gradient(to bottom, #0088cc 0%, #0077bb 20%, #006699 40%, #005588 60%, #2c3e50 100%)',
                                                    }}
                                                >
                                                    <img
                                                        src={`${val.imgUrl}`}
                                                        alt={`${val.imgAlt}`}
                                                        style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            objectFit: 'cover',
                                                        }}
                                                    />
                                                </div>
                                                <CardContent
                                                    style={{
                                                        height: '40%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-end',
                                                        padding: '12px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        style={{
                                                            fontWeight: 'bold',
                                                            color: '#000',
                                                        }}
                                                    >
                                                        {val.title}
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            CollectionListContent.map((val, i) => (
                                <div className="col" key={i}>
                                    <Card
                                        style={{
                                            borderRadius: '10px',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                            background: 'linear-gradient(to bottom, #002366 60%, #ffffff 100%)',
                                            margin: '1rem',
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: '150px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} style={{ height: '100%', width: '100%' }} />
                                        </div>
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary">
                                                {val.title}
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
            
        </section>
    );
}

export default CollectionSection;
