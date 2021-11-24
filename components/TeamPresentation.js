import { Typography, Box, Avatar } from "@mui/material";
import homeStyle from "../styles/Home.module.css";


const TeamPresentation = () => {
    return (
        <div className={homeStyle.team}>
        <div style={{display: "flex", justifyContent: "center", marginBottom: "40px"}}>
            <Typography variant="h3" sx={{fontWeight: "600"}}> Teamet </Typography>
        </div> 
        <div className={homeStyle.layout}>
            <Box className={homeStyle.member}>
                <Avatar src="mattias.jpg" sx={{width: "200px", height: "200px", marginBottom: "20px"}}/>
                <Typography variant="h6">Mattias Erlingsson</Typography>
            </Box>
            <Box className={homeStyle.member}>
                <Avatar src="vilhelm.jpg" sx={{width: "200px", height: "200px", marginBottom: "20px"}}/>
                <Typography variant="h6">Vilhelm Melkstam</Typography>
            </Box>
            <Box className={homeStyle.member}>
                <Avatar src="anton.jpg" sx={{width: "200px", height: "200px", marginBottom: "20px"}}/>
                <Typography variant="h6">Anton Magnusson</Typography>
            </Box>
            <Box className={homeStyle.member}>
                <Avatar src="carl.jpg" sx={{width: "200px", height: "200px", marginBottom: "20px"}}/>
                <Typography variant="h6">Carl Terve</Typography>
            </Box>
        </div>
        </div>
     );
}
 
export default TeamPresentation;