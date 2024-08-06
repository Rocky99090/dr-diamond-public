import React from 'react';
import { Grid, Container, Typography, Box, Link } from '@mui/material';
import { handleRedirect } from '../env/credentials';

const subtitleMission = "Our Mission";
const titleMission = "EMPOWERING SPORTS ENTHUSIASTS";
const descMission = "At DR DIAMOND EXCHANGE, our mission is to provide an exhilarating platform for cricket enthusiasts to engage responsibly in the thrill of sports. We aim to deliver a secure, transparent, and innovative experience, empowering our users with insightful analysis, cutting-edge technology, and unparalleled customer service. Through our commitment to integrity and fair play, we aspire to become the premier destination for cricket enthusiasts, fostering a community that celebrates the spirit of the game while promoting responsible practices.";

const subtitleVision = "Our Vision";
const titleVision = "REDEFINING SPORTS ENGAGEMENT";
const descVision = "Our vision at DR DIAMOND EXCHANGE is to redefine the landscape of cricket engagement, setting new standards of excellence and trustworthiness in the industry. We envision a future where every cricket fan feels empowered to engage with confidence, leveraging our comprehensive platform that combines advanced analytics, real-time updates, and user-friendly interfaces. By continuously evolving and adapting to the evolving needs of our users, we strive to be the ultimate destination for cricket enthusiasts worldwide, delivering unparalleled excitement, entertainment, and value.";

const subtitleJoin = "JOIN THE DR DIAMOND EXCHANGE COMMUNITY";
const titleJoin = "BECOME A PART OF OUR COMMUNITY";
const descJoin = "Join the ranks of our satisfied clientele who rely on DR DIAMOND EXCHANGE for their engagement requirements. Register today to discover our range of services, seize enticing bonuses, and join the vibrant DR DIAMOND EXCHANGE community. We advocate for responsible gaming habits and equip you with tools to manage your activity effectively. Whether it's prominent sporting spectacles or lesser-known competitions, we provide an extensive array of markets, ensuring you can engage in your favorite pursuits with ease.";

const TeamSinglePage = () => {
    return (
        <>
            {/* Mission Section */}
            <section className="about-team padding-top padding-bottom mission" style={{ backgroundColor: '#ffffff' }}>
                <Container maxWidth="md" style={{ margin: '0 auto' }}>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="h6" color="textPrimary" >{subtitleMission}</Typography>
                            <Typography variant="h4" color="primary" className="mb-3">{titleMission}</Typography>
                            <Typography variant="body1" color="textPrimary" className="desc">{descMission}</Typography>
                        </Grid>
                        {/* CTA Image */}
                        
                        <div className="button-wrapper text-center mt-5 " style={{cursor:'pointer'}}>
                    <div onClick={handleRedirect} className="default-button reverse-effect">
                        <span>Whatsapp Now <i className="icofont-whatsapp"></i></span>
                    </div>
                </div>
                    </Grid>
                </Container>
            </section>

            {/* Vision Section */}
            <section className="about-team padding-top padding-bottom vision" >
                <Container maxWidth="md" style={{ margin: '0 auto' }}>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="h6" >{subtitleVision}</Typography>
                            <Typography variant="h4"  className="mb-3">{titleVision}</Typography>
                            <Typography variant="body1" >{descVision}</Typography>
                        </Grid>
                        {/* CTA Image */}
                        <div className="button-wrapper text-center mt-5 " style={{cursor:'pointer'}}>
                    <div onClick={handleRedirect} className="default-button reverse-effect">
                        <span>Whatsapp Now <i className="icofont-whatsapp"></i></span>
                    </div>
                </div>
                    </Grid>
                </Container>
            </section>

            {/* Join Section */}
            <section className="about-team padding-top padding-bottom join-team" style={{ backgroundColor: '#ffffff' }} >
                <Container maxWidth="md" style={{ margin: '0 auto' }}>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="h6" color="textPrimary" >{subtitleJoin}</Typography>
                            <Typography variant="h4 " color="primary" className="mb-3">{titleJoin}</Typography>
                            <Typography variant="body1" color="textPrimary" className="desc">{descJoin}</Typography>
                        </Grid>
                        {/* CTA Image */}
                        <div className="button-wrapper text-center mt-5 " style={{cursor:'pointer'}}>
                    <div onClick={handleRedirect} className="default-button reverse-effect">
                        <span>Whatsapp Now <i className="icofont-whatsapp"></i></span>
                    </div>
                </div>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default TeamSinglePage;
