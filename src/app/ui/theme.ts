'use client';
import { createTheme } from '@mui/material/styles';
import { roboto, raleway, pacifico } from '../font';

declare module '@mui/material/styles' {
  interface CommonColors {
    blue: string;
    orange: string;
  }
}

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },

  typography: {
    fontFamily: [
      roboto.style.fontFamily,
      pacifico.style.fontFamily,
      raleway.style.fontFamily,
    ].join(','),
    h3: {
      fontWeight: 300,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'RaleWay',
          fontSize: '1rem',
        },
      },
    },
  },
});

export default theme;
