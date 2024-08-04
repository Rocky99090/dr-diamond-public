import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { blogData } from "./BlogData/blogData";
import { truncateDescription } from "../Utilities/TruncateText";
import HeroThree from "../component/section/hero/hero-blog";
import MetaDecorator from "../Decorator/MetaDecorator";
const content = require("../SeoData/BlogData.json");


const BlogPage = () => {
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
            {/* <PageHeader title={'OUR BLOG POSTS'} curPage={'Blog'} /> */}
            <div className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center">
                            {blogData.map((val, i) => (
                                <div className="col-lg-6 col-12" key={i}>
                                    <div className="blog-item">
                                        <div className="blog-inner">
                                            <div className="blog-thumb">
                                                <Link to={`/blog-single/${val.id}`}>
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                </Link>
                                            </div>
                                            <div className="blog-content px-3 py-4">
                                                <Link to={`/blog-single/${val.id}`}><h3>{val.title}</h3></Link>
                                                <div className="meta-post">
                                                    <a href="#">{val.pubAuthor}</a>
                                                    <a href="#">{val.pubDate}</a>
                                                </div>
                                                <p>{truncateDescription(val.desc)}</p>
                                                <Link to={`/blog-single/${val.id}`} className="default-button reverse-effect"><span>{val.btnText} <i className="icofont-circled-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default BlogPage;
