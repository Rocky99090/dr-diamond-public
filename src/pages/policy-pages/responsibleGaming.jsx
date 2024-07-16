import React, { Fragment, useEffect } from "react";

import Header from "../../component/layout/header";
import Footer from "../../component/layout/footer";
import { PrivacyPolicyData, ResponsibleGaming } from "./AllPageData";
import './app-page.css'
const Responsible = () => {

const data = ResponsibleGaming

    return (
        <Fragment>
            <Header />
            <div className="blog-single-section padding-top padding-bottom" >
            <div className="shop-title d-flex flex-wrap">
            <h2  >{data.title}</h2></div>
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

export default Responsible;
