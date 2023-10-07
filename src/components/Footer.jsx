import { Box, Link, List, ListItem, Typography } from '@mui/material';
import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const year = new Date().getFullYear();


const Footer = () => {
    return (
        <Box
        sx={{
            display: {
                xs: "grid",
                sm: "flex",
            },
            placeContent: {
                xs: "center",
            },
            flexDirection: {
                xs: "column",
                sm: "row",
            },
            padding: "3rem",
            justifyContent: "space-between",
            background: "hsl(0, 0%, 0%)",
        }}
        >
            <Box
            sx={{
                display: "Flex",
                flexDirection: "column",
            }}
            >
                <Typography
                variant='h4'
                sx={{
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: "'Alata', sans-serif",
                    alignItems: {
                        xs: "center",
                    }
                }}
                >
                    loopstudio
                </Typography>
                <Box>
                    <List
                    sx={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        }
                    }}
                    >
                        <ListItem>
                            <Link href="#"
                            underline='none'
                            color="hsl(0, 0%, 100%)"
                            sx={{
                                fontFamily: "'Alata', sans-serif",
                                fontSize: "0.5rem",
                            }}
                            >
                                About
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#"
                            underline='none'
                            color="hsl(0, 0%, 100%)"
                            sx={{
                                fontFamily: "'Alata', sans-serif",
                                fontSize: "0.5rem",
                            }}
                            >
                                Careers
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#"
                            underline='none'
                            color="hsl(0, 0%, 100%)"
                            sx={{
                                fontFamily: "'Alata', sans-serif",
                                fontSize: "0.5rem",
                            }}
                            >
                                Events
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#"
                            underline='none'
                            color="hsl(0, 0%, 100%)"
                            sx={{
                                fontFamily: "'Alata', sans-serif",
                                fontSize: "0.5rem",
                                alignItems: {
                                    xs: "center",
                                    sm: "flex-start",
                                }
                            }}
                            >
                                Products
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#"
                            underline='none'
                            color="hsl(0, 0%, 100%)"
                            sx={{
                                fontFamily: "'Alata', sans-serif",
                                fontSize: "0.9735rem",
                            }}
                            >
                                Support
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
            >
                <Box
                sx={{
                    display: "flex",
                    margin: 2,
                    "&:hover": {
                        cursor: "pointer",
                    }
                }}
                >
                    <Link
                    underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)"
                        }}
                    >
                        <FacebookIcon/>
                    </Link>
                    <Link
                    underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)"
                        }}
                    >
                        <TwitterIcon/>
                    </Link>
                    <Link
                    underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)"
                        }}
                    >
                        <PinterestIcon/>
                    </Link>
                    <Link
                    underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)"
                        }}
                    >
                        <InstagramIcon/>
                    </Link>
                </Box>
                <Box
                color="#fff"
                >
                    <span>&copy; {year}</span> Loopstudios. All rights
                </Box>
            </Box>
        </Box>
    )}

export default Footer;