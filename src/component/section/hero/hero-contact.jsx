import { Link } from 'react-router-dom';
import heroImg from '../../../assets/images/banner/new-banner.jpeg';
import heroImg2 from '../../../assets/images/banner/new-banner.jpeg';
import heroImgWeb from '../../../assets/images/banner/new-banner.jpeg';
import heroImgWeb2 from '../../../assets/images/banner/new-banner.jpeg';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const heroData = [{
    bgImg: heroImg,
},{
    bgImg: heroImg2,
}
]
const openWhatsapp = () => {
  window.location.href = "https://wa.link/rockywebsite?text=I want Id"
}

const MySlider = () => (
    <Carousel autoPlay showThumbs = {false} showStatus = {false}>
      <div onClick={openWhatsapp}>
        <img src={'assets/images/banner/contact1-mobile.webp'} alt="Slide 1" />
      </div>
      {/* <div>
        <img src={'/assets/images/banner/main-banner.png'} alt="Slide 2" />
      </div> */}
      {/* Add more slides as needed */}
    </Carousel>
  );
  const MySliderWeb = () => (
    <Carousel autoPlay showThumbs = {false} showStatus = {false}>
      <div onClick={openWhatsapp}>
        <img src={'/assets/images/banner/contact1-web.png'} alt="Slide 1" />
      </div>
      {/* <div>
        <img src={'/assets/images/banner/main-banner.png'} alt="Slide 2" />
      </div> */}
      {/* Add more slides as needed */}
    </Carousel>
  );
const HeroThree = () => {
    const mobile = useMediaQuery('(max-width:792px)');
    const web = useMediaQuery('(min-width:793px)');
    const { bgImg, titleTag, title, btnText, sliderImg } = heroData;
    return (
        
        <>{mobile ?

        <section id="home" className="slider-area slider-four fix p-relative pt-10 pb-10">
             {/* <ParallaxBanner onClick={() => openWhatsapp()} style={{ aspectRatio: '1 / 1', inset:"0px 0px", backgroundPosition: "center center", backgroundSize: "cover" }}>
                <ParallaxBannerLayer> */}
                    <MySlider />
                {/* </ParallaxBannerLayer>
             </ParallaxBanner> */}
             
        </section>
        :
        web ?
        <section id="home" className="slider-area slider-four fix p-relative pb-1">
        {/* <ParallaxBanner onClick={() => openWhatsapp()} style={{ aspectRatio: '2.5 / 1', inset:"0px 0px", backgroundPosition: "center center", backgroundSize: "cover", cursor:"pointer" }}>
           <ParallaxBannerLayer> */}
               <MySliderWeb />
           {/* </ParallaxBannerLayer>
       </ParallaxBanner> */}
   </section>:""}
        </>
    );
}
export default HeroThree;