import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";
const theme = createTheme({
    palette:{
        primary:{
        main: "#ffffff",
        light: "#f9f8fd"
        },
        secondary:{
        main:"#eb518c",
        light:" rgb(15, 36, 45)",
        },
        text:{
          main:"#daebed"
        },
        otherColor:{
        main:"#999"
        }
    },
    overrides: {
        MuiAppBar: {
          colorPrimary: {
            backgroundColor: "#1b2129",
          },
        },
      },
      typography:{
        fontFamily:font,
        h1:{fontWeight:700},
        h2:{fontWeight:600},
        h3:{fontWeight:500},
        h4:{fontWeight:400},
        h5:{fontWeight:300},
        h6:{fontWeight:200}
      },
        
});
export default theme;