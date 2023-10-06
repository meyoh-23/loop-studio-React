import React from 'react';
import desktopHeroImage from './assets/desktop/image-hero.jpg';
import mobileHeroImage from './assets/mobile/image-hero.jpg';
import { Box, Typography, } from '@mui/material';
//import { Title } from '@mui/icons-material';

const Hero = () => {
return (
    <Box
    sx={{
        background: {
            xs: `url(${mobileHeroImage})`,
            sm: `url(${desktopHeroImage})`,
        },
        backgroundPosition: "center",
        objectFit: "fill",
        backgroundRepeat: {
            xs: "no-repeat",
            sm: "no-repeat",
        },
        minHeight: "90vh",
        width: "100%",
        display: "block",
        flexDirection: "column",
        marginBottom: "1rem"
    }}
    >
        <Box
        sx={{
            display:"block",
            color: "#fff",
            pt: "10rem",
        }}
        >
            <Box
            sx={{
                padding: "1.2rem",
                border: "solid 2px hsl(0, 0%, 100%)",
                margin: "2.5rem",
                maxWidth: "250px",
            }}
            >
                <Typography
                variant='p'
                sx={{
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: " 'Alata', sans-serif",
                    fontsize: "2.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "3px"
            
                }}
                >
                    imemersive <br/> experiences <br/> that deliver
                </Typography>
            </Box>
        </Box>
</Box>
)}

export default Hero