import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import mobileProject1 from './assets/mobile/image-deep-earth.jpg';
import mobileProject2 from './assets/mobile/image-night-arcade.jpg';
import mobileProject3 from './assets/mobile/image-soccer-team.jpg';
import mobileProject4 from './assets/mobile/image-grid.jpg';
import mobileProject5 from './assets/mobile/image-from-above.jpg';
import mobileProject6 from './assets/mobile/image-pocket-borealis.jpg';
import mobileProject7 from './assets/mobile/image-curiosity.jpg';
import mobileProject8 from './assets/mobile/image-fisheye.jpg';


import desktopProject1 from './assets/desktop/image-deep-earth.jpg';
import desktopProject2 from './assets/desktop/image-night-arcade.jpg';
import desktopProject3 from './assets/desktop/image-soccer-team.jpg';
import desktopProject4 from './assets/desktop/image-grid.jpg';
import desktopProject5 from './assets/desktop/image-from-above.jpg';
import desktopProject6 from './assets/desktop/image-pocket-borealis.jpg';
import desktopProject7 from './assets/desktop/image-curiosity.jpg';
import desktopProject8 from './assets/desktop/image-fisheye.jpg';

const Products = () => {
    return (
        <Container
        sx={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            marginBottom: "3rem",
            paddingBottom: "1.8rem",
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
                    margin: "2rem",
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
            <Grid
            container
            spacing={1.2}
            >
                <Grid
                item
                xs={12}
                sm={3}
                >
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
                        fontFamily:"'Josefin Sans', sans-serif",
                    }}
                    >
                        deep <br/> earth
                    </Typography>
                </Box>
                </Grid>
                <Grid
                item
                xs={12}
                sm={3}
                >
                    <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject2})`,
                        sm: `url(${desktopProject2})`,
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
                        fontFamily:"'Josefin Sans', sans-serif",
                    }}
                    >
                        night <br/> arcade
                    </Typography>
                </Box>
                </Grid>
                <Grid
                item
                xs={12}
                sm={3}
                >
                    <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject3})`,
                        sm: `url(${desktopProject3})`,
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
                        fontFamily:"'Josefin Sans', sans-serif",
                    }}
                    >
                        soccer <br/> team vr
                    </Typography>
                </Box>
                </Grid>
                <Grid
                item
                xs={12}
                sm={3}
                >
                    <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject4})`,
                        sm: `url(${desktopProject4})`,
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
                        fontFamily:"'Josefin Sans', sans-serif",
                    }}
                    >
                        the <br/> grid
                    </Typography>
                </Box>
                </Grid>
                <Grid
                item
                xs={12}
                sm={3}
                >
                    <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject5})`,
                        sm: `url(${desktopProject5})`,
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
                        fontFamily:"'Josefin Sans', sans-serif",
                    }}
                    >
                        from up <br/> above vr
                    </Typography>
                </Box>
                </Grid>
                <Grid
                item
                xs={12}
                sm={3}
                >
                    <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject6})`,
                        sm: `url(${desktopProject6})`,
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
                        fontFamily:"'Josefin Sans', sans-serif",
                    }}
                    >
                        pocket <br/> borealis
                    </Typography>
                </Box>
                </Grid>
                <Grid
                item
                xs={12}
                sm={3}
                >
                    <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject7})`,
                        sm: `url(${desktopProject7})`,
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
                        fontFamily:"'Josefin Sans', sans-serif",
                    }}
                    >
                        the <br/> curiosity
                    </Typography>
                </Box>
                </Grid>
                <Grid
                item
                xs={12}
                sm={3}
                >
                    <Box
                sx={{
                    height: {
                        xs: "200px",
                        sm: "400px",
                    },
                    width: "auto",
                    backgroundImage: {
                        xs: `url(${mobileProject8})`,
                        sm: `url(${desktopProject8})`,
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
                        fontFamily:"'Josefin Sans', sans-serif",
                        left: "20px",
                        bottom: "25px",
                        textTransform: "uppercase",
                        color: "hsl(0, 0%, 100%)",
                    }}
                    >
                        meke it <br/> fisheye
                    </Typography>
                </Box>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: {
                        xs: "flex",
                        sm: "none",
                    },
                    marginTop: "2rem",
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