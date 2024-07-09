import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";



import HrShape from "../component/layout/hrshape";
import AboutSection from "../component/section/about";
import BannerSection from "../component/section/banner";
import BlogSection from "../component/section/blog";
import CollectionSection from "../component/section/collection";
import CtaSection from "../component/section/cta";
import MatchSection from "../component/section/match";
import PlayerSection from "../component/section/player";
import ProductSection from "../component/section/product";
import SponsorSection from "../component/section/sponsor";
import TestimonialSection from "../component/section/testimonial";
import VideoSection from "../component/section/video";
import PartnerPage from "./partner";
import MainPoints from "../component/section/main-points";
import CollectionSectionTwo from "../component/section/collectiontwo";
import GameList from "../component/section/gamelist";
import { Box, Button, Fab } from "@mui/material";
import HeroThree from "../component/section/hero/hero";



class HomePage extends Component {
    render() { 

        return (
            <Fragment>
   
                <Header />
                <HeroThree />
                <CollectionSection />
                <AboutSection imgUrl={'assets/images/about/diamond-exchange-phone-mockup.webp'} />
                <CollectionSectionTwo />
                <GameList />
                <MatchSection />
             
             <PartnerPage />
             <MainPoints />
                <CtaSection imgUrl={'assets/images/cta/01.png'} />
                <HrShape />
                <SponsorSection />
                 <BlogSection />
                {/*<TestimonialSection /> */}
                <Footer />
            </Fragment>
        );
    }
}
 
export default HomePage;