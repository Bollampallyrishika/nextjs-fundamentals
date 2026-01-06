'use client';
//  Marks this as a Client Component
// Required because MUI ThemeProvider uses React context
// Context + browser rendering must run on the client
import { ThemeProvider, CssBaseline } from '@mui/material';
//  ThemeProvider: provides theme to all MUI components
// 👆CssBaseline: resets default browser styles for consistency

import theme from './theme';
//  Importing the custom MUI theme configuration

type Props = {
  children: React.ReactNode;
    // children represents all components wrapped by this provider
};

export default function MuiThemeProvider({ children }: Props) {
  return (
        //  Makes the custom theme available to the entire app
    <ThemeProvider theme={theme}>
          {/* CssBaseline ensures consistent base styles across browsers */}
      <CssBaseline />
      
      {/* All app components will receive the MUI theme */}
      {children}
    </ThemeProvider>
  );
}
