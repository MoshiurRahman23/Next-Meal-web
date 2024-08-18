import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '500', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Super Powerful Next Hero Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={roboto.className}>
        <Navbar></Navbar>
        <div className="">
          {children}
        </div>
        <footer className="bg-red-300 p-16 text-center text-black">
          <p>This is Footer Part</p>
        </footer>
      </body>
    </html>
  );
} 
