# 🔥 NOSSO PONTO - Lanchonete Rústica

Site moderno para a lanchonete NOSSO PONTO em Ariquemes, RO. Construído com as tecnologias mais modernas do mercado.

## 🚀 Stack Tecnológico

- **Frontend:** React 19 + Next.js 15
- **Linguagem:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Ícones:** Lucide React
- **Animações:** Framer Motion
- **Hospedagem:** Vercel

## 📁 Estrutura de Pastas

```
nosso-ponto-lanchonete/
├── src/
│   ├── app/              # App Router (Next.js)
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Página home
│   ├── components/       # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Specialties.tsx
│   │   ├── MenuItem.tsx
│   │   ├── Cart.tsx
│   │   └── Footer.tsx
│   ├── lib/             # Funções utilitárias
│   │   └── constants.ts # Constantes (menu, especialidades)
│   ├── utils/           # Funções auxiliares
│   │   └── cart.ts      # Lógica do carrinho
│   ├── types/           # Tipos TypeScript
│   │   └── index.ts
│   └── styles/          # Estilos globais
│       └── globals.css
├── public/
│   └── images/          # Imagens do site
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🛠️ Como Usar

### 1. **Instalação**

```bash
npm install
```

### 2. **Desenvolvimento Local**

```bash
npm run dev
```

Acesse `http://localhost:3000`

### 3. **Build para Produção**

```bash
npm run build
npm start
```

## 📋 Funcionalidades

✅ **Carrinho de Compras**
- Adicionar/remover itens
- Alterar quantidades
- Persistência no localStorage
- Cálculo automático de total

✅ **Integração WhatsApp**
- Enviar pedidos formatados
- Número configurável
- Mensagem automática com itens e total

✅ **Design Responsivo**
- Mobile first
- Tablet e desktop
- Menu hamburger em mobile

✅ **Performance**
- Otimizado para Vercel
- Imagens otimizadas
- CSS-in-JS com Tailwind

## 🎨 Personalização

### Editar Menu

Abra `src/lib/constants.ts` e edite o array `MENU_ITEMS`:

```typescript
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Seu Prato",
    description: "Descrição",
    price: 99.90,
    image: "/images/seu-prato.jpg",
    category: "pratos",
  },
  // ... mais itens
];
```

### Editar Número WhatsApp

Abra `src/lib/constants.ts` e altere:

```typescript
export const WHATSAPP_NUMBER = "5569987654321"; // Seu número
```

### Editar Cores

Abra `tailwind.config.js` e customize:

```javascript
colors: {
  primary: "#8B4513",      // Marrom
  secondary: "#DC143C",    // Vermelho
  accent: "#FF8C00",       // Laranja
  text: "#2C1810",         // Texto escuro
  light: "#F5F1E8",        // Fundo claro
}
```

### Editar Fontes

As fontes estão em `src/styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;500;700&display=swap');
```

## 📱 Compatibilidade

✅ Desktop (Chrome, Firefox, Safari, Edge)
✅ Tablet (iPad, Android)
✅ Mobile (iPhone, Android)

## 🚀 Deploy na Vercel

1. Faça push para GitHub
2. Acesse https://vercel.com/new
3. Importe o repositório
4. Vercel faz o build e deploy automaticamente

## 🔧 Troubleshooting

**Imagens não aparecem:**
- Verifique se estão em `public/images/`
- Verifique o caminho em `constants.ts`

**WhatsApp não funciona:**
- Verifique o número em `constants.ts`
- Formato: 55 + DDD + número (sem caracteres especiais)

**Carrinho não persiste:**
- Verifique se o navegador permite localStorage
- Modo privado pode não salvar dados

## 📞 Contato

Para editar o site, você pode:
1. Editar diretamente no GitHub
2. Clonar localmente e fazer mudanças
3. Fazer push para atualizar automaticamente

## 📝 Licença

Este site foi criado especialmente para NOSSO PONTO - Lanchonete Rústica em Ariquemes.

---

**Versão:** 2.0
**Última atualização:** Março 2024
**Criado com:** React 19, Next.js 15, TypeScript, Tailwind CSS v4
