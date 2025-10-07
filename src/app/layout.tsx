import Header from './ui/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from './ui/theme';
import { ThemeProvider } from '@mui/material/styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
