"use client";

import { MenuItem as MenuItemType } from "@/types";

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
}

export function MenuItem({ item, onAddToCart }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 hover-lift">
      <div className="relative w-full h-48 overflow-hidden bg-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-heading font-bold text-primary mb-2">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-secondary">R$ {item.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-body font-medium transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
