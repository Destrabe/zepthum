import "./global.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Zepthum",
  description: "A Next.js project for Zepthum",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
