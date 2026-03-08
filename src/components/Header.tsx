"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-light shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <h1 className="text-2xl font-heading font-bold text-primary">NOSSO PONTO</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <a href="#especialidades" className="font-body font-medium hover:text-primary transition-colors">
              CARDÁPIO
            </a>
          </li>
          <li>
            <a href="#pratos" className="font-body font-medium hover:text-primary transition-colors">
              PRATOS
            </a>
          </li>
          <li>
            <a href="#bebidas" className="font-body font-medium hover:text-primary transition-colors">
              BEBIDAS
            </a>
          </li>
          <li>
            <a href="#sobre" className="font-body font-medium hover:text-primary transition-colors">
              SOBRE
            </a>
          </li>
          <li>
            <a href="#contato" className="font-body font-medium hover:text-primary transition-colors">
              CONTATO
            </a>
          </li>
          <li>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-primary" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-primary" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={toggleMenu} className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary/10">
          <ul className="container mx-auto px-4 py-4 space-y-4">
            <li>
              <a
                href="#especialidades"
                className="block font-body font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CARDÁPIO
              </a>
            </li>
            <li>
              <a
                href="#pratos"
                className="block font-body font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PRATOS
              </a>
            </li>
            <li>
              <a
                href="#bebidas"
                className="block font-body font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BEBIDAS
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="block font-body font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SOBRE
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="block font-body font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
