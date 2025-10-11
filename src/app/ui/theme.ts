'use client';
import { createTheme } from '@mui/material/styles';

import { Roboto, Pacifico, Raleway } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

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
});

export default theme;
