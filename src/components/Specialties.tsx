"use client";

import { SPECIALTIES } from "@/lib/constants";

export function Specialties() {
  return (
    <section id="especialidades" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-heading font-bold mb-4">
            ESPECIALIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">NOSSAS ESPECIALIDADES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALTIES.map((specialty, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift"
            >
              <img
                src={specialty.image}
                alt={specialty.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-heading font-bold mb-2">{specialty.title}</h3>
                <p className="text-sm mb-4 opacity-90">{specialty.description}</p>
                <a
                  href={specialty.link}
                  className="inline-block text-accent font-heading font-bold hover:text-yellow-300 transition-colors"
                >
                  Conhecer →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flame Divider */}
      <div className="text-center py-8 text-4xl">🔥</div>
    </section>
  );
}
