import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, keywords, pathname }) => (
  <Helmet>
     <title>{title}</title>
          <meta name="keywords" content={keywords} />
        <meta name="title" content={title} />     
        <meta name="description" content={description} />
          <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content='https://rockybook.com/static/media/rocky1.c4ed97156855ba1661ba.jpeg' />
        <meta property="og:url" content={`https://rockybook.com/${pathname}`} />
  </Helmet>
);
// console.log(`https://rockybook.com/${pathname}`)
MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default MetaDecorator;
