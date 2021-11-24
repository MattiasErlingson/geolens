import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#3F5EFB"
    },
    secondary: {
      main: "#FC466B"
    }
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});

theme = responsiveFontSizes(theme);

export default theme;