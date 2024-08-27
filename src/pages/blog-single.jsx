import React, { Fragment, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import { blogData } from "./BlogData/blogData";
import MetaDecorator from "../Decorator/MetaDecorator";
import { Typography } from "@mui/material";

const BlogDetails = () => {
    const location = useLocation();
    const { id } = useParams();
    const blog = blogData.find((blog) => blog.id === (id));
   
    useEffect(() => {
        if (blog) {
            document.title = blog.title;
        } else {
            document.title = "Blog not found";
        }
    }, [blog]);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <Fragment>
             <MetaDecorator
                    description={blog.metaDescription}
                    title={blog.metaTitle}
                    keywords={blog.metaKeywords}
                    pathname={location.pathname}
                    />
            <Header />
            <div className="blog-single-section padding-top padding-bottom">
            {/* <div className="section-header" color='primary' >
                    <Typography variant='h1' className='custom-heading' color={"black"}>{blog.title}</Typography>
                </div> */}
                <div className="container">
                    <div className="blog-single-content">
                        <img src={blog.imgUrl} alt={blog.imgAlt} className="w-100 mb-4" />
                        
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default BlogDetails;
