import { LinkedIn, MailOutlined, Twitter } from "@mui/icons-material";
import { AppBar, Divider, Container, Toolbar, Typography, IconButton, Box, Link } from "@mui/material";
import homeStyle from "../styles/Home.module.css"

const Footer = () => {
    return (
        <>
            <Divider sx={{}}/>
            <AppBar position="static"   elevation={0}>
                <Container>
                    <Toolbar className={homeStyle.footer}>
                        <Box>
                            <Typography variant="subtitle1"> © 2021 GeoLens all rights reserved </Typography>
                        </Box>
                        <Box >
                            <Link color="#ffffff"> Privacy policy and legal terms</Link>
                        </Box>
                        <Box>
                            <IconButton sx={{marginRight: "10px", color: "white"}}> <LinkedIn/></IconButton>
                            <IconButton sx={{marginRight: "10px", color: "white"}}> <Twitter/></IconButton>
                            <IconButton sx={{marginRight: "10px", color: "white"}}> <MailOutlined/></IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Footer;