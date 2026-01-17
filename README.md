# 🔥 NOSSO PONTO - Lanchonete Rústica

Site estático HTML, CSS e JavaScript puro para a lanchonete NOSSO PONTO em Ariquemes.

## 📁 Estrutura de Pastas

```
nosso_ponto_static/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos rústicos
├── js/
│   └── script.js       # Funcionalidades (carrinho, galeria, menu)
├── images/             # Todas as imagens (pratos, bebidas, ambiente)
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. **Abrir Localmente**
Simplesmente abra o arquivo `index.html` no navegador:
```
Duplo clique em index.html
ou
Arraste o arquivo para o navegador
```

### 2. **Configurar Número do WhatsApp**
Edite o arquivo `js/script.js` e procure por:
```javascript
const WHATSAPP_NUMBER = '5569999999999'; // Formato: 55 + DDD + número
```

Substitua pelo número real da lanchonete (ex: 5569987654321)

### 3. **Editar Conteúdo**
Abra `index.html` em um editor de texto (VS Code, Notepad++, etc) e edite:
- Nomes dos pratos e bebidas
- Preços
- Descrições
- Informações de contato

### 4. **Substituir Imagens**
Coloque suas fotos reais na pasta `images/`:
- `prato-*.jpg` - Fotos dos pratos
- `bebida-*.jpg` - Fotos das bebidas
- `ambiente-*.jpg` - Fotos do ambiente
- `hero-churrasco.jpg` - Imagem do hero
- `espetinhos-hero.jpg`, `carne-premium.jpg`, `churrascaria-ambiente.jpg` - Imagens das especialidades

## 📋 Funcionalidades

✅ **Carrinho de Compras**
- Adicionar/remover itens
- Alterar quantidades
- Cálculo automático de total
- Persistência no localStorage

✅ **Integração WhatsApp**
- Enviar pedidos formatados
- Número configurável
- Mensagem automática com itens e total

✅ **Galeria de Fotos**
- Visualizar em tela cheia
- Navegação com setas
- Teclado: ← → para navegar, ESC para fechar

✅ **Menu Mobile**
- Responsivo para celulares
- Menu hamburger
- Navegação suave

✅ **Design Rústico**
- Paleta de cores quentes
- Tipografia impactante
- Animações suaves

## 🛠️ Personalização

### Editar Cores
Abra `css/style.css` e procure por `:root`:
```css
:root {
    --primary: #8B4513;        /* Marrom escuro */
    --secondary: #DC143C;      /* Vermelho */
    --accent: #FF8C00;         /* Laranja */
    --text: #2C1810;           /* Texto */
    --light: #F5F1E8;          /* Fundo claro */
}
```

### Editar Fontes
Abra `index.html` e procure por `<link rel="preconnect"...>` para mudar as fontes do Google Fonts.

### Adicionar Novos Pratos
Copie um card de prato em `index.html` e adapte:
```html
<div class="prato-card">
    <div class="prato-image">
        <img src="images/prato-novo.jpg" alt="Novo Prato">
    </div>
    <div class="prato-content">
        <h3>Nome do Prato</h3>
        <p>Descrição do prato</p>
        <div class="prato-footer">
            <span class="preco">R$ XX,XX</span>
            <button class="btn-add" onclick="adicionarAoCarrinho('Nome do Prato', XX.XX)">Adicionar</button>
        </div>
    </div>
</div>
```

## 📱 Compatibilidade

✅ Desktop (Chrome, Firefox, Safari, Edge)
✅ Tablet (iPad, Android)
✅ Mobile (iPhone, Android)
✅ WordPress (upload como tema customizado)

## 🌐 Deploy no WordPress

### Opção 1: Upload Direto
1. Vá para WordPress → Aparência → Editor de Temas
2. Copie o conteúdo de `index.html` para o template
3. Copie `css/style.css` para o CSS customizado
4. Copie `js/script.js` para o JavaScript customizado
5. Upload das imagens via Mídia

### Opção 2: Usar como Tema Customizado
1. Crie uma pasta `nosso-ponto` em `/wp-content/themes/`
2. Copie todos os arquivos para lá
3. Crie um arquivo `style.css` com header do WordPress
4. Ative o tema em WordPress

### Opção 3: Plugin de Página
1. Use um plugin como "Elementor" ou "Page Builder"
2. Importe o HTML
3. Customize conforme necessário

## 🔧 Troubleshooting

**Imagens não aparecem:**
- Verifique se os caminhos em `index.html` estão corretos
- As imagens devem estar em `images/` com os nomes exatos

**WhatsApp não funciona:**
- Verifique o número em `js/script.js`
- Formato deve ser: 55 + DDD + número (sem caracteres especiais)

**Carrinho não persiste:**
- Verifique se o navegador permite localStorage
- Alguns navegadores em modo privado não salvam dados

**Menu mobile não funciona:**
- Verifique se `js/script.js` está carregando
- Abra o console do navegador (F12) para ver erros

## 📞 Contato e Suporte

Para editar o site, você pode:
1. Usar um editor de texto (VS Code, Sublime Text)
2. Usar um editor visual (Dreamweaver, Bluefish)
3. Usar o editor de WordPress
4. Contratar um desenvolvedor para customizações

## 📝 Licença

Este site foi criado especialmente para NOSSO PONTO - Lanchonete Rústica em Ariquemes.

---

**Versão:** 1.0  
**Última atualização:** Janeiro 2024  
**Criado com:** HTML5, CSS3, JavaScript Puro
