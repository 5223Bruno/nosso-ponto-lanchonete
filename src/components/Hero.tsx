"use client";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-churrasco.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-6 text-6xl animate-bounce-soft">🔥</div>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">NOSSO PONTO</h1>
        <p className="text-xl md:text-2xl font-body mb-8">
          Churrasco Autêntico • Espetinhos Suculentos • Tradição em Cada Brasa
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("especialidades")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-heading font-bold transition-colors"
          >
            Peça Agora
          </button>
          <button
            onClick={() => scrollToSection("pratos")}
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-heading font-bold transition-colors"
          >
            Ver Cardápio
          </button>
        </div>
      </div>
    </section>
  );
}
