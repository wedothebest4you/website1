import './global.css';
import Header from './ui/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from './ui/theme';
import { ThemeProvider } from '@mui/material/styles';
import { roboto, raleway, pacifico } from './font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${pacifico.variable} ${raleway.variable}`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="jafia" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
