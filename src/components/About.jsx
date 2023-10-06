import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import desktopHeroImage from "./assets/desktop/image-interactive.jpg";
import mobileHeroImage from "./assets/mobile/image-interactive.jpg";

const About = () => {
    return (
    <Container
    sx={{
        marginTop: "4rem",
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "row",
        },
        gap: 2,
    }}
    >
        <Container
            sx={{
                backgroundImage: {
                    xs: `url(${mobileHeroImage})`,
                    sm: `url(${desktopHeroImage})`,
                },
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "400px",
            }}
        >
        </Container>
        <Container
        sx={{
                minHeight: "400px",
                position: "relative",
            }}
        >
            <Box
            sx={{
                position: {
                    sx: "relative",
                    sm: "absolute",
                },
                left: {
                    sm: "-5rem",
                },
                top: {
                    sm: "3.5rem",
                },
                alignItems: "left",
                backgroundColor: "hsl(0, 0%, 100%)",
            }}
            >
                <Box
                    sx={{
                        margin: {
                            xs: "0",
                            sm: "20px 40px 10px 60px ",
                        },
                        padding: {
                            xs: 0,
                            sm: "0 0 8rem 0",
                        }
                    }}
                >
                    <Typography
                        variant='h4'
                        sx={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            fontSize: "1.5rem",
                            textTransform: "uppercase",
                            letterSpacing: "3px",
                            marginBottom: "10px",
                            paddingBottom: "1rem",
                        }}
                    >
                        the leader in <br/> interactive vr
                    </Typography>
                    <Typography
                        variant='p'
                        sx={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            fontSize: "1.25rem",
                            marginBottom: "25px",
                            lineHeight: "35px",
                        }}
                    >
                        Founded in 2011, Loopstudio has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businessed through digital experiences that bind their brand.
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Container>
)}

export default About;