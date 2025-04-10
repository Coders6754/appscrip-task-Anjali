// src/app/layout.js
import "./globals.css";
import NavBar from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Elite Fashion Hub",
  description: "Discover exclusive styles and premium products at Elite Fashion Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <NavBar />
          <main className="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
