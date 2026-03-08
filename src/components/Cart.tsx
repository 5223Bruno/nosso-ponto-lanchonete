"use client";

import { CartItem } from "@/types";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { calculateTotal, sendToWhatsApp } from "@/utils/cart";

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
}

export function Cart({ items, isOpen, onClose, onUpdateQuantity, onRemove }: CartProps) {
  const total = calculateTotal(items);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end md:justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Cart Panel */}
      <div className="relative bg-white w-full md:w-96 h-screen md:h-auto md:rounded-lg shadow-2xl flex flex-col max-h-screen md:max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary/10">
          <h2 className="text-2xl font-heading font-bold text-primary">Seu Carrinho</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Seu carrinho está vazio</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-light rounded-lg border border-primary/10">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-primary">{item.name}</h3>
                    <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-primary/10 rounded transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-primary/10 rounded transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="p-1 hover:bg-red-100 rounded transition-colors text-secondary"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-primary/10 p-6 space-y-4">
            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-secondary">R$ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                sendToWhatsApp(items);
                onClose();
              }}
              className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-lg font-heading font-bold transition-colors"
            >
              ENVIAR PEDIDO
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
