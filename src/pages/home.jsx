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



class HomePage extends Component {
    render() { 
        const openWhatsapp = () => {
            window.location.href = "https://wa.link/rockywebsite?text=I want Id"
        }
        return (
            <Fragment>
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px !important',
        right: '20px',
        zIndex: 1000,
        '& > :not(style)': { m: 0 },
      }}
    >
      <Button
        onClick={openWhatsapp}
        aria-label="WhatsApp"
        sx={{
          backgroundColor: 'green',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: 'green',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
  <i class="icofont-brand-whatsapp"  style={{fontSize:"40px", color:'white'}}></i>
  </Button>
</Box>
                <Header />
                <BannerSection />
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