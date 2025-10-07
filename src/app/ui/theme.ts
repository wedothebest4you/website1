'use client';

import { createTheme } from '@mui/material/styles';

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
    h3: {
      fontWeight: 300,
    },
  },
});

export default theme;
