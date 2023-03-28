import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
// import Navbar from "./components/Navbar/Navbar";

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hanken_grotesk.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
