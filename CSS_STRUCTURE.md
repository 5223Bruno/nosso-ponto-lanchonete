# 🎨 Estrutura CSS - NOSSO PONTO

O CSS foi organizado por responsabilidade para facilitar manutenção e customização no WordPress.

## 📁 Arquivos CSS

### 1. **base.css** (3.5 KB)
Estilos fundamentais do site:
- Reset e variáveis CSS (cores, sombras)
- Tipografia global
- Componentes base (buttons, badges, containers)
- Animações reutilizáveis

**Quando editar:** Mudar cores globais, fontes, espaçamentos padrão

### 2. **header.css** (1.6 KB)
Estilos da navegação:
- Navbar sticky
- Logo e branding
- Menu de navegação
- Menu mobile (hamburger)

**Quando editar:** Mudar aparência do header, cores da navegação

### 3. **home.css** (9.5 KB)
Estilos das seções principais:
- Hero section
- Flame divider
- Especialidades
- Pratos
- Bebidas
- Sobre
- Galeria
- Contato

**Quando editar:** Alterar layout das seções, cards, grids

### 4. **footer.css** (314 B)
Estilos do rodapé:
- Fundo e cores
- Tipografia

**Quando editar:** Mudar cor ou estilo do footer

### 5. **components.css** (4.4 KB)
Componentes interativos:
- Carrinho flutuante
- Modais (carrinho e galeria)
- Botões e controles

**Quando editar:** Alterar aparência do carrinho, modais, botões flutuantes

### 6. **style.css** (19 KB) - LEGADO
Arquivo original consolidado. Pode ser removido após validação dos novos arquivos.

## 🔄 Ordem de Carregamento

Os arquivos CSS são carregados nesta ordem no `index.html`:

```html
<link rel="stylesheet" href="css/base.css">       <!-- 1. Base -->
<link rel="stylesheet" href="css/header.css">     <!-- 2. Header -->
<link rel="stylesheet" href="css/home.css">       <!-- 3. Home -->
<link rel="stylesheet" href="css/footer.css">     <!-- 4. Footer -->
<link rel="stylesheet" href="css/components.css"> <!-- 5. Components -->
```

**Importante:** A ordem importa! Estilos posteriores sobrescrevem anteriores.

## 🎯 Variáveis CSS Globais (em base.css)

```css
:root {
    --primary: #8B4513;        /* Marrom escuro */
    --primary-dark: #5C2E0F;   /* Marrom mais escuro */
    --secondary: #DC143C;      /* Vermelho queimado */
    --accent: #FF8C00;         /* Laranja fogo */
    --text: #2C1810;           /* Texto escuro */
    --light: #F5F1E8;          /* Fundo claro */
    --border: #D4A574;         /* Bordas */
    --shadow: rgba(0, 0, 0, 0.3); /* Sombras */
}
```

**Para mudar cores globalmente:** Edite apenas estas variáveis em `base.css`

## 📱 Responsividade

Breakpoints usados em todos os arquivos:

```css
@media (max-width: 768px)  { /* Tablets */ }
@media (max-width: 480px)  { /* Celulares */ }
```

## 🔧 Como Customizar

### Exemplo 1: Mudar cor primária
1. Abra `css/base.css`
2. Procure por `--primary: #8B4513;`
3. Mude para a cor desejada (ex: `#FF6B6B`)
4. Salve e recarregue o navegador

### Exemplo 2: Mudar tamanho do header
1. Abra `css/header.css`
2. Procure por `.navbar`
3. Altere `padding: 15px 20px;` para o valor desejado

### Exemplo 3: Mudar layout dos pratos
1. Abra `css/home.css`
2. Procure por `.pratos-grid`
3. Altere `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`

## 🚀 Para WordPress

Ao migrar para WordPress:

1. **Opção 1:** Copie todo o conteúdo dos 5 arquivos para um único CSS customizado
2. **Opção 2:** Mantenha a estrutura separada criando arquivos de tema
3. **Opção 3:** Use um plugin de CSS customizado para cada seção

## ✅ Checklist de Customização

- [ ] Cores primárias (base.css)
- [ ] Logo e header (header.css)
- [ ] Textos e imagens (home.css)
- [ ] Footer (footer.css)
- [ ] Carrinho e modais (components.css)
- [ ] Testar em mobile (480px)
- [ ] Testar em tablet (768px)
- [ ] Testar em desktop (1200px+)

## 📞 Suporte

Se precisar voltar ao arquivo único:
- Use `css/style.css` que contém tudo consolidado
- Remova os links dos 5 arquivos
- Adicione apenas: `<link rel="stylesheet" href="css/style.css">`

---

**Versão:** 1.0  
**Estrutura CSS Separada:** Janeiro 2024
