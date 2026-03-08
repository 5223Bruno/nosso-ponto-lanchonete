import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "NOSSO PONTO - Lanchonete Rústica em Ariquemes",
  description: "Churrasco autêntico, espetinhos suculentos e tradição em cada brasa. Nosso Ponto é a sua lanchonete em Ariquemes, RO.",
  keywords: "lanchonete, churrasco, espetinhos, Ariquemes, RO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
