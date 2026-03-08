"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Footer } from "@/components/Footer";
import { MenuItem } from "@/components/MenuItem";
import { Cart } from "@/components/Cart";
import { MENU_ITEMS } from "@/lib/constants";
import { CartItem, MenuItem as MenuItemType } from "@/types";
import { addToCart, removeFromCart, updateCartItemQuantity, getCartFromLocalStorage } from "@/utils/cart";

export function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    setCartItems(getCartFromLocalStorage());
  }, []);

  const handleAddToCart = (item: MenuItemType) => {
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    const updatedCart = addToCart(cartItem);
    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (itemId: string) => {
    const updatedCart = removeFromCart(itemId);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    const updatedCart = updateCartItemQuantity(itemId, quantity);
    setCartItems(updatedCart);
  };

  const pratosItems = MENU_ITEMS.filter((item) => item.category === "pratos");
  const bebidasItems = MENU_ITEMS.filter((item) => item.category === "bebidas");

  return (
    <main className="min-h-screen bg-light">
      <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />

      <Hero />

      <Specialties />

      {/* PRATOS Section */}
      <section id="pratos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-heading font-bold mb-4">
              NOSSOS PRATOS
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">PRATOS ESPECIAIS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pratosItems.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* Flame Divider */}
        <div className="text-center py-8 text-4xl">🔥</div>
      </section>

      {/* BEBIDAS Section */}
      <section id="bebidas" className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-heading font-bold mb-4">
              BEBIDAS
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">NOSSAS BEBIDAS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bebidasItems.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* Flame Divider */}
        <div className="text-center py-8 text-4xl">🔥</div>
      </section>

      {/* SOBRE Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">SOBRE NOSSO PONTO</h2>
              <p className="text-lg text-gray-700 mb-4">
                Somos uma lanchonete rústica com tradição em churrasco autêntico. Há anos servindo os melhores espetinhos
                e carnes grelhadas na brasa em Ariquemes.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nosso ambiente acolhedor e rústico é perfeito para reunir amigos e família. Cada prato é preparado com
                maestria e ingredientes selecionados.
              </p>
              <p className="text-lg text-gray-700">
                Venha vivenciar a experiência autêntica de um verdadeiro churrasco em Ariquemes!
              </p>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/churrascaria-ambiente.jpg"
                alt="Ambiente Nosso Ponto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO Section */}
      <section id="contato" className="py-16 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-primary mb-8">ENTRE EM CONTATO</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-3xl mb-4">📍</p>
              <h3 className="font-heading font-bold text-primary mb-2">LOCALIZAÇÃO</h3>
              <p className="text-gray-700">Ariquemes, RO</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-3xl mb-4">📞</p>
              <h3 className="font-heading font-bold text-primary mb-2">TELEFONE</h3>
              <p className="text-gray-700">(69) 9 9999-9999</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-3xl mb-4">⏰</p>
              <h3 className="font-heading font-bold text-primary mb-2">HORÁRIO</h3>
              <p className="text-gray-700">Seg-Dom: 11h às 23h</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Cart Sidebar */}
      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </main>
  );
}
