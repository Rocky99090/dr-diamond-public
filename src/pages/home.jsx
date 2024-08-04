import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import HrShape from "../component/layout/hrshape";
import AboutSection from "../component/section/about";
import BlogSection from "../component/section/blog";
import CollectionSection from "../component/section/collection";
import CtaSection from "../component/section/cta";
import MatchSection from "../component/section/match";
import SponsorSection from "../component/section/sponsor";
import PartnerPage from "./partner";
import MainPoints from "../component/section/main-points";
import CollectionSectionTwo from "../component/section/collectiontwo";
import GameList from "../component/section/gamelist";
import HeroThree from "../component/section/hero/hero";
import MetaDecorator from "../Decorator/MetaDecorator";
import { useLocation } from "react-router-dom";
const content = require("../SeoData/HomeData.json");

const HomePage = () => {
    const location = useLocation();
    return (
        <Fragment>
            <MetaDecorator
                description={content.description}
                title={content.title}
                keywords={content.keywords}
                pathname={location.pathname}
            />
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
            {/* <TestimonialSection /> */}
            <Footer />
        </Fragment>
    );
};

export default HomePage;
