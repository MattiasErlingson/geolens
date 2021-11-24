import { Typography, Paper} from '@mui/material';
import { Box } from '@mui/system';
import LandingHeader from '../components/LandingHeader';
import homeStyle from "../styles/Home.module.css";
import layout from '../styles/Landing.module.css'

const customer = () => {

    const col1 = "#FC466B";
    const col2 = "#3F5EFB";

    return (
        <>
        <LandingHeader/>
        <div style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            backgroundColor: "#f8f8f8"
        }}>
            <Box maxWidth="60%" sx={{ marginBottom: "200px", backgroundColor: "#ffffff", borderRadius: "10px", padding: "20px"}}>
                <Typography variant="h3" sx={{ marginBottom: "20px" }}>Genomgång av produkt</Typography>
                <Typography variant="h5" sx={{ marginBottom: "20px" }}>- Från kundens perspektiv</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "50px" }}>
                    Geolens arbetar för att göra det enklare för kommuner och regioner att tillgängliggöra och sprida information
                    om kultur, natur och historia i närområdet. Ni (kunderna) skapar intressepunkter.... fortsätt skriva intro.
                </Typography>
                <Paper className={layout.box} sx={{backgroundColor: "#FC466B", width: "50px", height: "50px", marginBottom: "50px"}}>
                    <Typography variant="h3" sx={{color: "white"}}>1</Typography>
                </Paper>
                <Paper className={layout.box} sx={{backgroundColor: "#3F5EFB", width: "50px", height: "50px", marginBottom: "50px"}}>
                    <Typography variant="h3" sx={{color: "white"}}>2</Typography>
                </Paper>
                <Paper className={layout.box} sx={{backgroundColor: "#FC466B", width: "50px", height: "50px", marginBottom: "50px"}}>
                    <Typography variant="h3" sx={{color: "white"}}>3</Typography>
                </Paper>
                <Paper className={layout.box} sx={{backgroundColor: "#3F5EFB", width: "50px", height: "50px"}}>
                    <Typography variant="h3" sx={{color: "white"}}>4</Typography>
                </Paper>
            </Box>
        </div>
        </>
     );
}
 
export default customer;