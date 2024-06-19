import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import { blogData } from "./BlogData/blogData";

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData.find((blog) => blog.id === parseInt(id));

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
            <Header />
            <div className="blog-single-section padding-top padding-bottom" >
            <div className="shop-title d-flex flex-wrap">
            <h2  >{blog.title}</h2></div>
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
