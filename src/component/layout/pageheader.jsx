import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

const PageHeader = ({ title, curPage, image }) => {
    return (
        <Box
            className="pageheader-section"
            sx={{
                backgroundImage: image ? `url(${image})` : "url(/assets/images/pageheader/bg.jpg)",
               
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Ensure the background image covers the entire container
                position: 'relative',
                height: '40vh', // Adjust the percentage of viewport height as needed
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff', // Text color
            }}
        >
            {/* <div className="container">
                <div className="section-wrapper text-center text-uppercase">
                    <Typography variant="h2" className="pageheader-title" gutterBottom>{title}</Typography>
                    <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ justifyContent: 'center' }}>
                        <Link color="inherit" href="/">Home</Link>
                        <Typography color="textPrimary" aria-current="page">{curPage}</Typography>
                    </Breadcrumbs>
                </div>
            </div> */}
        </Box>
    );
}

export default PageHeader;
