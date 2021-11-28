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
                            Du tar upp appen kan välja mellan att få mer information genom att klicka på kartan eller skanna en QR-kod på plats.
                        </Typography>
                    </Box>
                </div>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 3</Typography>
                        <Typography variant="h6">
                            Direkt får du upp en intressant beskrivning av byggnaden och där finns även video, bilder och ljudklipp
                            där byggnaden beskrivs mer genomgående.
                        </Typography>
                    </Box>
                    <div className={layout.row}>
                    <lottie-player 
                        src="https://assets5.lottiefiles.com/temp/lf20_jJxas0.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "80px", height: "80px", marginRight: "10px"}}  
                        loop autoplay></lottie-player> 
                    <lottie-player 
                        src="https://assets7.lottiefiles.com/packages/lf20_ehfMXK.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "80px", height: "80px", marginRight: "10px"}}  
                        loop autoplay></lottie-player>
                    <lottie-player 
                        src="https://assets7.lottiefiles.com/packages/lf20_GZxjzF.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "80px", height: "80px", marginRight: "10px"}}  
                        loop autoplay></lottie-player>
                    <lottie-player 
                        src="https://assets7.lottiefiles.com/packages/lf20_S6kNOp.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "100px", height: "100px"}}  
                        loop autoplay></lottie-player>
                    </div>
                </div>
                <div className={layout.row}>
                <lottie-player 
                        src="https://assets6.lottiefiles.com/packages/lf20_ptfmt0ts.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "150px", height: "150px"}}  
                        loop autoplay></lottie-player>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 4</Typography>
                        <Typography variant="h6">
                            Du väljer videoklippet och lär dig massor! Samtidigt checkar du in för att logga din aktivitet och 
                            tipsa vänner om platsen. 
                        </Typography>
                    </Box>
                </div>
                <div className={layout.row}>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 5</Typography>
                        <Typography variant="h6">
                            Samtidigt tjänar du poäng för varje besökt plats och kan tävla mot andra användare. Här finns det möjlighet
                            att vinna fina priser om man är en flitig upptäckare.
                        </Typography>
                    </Box>
                    <lottie-player 
                        src="https://assets1.lottiefiles.com/private_files/lf30_x3xhibxx.json"  
                        background="transparent"  
                        speed="0.5"  
                        style={{width: "150px", height: "150px"}}  
                        loop autoplay></lottie-player>
                </div>
                <div className={layout.row}>
                <lottie-player 
                        src="https://assets2.lottiefiles.com/packages/lf20_WAMQ5G.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "300px", height: "300px"}}  
                        loop autoplay></lottie-player>
                    <Box maxWidth="40%">
                        <Typography variant="h4">Steg 6</Typography>
                        <Typography variant="h6">
                            Nöjd går du vidar mot nya äventyr, alltid med vetskapen om att nya lärdomar bara är ett klick bort.
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
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfeSmUZSO8cebDpMobzgXFV1YSCBqiKUDao8dw-eXDy4KRqHA/viewform?usp=sf_link"
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