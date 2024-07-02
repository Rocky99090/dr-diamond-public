import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { handleRedirect } from "../env/credentials";

const PartnerPage = () => {
    return (
        <div className="partner-section padding-top">
            <div className="container">
                <div className="section-header">
                    <Typography variant='h4' className="custom-heading" color={"black"}>How To Register?</Typography>
                </div>
                <div className="section-wrapper">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Accordion sx={{ marginBottom: 2 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ justifyContent: 'center' }}
                                    className="accordion-summary"
                                >
                                    <Typography variant="subtitle1">1. WhatsApp Message Us</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Drop us a message on the above contact number saying ‘Hi’ and we will get in touch for assistance.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ marginBottom: 2 }}>
                                <AccordionSummary
                                     expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{ justifyContent: 'center' }}
                                    className="accordion-summary"
                                >
                                    <Typography variant="subtitle1">3. We Create an ID for Deposits</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        After being satisfied, you may start depositing money easily without worrying.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ marginBottom: 2 }}>
                                <AccordionSummary
                                     expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                    sx={{ justifyContent: 'center' }}
                                    className="accordion-summary"
                                >
                                    <Typography variant="subtitle1">5. WhatsApp Us For Withdrawals</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Reach out on the same WhatsApp number for hassle-free withdrawals.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Accordion sx={{ marginBottom: 2 }}>
                                <AccordionSummary
                                     expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel4a-content"
                                    id="panel4a-header"
                                    sx={{ justifyContent: 'center' }}
                                    className="accordion-summary"
                                >
                                    <Typography variant="subtitle1">2. Collect In-Depth Info From Support</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Our executives are available on WhatsApp or web for any details or queries.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ marginBottom: 2 }}>
                                <AccordionSummary
                                     expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel5a-content"
                                    id="panel5a-header"
                                    sx={{ justifyContent: 'center' }}
                                    className="accordion-summary"
                                >
                                    <Typography variant="subtitle1">4. Earn from Your Skills</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Test your skills & convert them to big returns in a short span of time.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ marginBottom: 2 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    aria-controls="panel6a-content"
                                    id="panel6a-header"
                                    sx={{ justifyContent: 'center' }}
                                    className="accordion-summary"
                                >
                                    <Typography variant="subtitle1">6. Receive Your Winnings Instantly</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Once your request is received, your winnings are transferred instantly.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                    <div className="button-wrapper text-center mt-5">
                        <div onClick={handleRedirect} className="default-button reverse-effect"><span>Play Now <i className="icofont-whatsapp"></i></span> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerPage;
