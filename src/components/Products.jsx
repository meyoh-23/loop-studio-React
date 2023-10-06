import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

import mobileProject1 from './assets/mobile/image-deep-earth.jpg';

import desktopProject1 from './assets/desktop/image-deep-earth.jpg';

const Products = () => {
    return (
        <Container
        sx={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            marginBottom: "3rem",
        }}
        >
            <Box 
            sx={{
                display: {
                    xs: "block",
                    sm: "flex",
                },
                justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                },
            }}
            >
                <Typography
                sx={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontSize: "1.5rem",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                    }}
                >
                    our creations
                </Typography>
                <Box
                sx={{
                    display: {
                        xs: "none",
                        sm: "flex",
                    },
                }}
                >
                    <Button
                    variant='outlined'
                    sx={{
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                        backgroundColor: "hsl(0, 0%, 0%)"
                    }}
                    >
                        see more
                    </Button>
                </Box>
            </Box>
            <Box
            sx={{
                margin: "2.5rem",
                display: "grid",
                gridTemplateRows: 4,
                gap: "1.5rem",
            }}
            >
                check on the grid
                <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject1})`,
                        sm: `url(${desktopProject1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
                >
                    <Typography
                    sx={{
                        position: "absolute",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
                <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject1})`,
                        sm: `url(${desktopProject1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
                >
                    <Typography
                    sx={{
                        position: "absolute",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
                <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject1})`,
                        sm: `url(${desktopProject1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
                >
                    <Typography
                    sx={{
                        position: "absolute",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
                <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject1})`,
                        sm: `url(${desktopProject1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
                >
                    <Typography
                    sx={{
                        position: "absolute",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
                <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject1})`,
                        sm: `url(${desktopProject1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
                >
                    <Typography
                    sx={{
                        position: "absolute",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
                <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject1})`,
                        sm: `url(${desktopProject1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
                >
                    <Typography
                    sx={{
                        position: "absolute",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
                <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject1})`,
                        sm: `url(${desktopProject1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
                >
                    <Typography
                    sx={{
                        position: "absolute",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: "flex",
                        sm: "none",
                    },
                }}
                >
                    <Button
                    variant='outlined'
                    sx={{
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                        backgroundColor: "hsl(0, 0%, 0%)"
                    }}
                    >
                        see more
                    </Button>
                </Box>
        </Container>
    )}

export default Products;