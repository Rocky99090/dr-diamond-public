import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/section/googlemap";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import HeroThree from "../component/section/hero/hero-contact";

const infosubtitle = "Get in touch with us";
const infotitle = "We're Always Eager To Hear From You!";
const contacttitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";

const infoListContent = [
    {
      imgUrl: 'icofont-instagram',
      imgAlt: 'Instagram',
      title: 'Instagram',
      desc: 'Diamond Exchange',
      link: 'https://www.instagram.com/drdiamondexch', // Link for Instagram
    },
    {
      imgUrl: 'icofont-telegram',
      imgAlt: 'Telegram',
      title: 'Telegram',
      desc: 'Diamond Exchange',
      link: 'https://t.me/drdiamondexch', // Link for Telegram
    },
    {
      imgUrl: 'icofont-mail',
      imgAlt: 'Email',
      title: 'Send Email',
      desc: 'drdiamondexchhelp@gmail.com',
      link: 'mailto:drdiamondexchhelp@gmail.com', // Mailto link for email
    },
  ];

const ContactUs = () => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactSubject, setContactSubject] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    return (
        <Fragment>
            <Header />
            <HeroThree />
            <div className="info-section padding-top padding-bottom">
                <div className="container">
                <div className="section-header" color='primary'>
                    <Typography variant='h4' className='custom-heading' color={"black"}>{infotitle}</Typography>
                </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-4">
                            {infoListContent.map((val, i) => (
                                
                                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                     <a
                                 href={val.link}
                                 target="_blank"
                                 rel="noopener noreferrer nofollow"
                                 style={{ textDecoration: 'none', width:'100%' }}
                               >
                                    <div className="contact-item text-center">
                                        <div className="contact-thumb mb-4">
                                       
<i className={val.imgUrl} style={{fontSize:'30px'}}></i>
                                        </div>
                                        <div className="contact-content">
                                            <h6 className="title">{val.title}</h6>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                    </a> </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </Fragment>
    );
};

export default ContactUs;
