import { createTheme } from '@mui/material/styles';
//  MUI utility function to create a theme object
const theme = createTheme({
  palette: {
    primary: {
     // Controls all color usage across MUI components
      main: '#2563eb', // Tailwind blue-600
       //  Primary color set to Tailwind blue-600
      // Used automatically by MUI Buttons, Typography, etc.
    },
  },
  typography: {
       //  Sets global font for all MUI components
    fontFamily: 'var(--font-geist-sans)',
  },
});

export default theme;
