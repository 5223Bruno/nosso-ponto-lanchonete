"use client";

export function Footer() {
  return (
    <footer className="bg-text text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">NOSSO PONTO</h3>
            <p className="text-sm opacity-80">
              Lanchonete rústica com tradição em churrasco autêntico e espetinhos suculentos em Ariquemes, RO.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">NAVEGAÇÃO</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#especialidades" className="hover:text-accent transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#pratos" className="hover:text-accent transition-colors">
                  Pratos
                </a>
              </li>
              <li>
                <a href="#bebidas" className="hover:text-accent transition-colors">
                  Bebidas
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">CONTATO</h4>
            <p className="text-sm mb-2">📍 Ariquemes, RO</p>
            <p className="text-sm mb-2">📞 (69) 9 9999-9999</p>
            <p className="text-sm">✉️ contato@nossoponto.com</p>
          </div>
        </div>

        <div className="border-t border-light/20 pt-8 text-center text-sm opacity-70">
          <p>&copy; 2024 NOSSO PONTO - Lanchonete Rústica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
