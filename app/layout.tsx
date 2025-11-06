import LightRays from '@/components/LightRays';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Martian_Mono, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const martianMono = Martian_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevEvent',
  description: 'Event management platform for developers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <Navbar />

        <div className="absolute inset-0 top-0 -z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.8}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0.05}
            // className="custom-rays"
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
