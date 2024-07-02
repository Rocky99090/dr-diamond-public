import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../pages/BlogData/blogData";
import { truncateDescription } from "../../Utilities/TruncateText";
import { Typography } from "@mui/material";

const subtitle = "our recent news";
const title = "Our Most Popular Blog posts";

const BlogSection = () => {
    const displayedBlogs = blogData.slice(0, 4);

    return (
        <div className="blog-section padding-top padding-bottom" style={{paddingTop:10}}>
            <div className="container">
                <div className="section-header">
                <Typography variant='h4' color={"black"}>{title}</Typography>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
                        {displayedBlogs.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="blog-item">
                                    <div className="blog-inner">
                                        <div className="blog-thumb">
                                            <Link to={`/blog-single/${val.id}`}>
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </Link>
                                        </div>
                                        <div className="blog-content px-3 py-4">
                                            <Link to={`/blog-single/${val.id}`}><h3>{val.title}</h3></Link>
                                            <div className="meta-post">
                                                <a href="#">{val.pubAuthor}</a>
                                                <a href="#">{val.pubDate}</a>
                                            </div>
                                            <p>{truncateDescription(val.desc)}</p>
                                            <Link to={`/blog-single/${val.id}`} className="default-button reverse-effect"><span>{val.btnText} <i className="icofont-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default BlogSection;
