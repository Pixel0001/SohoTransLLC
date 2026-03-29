import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoHo Trans LLC | Professional Trucking Services",
  description: "SoHo Trans LLC - Your trusted partner in trucking and logistics. Professional freight services, dedicated drivers, and reliable delivery across the nation.",
  keywords: "trucking, freight, logistics, transportation, hauling, CDL drivers",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#DC2626',
    'msapplication-config': '/browserconfig.xml',
  },
  themeColor: '#DC2626',
  openGraph: {
    title: 'SoHo Trans LLC | Professional Trucking Services',
    description: 'Your trusted partner in trucking and logistics. Professional freight services, dedicated drivers, and reliable delivery across the nation.',
    url: 'https://sohotransllc.com',
    siteName: 'SoHo Trans LLC',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SoHo Trans LLC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoHo Trans LLC | Professional Trucking Services',
    description: 'Your trusted partner in trucking and logistics.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
