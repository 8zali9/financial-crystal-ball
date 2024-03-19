import { Inter } from "next/font/google";
import "./globals.css";
import Toggles from './contextProviders/Toggles'
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Financial Crystal Ball",
  description: "Engineered by NED-undergrads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toggles>
          <Header />
          {children}
        </Toggles>
      </body>
    </html>
  );
}
