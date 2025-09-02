import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/ThemeProvider";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jmendiola2025",
  description: "Game Boy Color Pokémon Yellow Vibes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={pressStart.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
