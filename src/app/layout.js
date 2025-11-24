import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Navber from "@/component/navber";
import Footer from "@/component/footer";
import { AuthProvider } from "./context/AuthProvider";

;



const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = { title: "Next App", description: "Next.js + NextAuth Demo" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <AuthProvider>

          <Navber />
          {children}
          <Footer />
       </AuthProvider>
      </body>
    </html>
  );
}
