import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
export const metadata: Metadata = {
  title: "Shraddha Bhardwaj | Software Engineer",
  description: "Portfolio of Shraddha Bhardwaj, full-stack developer.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
