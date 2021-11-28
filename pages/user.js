import { Typography, Button, Divider} from '@mui/material';
import { Box } from '@mui/system';
import LandingHeader from '../components/LandingHeader';
import homeStyle from "../styles/Home.module.css";
import layout from '../styles/Landing.module.css'

const user = () => {


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
                <Typography variant="h3" sx={{ marginBottom: "20px" }}>Genomgång av applikationen</Typography>
                <Typography variant="h5" sx={{ marginBottom: "50px" }}>- Från användarens perspektiv</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "50px" }}>
                    Geolens applikation lär dig mer om kultur, historia och natur genom att knyta information i form av
                    text, bild, ljud och video till en geografisk plats. Du kan välja punkt på kartan,
                    skanna QR-kod på plats eller helt enkelt rikta kameran mot platsen/föremålet för att få direkt tillgång
                    till mer information. 
                </Typography>
                <Divider sx={{marginBottom: "50px"}}/>
                <Typography variant="h4" style={{fontWeight: "600"}} sx={{ marginBottom: "20px"}}>Nedladdning och konto</Typography>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 1</Typography>
                        <Typography variant="h6">
                            Du laddar ner applikationen där appar finns: Helt gratis!
                        </Typography>
                    </Box>
                    <lottie-player 
                            src="https://assets1.lottiefiles.com/private_files/lf30_xtkkgbco.json" 
                            background="transparent"  
                            speed="1"  
                            style={{width: "150px", height: "150px"}} 
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
                            Registrera ett konto eller fortsätt utan.
                        </Typography>
                    </Box>
                </div>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 3</Typography>
                        <Typography variant="h6">
                            Med ett konto kan du ange profilinformation och preferenser. Ange om du har några funktionsvariationer
                            för att få innehållet anpassat efter dina behov.
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets1.lottiefiles.com/packages/lf20_rsqhglyn.json"  
                        background="transparent"  
                        speed="0.4"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                </div>
                <Divider sx={{marginBottom: "50px"}}/>
                <Typography variant="h4" style={{fontWeight: "600"}} sx={{ marginBottom: "20px"}}>Användning</Typography>
                <Typography variant="h6"  sx={{ marginBottom: "20px"}}>Nedan följer ett exempel på hur appen kan användas</Typography>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 1</Typography>
                        <Typography variant="h6">
                            Du är ute och går i en ny stad en vacker sommardag och får syn på en fin byggnad som du gärna vill
                            veta mer om
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets2.lottiefiles.com/packages/lf20_WAMQ5G.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                </div>
                <div className={layout.row}>
                <div className={layout.row}>   
                <lottie-player 
                        src="https://assets8.lottiefiles.com/packages/lf20_2sapbqfh.json"  
                        background="transparent"  
                        speed="0.4"  
                        style={{width: "150px", height: "150px"}}  
                        loop autoplay></lottie-player>
                <lottie-player 
                        src="https://assets4.lottiefiles.com/packages/lf20_K474ba.json"  
                        background="transparent"  
                        speed="0.4"  
                        style={{width: "200px", height: "200px"}}  
                        loop autoplay></lottie-player>
                    </div>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 2</Typography>
                        <Typography variant="h6">
                            Du tar upp appen och får välja mellan att 
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

export default user;