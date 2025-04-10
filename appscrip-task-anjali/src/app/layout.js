import "./globals.css";
import NavBar from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Metadata } from 'next';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'), // Change this to your production domain in deployment
  title: 'Elite Fashion Hub',
  description: 'Discover exclusive styles and premium products at Elite Fashion Hub',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>    
        <div className="layout-container">
          <NavBar />
          <main className="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
} 