import { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "NOSSO PONTO - Lanchonete Rústica em Ariquemes",
  description: "Churrasco autêntico, espetinhos suculentos e tradição em cada brasa.",
};

export default function Page() {
  return <HomePage />;
}
