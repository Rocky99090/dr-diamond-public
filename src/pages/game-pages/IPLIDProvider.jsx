import React, { Fragment, useEffect } from "react";

import Header from "../../component/layout/header";
import Footer from "../../component/layout/footer";
import './app-page-game.css'
import { CricketIDProvider, IPLIDProvider } from "./AllGameData";
import { Typography } from "@mui/material";
import MetaDecorator from "../../Decorator/MetaDecorator";
import { useLocation } from "react-router-dom";
const IPLID = () => {

const data = IPLIDProvider

const location = useLocation();
    return (
        <Fragment>
             <MetaDecorator
                    description={data.metaDescription}
                    title={data.metaTitle}
                    keywords={data.metaKeywords}
                    pathname={location.pathname}
                    />
        <Header />
        <div className="blog-single-section padding-top padding-bottom" style={{background:'#fff'}} >
        <div className="section-header" color='primary'>
                <Typography variant='h4' className='custom-heading' color={"black"}>{data.title}</Typography>
            </div>
            <div className="container">
                <div className="blog-single-content">
                    {/* <img src={blog.imgUrl} alt={blog.imgAlt} className="w-100 mb-4" /> */}
                    
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
            </div>
        </div>
        <Footer />
    </Fragment>
    );
};

export default IPLID;
