import { Typography, Button, Divider} from '@mui/material';
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
            backgroundColor: "#f3f3f3"
        }}>

           
            <Box maxWidth="80%" sx={{ marginBottom: "200px", backgroundColor: "#ffffff", borderRadius: "10px", padding: "40px"}}>
                <Typography variant="h3" sx={{ marginBottom: "20px" }}>Genomgång av produkt</Typography>
                <Typography variant="h5" sx={{ marginBottom: "50px" }}>- Från kundens perspektiv</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "50px" }}>
                    Geolens arbetar för att göra det enklare för kommuner och regioner att tillgängliggöra och sprida information
                    om kultur, natur och historia i närområdet. Ni (kunderna) skapar intressepunkter.... fortsätt skriva intro.
                </Typography>
                <Divider sx={{marginBottom: "50px"}}/>
                <Typography variant="h4" style={{fontWeight: "600"}} sx={{ marginBottom: "20px"}}>Registrering</Typography>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 1</Typography>
                        <Typography variant="h6">
                            Du betalar en startavgift för att ansluta dig till tjänsten.
                            I avtalet ingår support och stödmaterial som hjälper dig att komma igång
                            på bara några sekunder.
                        </Typography>
                    </Box>
                    <lottie-player 
                            src="https://assets5.lottiefiles.com/private_files/lf30_wai6psec.json" 
                            background="transparent"  
                            speed="1"  
                            style={{width: "300px", height: "300px"}} 
                            loop autoplay>
                    </lottie-player>
                </div>

                <div className={layout.row}>
                    <lottie-player 
                        src="https://assets2.lottiefiles.com/packages/lf20_q5pk6p1k.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay>
                    </lottie-player>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 2</Typography>
                        <Typography variant="h6">
                            Du får ett konto som är registrerat på er och ni lägger enkelt till
                            fler konton för alla på företaget som behöver tillgång till tjänsten.
                        </Typography>
                    </Box>
                </div>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 3</Typography>
                        <Typography variant="h6">
                            Logga in och du är redo att köra!
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"  
                        background="transparent"  
                        speed="0.4"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                </div>
                <Divider sx={{marginBottom: "50px"}}/>
                <Typography variant="h4" style={{fontWeight: "600"}} sx={{ marginBottom: "20px"}}>Lägg till ny intressepunkt</Typography>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 1</Typography>
                        <Typography variant="h6">
                            Du har information om något som du vill göra tillgängligt för användarna i appen.
                            Det kan vara allt från platser, byggnader, konstverk på museum eller kanske en vandringsled?
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets10.lottiefiles.com/packages/lf20_m0ze3ipv.json"  
                        background="transparent"  
                        speed="0.4"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                </div>
                <div className={layout.row}>
                <lottie-player 
                        src="https://assets8.lottiefiles.com/packages/lf20_baB1GS.json"  
                        background="transparent"  
                        speed="0.4"  
                        style={{width: "150px", height: "150px"}}  
                        loop autoplay></lottie-player>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 2</Typography>
                        <Typography variant="h6">
                            Klicka på lägg till ny intressepunkt
                        </Typography>
                    </Box>
                </div>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 3</Typography>
                        <Typography variant="h6">
                            Ange plats på kartan eller address där användarna hittar intressepunkten
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets10.lottiefiles.com/packages/lf20_bOWm9q.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                </div>
                <div className={layout.row}>
                <lottie-player 
                        src="https://assets5.lottiefiles.com/temp/lf20_jJxas0.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "150px", height: "150px"}}  
                        loop autoplay></lottie-player>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 4</Typography>
                        <Typography variant="h6">
                            Ange namn och beskrivning i formuläret
                        </Typography>
                    </Box>
                </div>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 5</Typography>
                        <Typography variant="h6">
                            Ladda upp bilder, videos eller ljudfiler för att ge användarna olika sätt att
                            uppleva innehållet.
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets10.lottiefiles.com/packages/lf20_g3dzz0wz.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "400px", height: "400px"}}  
                        loop autoplay></lottie-player>
                </div>
                <div className={layout.row}>
                <lottie-player 
                        src="https://assets10.lottiefiles.com/packages/lf20_3Dymt9.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 6</Typography>
                        <Typography variant="h6">
                            Publicera! Nu kan invånare och turister ta del av innehållet
                            genom mobilen. 
                        </Typography>
                    </Box>
                </div>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 7</Typography>
                        <Typography variant="h6">
                            Det genereras en QR-kod för intressepunkten som du kan skriva ut och
                            placera i anslutning till intressepunkten. 
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets5.lottiefiles.com/packages/lf20_ksovfkm5.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                </div>
                <div className={layout.row}>
                <lottie-player 
                        src="https://assets9.lottiefiles.com/packages/lf20_utwymwab.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 8</Typography>
                        <Typography variant="h6">
                            I er profil kan du enkelt ändra och uppdatera redan skapade intressepunkter.
                            Där finns det även möjlighet att se statistik över antalet besökare och mycket mera.
                        </Typography>
                    </Box>
                </div>
                <Divider sx={{marginBottom: "50px"}}/>
                <Typography variant="h4" sx={{marginBottom: "20px"}}>Feedback?</Typography>
                <Typography variant="h6">
                    Vi uppskattar att du tog dig tid att lära dig mer om GeoLens produkt.
                    Svara gärna på enkäten nedan, då kan vi fortsätta utveckla produkten i linje
                    med era behov. Tack!
                </Typography>
                <Button 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSedm8J3A7xCx8PxTEL-6ahD-mL8zxg02JaZdq5-QcupA846sg/viewform?usp=sf_link"
                    color="secondary" 
                    variant="contained" 
                    sx={{marginTop: "50px", width: "200px", height: "50px"}}>
                    Svara på enkät
                </Button>
            </Box>
        </div>
        </>
     );
}

export default customer;