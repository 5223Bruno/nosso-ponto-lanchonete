export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "pratos" | "bebidas";
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Specialty {
  title: string;
  description: string;
  image: string;
  link: string;
}
