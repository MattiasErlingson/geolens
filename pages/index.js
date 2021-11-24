import { Typography, Box, Paper, Button, Divider} from "@mui/material";
import Link from "next/link"
import Container from "@mui/material/Container";
import Header from "../components/Header";
import homeStyle from "../styles/Home.module.css";
import Footer from "../components/Footer.js";
import TeamPresentation from "../components/TeamPresentation";

const Homepage = () => {
  return (
    <div>
      <Header/>
      <div className={homeStyle.layout} style={{marginTop: "100px", marginBottom: "150px"}}>
      <Box sx={{maxWidth: "sm"}}>
        <Typography className={homeStyle.title} variant="h1" sx={{fontWeight: "600"}}>
          GeoLens
        </Typography>
        <Typography variant="h5" sx={{marginBottom: "40px"}}>
          Utforska- och lär dig mer om kultur, natur och historia genom mobilen
        </Typography>
        <Typography sx={{marginTop: "20px"}}>
          Vi förhöjer upplevelser inom kultur och natur genom att
          förse kommuner och regioner med en digital infrastruktur som tillgängligör 
          information om intressanta platser, byggnader och objekt. Ni lägger in information
          kopplad till en geografisk plats och invånarna upptäcker dem enkelt med text, video
          , ljud eller AR genom appen. 
        </Typography>
        <div className={homeStyle.buttonGroup}>
          <Link href="/customer">
            <Button variant="outlined" sx={{marginRight: "20px", width: "220px", height: "50px"}}>Testa som kund</Button>
          </Link>
          <Link href="/user">
            <Button variant="contained" sx={{width: "220px", height: "50px"}}>
              Testa som användare
            </Button>
          </Link>
        </div>
      </Box>
      <Box sx={{maxWidth: "sm"}}>     
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_svy4ivvy.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px"}}  loop autoplay></lottie-player>
      </Box>
      </div>
      <TeamPresentation/>
      <Footer/>
    </div>
  );
};

export default Homepage;