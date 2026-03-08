import { MenuItem, Specialty } from "@/types";

export const WHATSAPP_NUMBER = "5569987654321"; // Replace with actual number

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Espetinhos de Carne",
    description: "Carnes premium grelhadas na brasa, temperadas com maestria",
    price: 35.90,
    image: "/images/prato-espetinhos.jpg",
    category: "pratos",
  },
  {
    id: "2",
    name: "Picanha Grelhada",
    description: "Corte selecionado preparado na técnica tradicional de churrascaria",
    price: 65.90,
    image: "/images/prato-picanha.jpg",
    category: "pratos",
  },
  {
    id: "3",
    name: "Costela Suculenta",
    description: "Costela macia e suculenta, grelhada na brasa com tempero especial",
    price: 58.90,
    image: "/images/prato-costela.jpg",
    category: "pratos",
  },
  {
    id: "4",
    name: "Frango Grelhado",
    description: "Frango inteiro ou em partes, grelhado na brasa com especiarias",
    price: 42.90,
    image: "/images/prato-frango.jpg",
    category: "pratos",
  },
  {
    id: "5",
    name: "Linguiça Artesanal",
    description: "Linguiça caseira grelhada, com sabor autêntico e tradicional",
    price: 38.90,
    image: "/images/prato-linguica.jpg",
    category: "pratos",
  },
  {
    id: "6",
    name: "Moqueca de Peixe",
    description: "Peixe fresco em molho de coco e dendê, acompanhado de arroz",
    price: 52.90,
    image: "/images/prato-moqueca.jpg",
    category: "pratos",
  },
  {
    id: "7",
    name: "Água",
    description: "Água filtrada gelada",
    price: 3.00,
    image: "/images/bebida-agua.jpg",
    category: "bebidas",
  },
  {
    id: "8",
    name: "Suco Natural",
    description: "Suco fresco preparado na hora",
    price: 8.90,
    image: "/images/bebida-suco.jpg",
    category: "bebidas",
  },
  {
    id: "9",
    name: "Chopp Artesanal",
    description: "Chopp gelado de qualidade premium",
    price: 12.90,
    image: "/images/bebida-chopp.jpg",
    category: "bebidas",
  },
  {
    id: "10",
    name: "Caipirinha",
    description: "Caipirinha tradicional com cachaça premium",
    price: 18.90,
    image: "/images/bebida-caipirinha.jpg",
    category: "bebidas",
  },
  {
    id: "11",
    name: "Vinho Tinto",
    description: "Vinho tinto selecionado para acompanhar o churrasco",
    price: 45.90,
    image: "/images/bebida-vinho.jpg",
    category: "bebidas",
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    title: "ESPETINHOS",
    description: "Carnes premium grelhadas na brasa, temperadas com maestria. Cada espeto é uma explosão de sabor.",
    image: "/images/espetinhos-hero.jpg",
    link: "#pratos",
  },
  {
    title: "CHURRASCO",
    description: "Picanha, costela e cortes selecionados. Preparados com a técnica tradicional de churrascaria.",
    image: "/images/carne-premium.jpg",
    link: "#pratos",
  },
  {
    title: "AMBIENTE",
    description: "Espaço rústico e acolhedor, perfeito para reunir amigos e família. Viva a experiência autêntica.",
    image: "/images/churrascaria-ambiente.jpg",
    link: "#sobre",
  },
];

export const GALLERY_IMAGES = [
  "/images/ambiente-1.jpg",
  "/images/ambiente-2.jpg",
  "/images/ambiente-3.jpg",
  "/images/ambiente-4.jpg",
];
