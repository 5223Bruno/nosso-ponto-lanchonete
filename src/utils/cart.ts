import { CartItem } from "@/types";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export const getCartFromLocalStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("nosso-ponto-cart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCartToLocalStorage = (cart: CartItem[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("nosso-ponto-cart", JSON.stringify(cart));
};

export const addToCart = (item: CartItem): CartItem[] => {
  const cart = getCartFromLocalStorage();
  const existingItem = cart.find((c) => c.id === item.id);

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCartToLocalStorage(cart);
  return cart;
};

export const removeFromCart = (itemId: string): CartItem[] => {
  const cart = getCartFromLocalStorage();
  const filtered = cart.filter((item) => item.id !== itemId);
  saveCartToLocalStorage(filtered);
  return filtered;
};

export const updateCartItemQuantity = (itemId: string, quantity: number): CartItem[] => {
  const cart = getCartFromLocalStorage();
  const item = cart.find((c) => c.id === itemId);

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(itemId);
    }
    item.quantity = quantity;
  }

  saveCartToLocalStorage(cart);
  return cart;
};

export const clearCart = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("nosso-ponto-cart");
};

export const calculateTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const generateWhatsAppMessage = (cart: CartItem[]): string => {
  const total = calculateTotal(cart);
  const items = cart.map((item) => `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`).join("\n");

  return `Olá! Gostaria de fazer um pedido:\n\n${items}\n\n*Total: R$ ${total.toFixed(2)}*\n\nPor favor, confirme a disponibilidade e o tempo de entrega.`;
};

export const sendToWhatsApp = (cart: CartItem[]): void => {
  const message = generateWhatsAppMessage(cart);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
