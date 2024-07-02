// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h6: {
      // Custom styles for variant h6
    },
    h4: {
      fontSize:'calc(1.375rem + 1.5vw)',
      fontWeight: 700
      // Custom styles for variant h4
    },
    body1: {
      // Custom styles for variant body1
    },
    // Add other typography variants if needed
  },
});

export default theme;