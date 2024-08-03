import React, { Fragment, useEffect } from "react";

import Header from "../../component/layout/header";
import Footer from "../../component/layout/footer";
import './app-page-game.css'
import { CricketIDProvider } from "./AllGameData";
import { Typography } from "@mui/material";
const CricketID = () => {

const data = CricketIDProvider

    return (
        <Fragment>
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

export default CricketID;
