
import { Box, Typography, Paper, TextField, Button, IconButton, Popover } from "@mui/material"
import { PlaceOutlined, DescriptionOutlined, InsertPhotoOutlined, LibraryMusicOutlined, MapOutlined } from "@mui/icons-material";
import MapSelector from "./MapSelector";
import * as React from "react";

const LocationForm = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
            backgroundColor: "#f8f8f8"
        }}>
            <Box maxWidth="50%" sx={{ marginBottom: "200px" }}>
                <Typography variant="h3" sx={{ marginBottom: "20px" }}>Lägg till en sevärdhet till kartan.. </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "50px" }}>
                    Följ instruktionerna nedan för att lägga till en plats. Du kommer ger möjlighet att
                    skriva en beskrivning till platsen, lägga till bilder, videos mm. Efter att platsen är sparad
                    generaras automatisk en QR-kod som kan användas på platsen.
                </Typography>

                <div>
                    <Typography variant="h4" sx={{ marginBottom: "20px" }}>Platsinformation</Typography>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" sx={{ flexGrow: "1" }}> Namn </Typography>
                        <Paper elevation={0} sx={{
                            padding: "20px",
                            marginBottom: "40px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly"
                        }}>
                            <div style={{ flexGrow: "5", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <TextField id="name" label="Namnge platsen" variant="outlined" sx={{ width: "100%" }}>hello</TextField>
                            </div>
                        </Paper>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" sx={{ flexGrow: "1" }}> Adress/Plats </Typography>
                        <Paper elevation={0} sx={{
                            padding: "20px",
                            marginBottom: "40px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <div style={{ flexGrow: "5", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <TextField id="plats" label="Plats" variant="outlined" sx={{ width: "100%", mr: "10px" }}>hello</TextField>
                                <IconButton onClick={handleClick}><MapOutlined color="secondary" /></IconButton>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorReference={"none"}
                                    sx={{       display: "flex",
                                                justifyContent: "center",
                                                alignItems: 'center',}}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Typography sx={{ p: 2 }}>Place map here!</Typography>
                                </Popover>
                            </div>
                        </Paper>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" sx={{ flexGrow: "1" }}> Beskrivning </Typography>
                        <Paper elevation={0} sx={{
                            padding: "20px",
                            marginBottom: "40px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <div style={{ flexGrow: "5", display: "flex", flexDirection: "row" }}>
                                <TextField id="beskrivning"
                                    rows="12"
                                    placeholder="Lägg till beskrivning"
                                    multiline sx={{ width: "100%" }} />
                            </div>
                        </Paper>
                    </div>
                </div>
                <Typography variant="h4" sx={{ marginBottom: "20px" }}>Ljud, Bilder och Video</Typography>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "50px" }}>
                    <div>
                        <Typography variant="h6">Ladda upp bilder</Typography>
                        <Paper variant="outlined" sx={{
                            padding: "80px",
                            marginRight: "40px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <InsertPhotoOutlined fontSize="large" sx={{ marginBottom: "10px" }} />
                            <Button>Ladda upp från filsystem</Button>
                        </Paper>
                    </div>
                    <div>
                        <Typography variant="h6">Ladda upp ljudfil</Typography>
                        <Paper variant="outlined" sx={{
                            padding: "80px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <LibraryMusicOutlined fontSize="large" sx={{ marginBottom: "10px" }} />
                            <Button>Ladda upp från filsystem</Button>
                        </Paper>
                    </div>
                </div>
                <Button variant="contained" size="large">Spara plats</Button>
            </Box>
        </div>
    );
}

export default LocationForm;

