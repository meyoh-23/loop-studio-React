import { AppBar, Box, Link, List, ListItem, Toolbar, Typography, Button, Drawer, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

    return (
        <AppBar
        sx={{
            backgroundColor: "transparent",
            display: "flex",
            px: 5,
            py: 1,
            flexDirection: "row",
            justifyContent: "space-between",
        }}
        >
            <Toolbar>
                <Typography variant='h5'
                    sx={{
                        color: "White: hsl(0, 0%, 100%)",
                        fontFamily: "'Alata', sans-serif;",
                        display: "flex",
                    }}
                >
                    loopstudio
                </Typography>
            </Toolbar>
            <Box
            sx={{
                display: {
                    xs: "none",
                    sm: "flex",
                }
            }}
            >
                <List
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 0.5,
                    }}
                >
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "0.8rem",
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}
                        >
                            about
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "0.5rem",
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}
                        >
                            careers
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "0.5rem",
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}
                        >
                            events
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "0.5rem",
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}
                        >
                            products
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                        underline='none'
                        sx={{
                            color: "hsl(0, 0%, 100%)",
                            fontFamily: " 'Josefin Sans', sans-serif",
                            textTransform: "capitalize",
                            fontSize: "0.5rem",
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}
                        >
                            support
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Button
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "none",
                            color: "#fff"
                        },
                    }}
                    onClick={toggleMobileMenu}
                >
                    {
                        mobileMenu? 
                        <CloseIcon/>
                        :<MenuIcon/>
                    }
                </Button>
                <Drawer
                anchor='top'
                open={mobileMenu}
                onClose={()=>setMobileMenu(false)}
                sx={{
                    position: "relative",
                    display: {
                        xs: 'flex',
                        sm: "none",
                    },
                }}
                >
                    <Box
                    sx={{
                    display: {
                        xs: 'flex',
                        sm: "none",
                    },
                    flexDirection: "column",
                    backgroundColor: "hsl(0, 0%, 0%)",
                    position: "relative",
                    pt: 3,
                    width: "100vw",
                    height: "100vh",
                }}
                    >
                    <Box
                    role="presentation"
                    onClick={()=>setMobileMenu(false)}
                    onKeyDown={()=>setMobileMenu(false)}
                    >
                        <Container
                        disableGutters
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            px: 2,
                            }}
                        >
                            <Typography
                            sx={{
                                fontFamily: "'Alata', sans-serif;",
                                display: "flex",
                                fontWeight: '400',
                                color: "hsl(0, 0%, 100%)",
                                }}
                            >
                                loopstudio
                            </Typography>
                            <Button
                            variant='text'
                            onClick={() =>setMobileMenu(false)}
                            sx={{color: "hsl(0, 0%, 100%)",}}
                            >
                                <CloseIcon/>
                            </Button>
                        </Container>
                        <Container
                        disableGutters
                        sx={{
                            display: "felx",
                            px:1,
                            alignContent: "flex-start",
                            flexDirection: "column",
                            gap: 2,
                        }}
                        >
                            <List>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        about
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        careers
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        events
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        products
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#"
                                    underline='none'
                                    sx={{
                                        textTransform:"uppercase",
                                        fontsize: "1.125rme",
                                        color: "hsl(0, 0%, 100%)",
                                    }}
                                    >
                                        support
                                    </Link>
                                </ListItem>
                            </List>
                        </Container>
                    </Box>
                    </Box>
                </Drawer>
        </AppBar>
    )
}

export default Navbar;