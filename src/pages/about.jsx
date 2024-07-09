import { Component, Fragment } from "react";

import Header from '../component/layout/header'
import PageHeader from '../component/layout/pageheader'
import AboutSection from '../component/section/about'
import VideoTestimonial from "../component/section/videotestimonial";
import SponsorSection from "../component/section/sponsor";
import ProductSection from "../component/section/product";
import CtaSection from "../component/section/cta";
import HrShape from "../component/layout/hrshape";
import Footer from "../component/layout/footer";
import TeamSinglePage from "./team-single";
import HeroThree from "../component/section/hero/hero-about";


class AboutPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <HeroThree />
                {/* <AboutSection imgUrl={'assets/images/about/diamond-exchange-phone-mockup.webp'} /> */}
                <TeamSinglePage />
                
                <CtaSection imgUrl={'assets/images/cta/01.png'} />
                <HrShape />
                <SponsorSection />
                <Footer />
            </Fragment>
        );
    }
}
 
export default AboutPage;