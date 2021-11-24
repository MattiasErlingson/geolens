import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { MenuOutlined, LoginOutlined } from '@mui/icons-material';

const Header = () => {
    return ( 
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} sx={{backgroundColor: "transparent"}}>
          <Toolbar sx={{paddingTop: "15px", paddingBottom: "15px", marginRight: "70px", marginLeft: "70px"}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "#404244"}}
          >
            <MenuOutlined />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#404244"}}>
              GeoLens
            </Typography>
            <Button style={{color: "#404244", marginRight: "30px"}}>Om</Button>
            <Button style={{color: "#404244", marginRight: "30px"}}>Hjälp</Button>
            <Button style={{color: "#404244", marginRight: "30px"}}>Kontakt</Button>
            <Button variant="outlined" style={{color: "#404244"}}> Logga in <LoginOutlined/></Button>
          </Toolbar>
        </AppBar>
      </Box>
     );
}
 
export default Header;