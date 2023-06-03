import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container } from "@/components/bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS 13.4 Image Gallery",
  description: "Tutorial project by coding in flow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
