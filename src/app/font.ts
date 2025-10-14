import { Roboto, Pacifico, Raleway } from 'next/font/google';

export const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

export const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});
export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
