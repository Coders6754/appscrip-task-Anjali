import "./globals.css";
import NavBar from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: 'Elite Fashion Hub',
  description: 'Discover exclusive styles and premium products at Elite Fashion Hub',
  metadataBase: new URL('https://appscrip-task-anjali.vercel.app'),
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