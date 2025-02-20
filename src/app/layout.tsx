import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GlobalContextProvider } from '@/context/GlobalContext';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport: Viewport = {
   width: 'device-width',
   initialScale: 1,
   userScalable: false,
};

export const metadata: Metadata = {
   title: 'Myntra',
   description: 'Myntra clone demo for education purposes',
   icons: {
      icon: [
         { url: '/myntra-icon.svg', sizes: '32x32', type: 'image/svg' },
         { url: '/myntra-icon.svg', sizes: '16x16', type: 'image/svg' },
      ],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <GlobalContextProvider>{children}</GlobalContextProvider>
            <SpeedInsights />
         </body>
      </html>
   );
}
