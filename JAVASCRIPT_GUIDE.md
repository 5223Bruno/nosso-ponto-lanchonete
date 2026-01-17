# 🔧 Guia JavaScript - NOSSO PONTO

O JavaScript foi desenvolvido **apenas para interações**, sem renderização de conteúdo ou dados hardcoded.

## 📋 Funcionalidades Implementadas

### 1. **Menu Mobile** ☰
**Arquivo:** `js/script.js` (linhas 15-30)

```javascript
// Abre/fecha menu ao clicar no botão hamburger
document.getElementById('menuToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// Fecha menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('active');
    });
});
```

**O que faz:**
- Toggle da classe `active` no menu
- Fecha menu ao navegar
- Funciona apenas em telas ≤ 768px

### 2. **Carrinho de Compras** 🛒
**Arquivo:** `js/script.js` (linhas 32-100)

#### Funções principais:

**`adicionarAoCarrinho(nome, preco)`**
- Adiciona item ao array `carrinho`
- Se item existe, incrementa quantidade
- Atualiza UI e mostra notificação

**`removerDoCarrinho(nome)`**
- Remove item do carrinho
- Atualiza UI

**`alterarQuantidade(nome, quantidade)`**
- Muda quantidade do item
- Mínimo: 1 unidade

**`atualizarCarrinho()`**
- Renderiza lista de itens
- Calcula total
- Atualiza contador no botão

**`abrirCarrinho()` / `fecharCarrinho()`**
- Abre/fecha modal do carrinho
- Adiciona/remove classe `active`

### 3. **Integração WhatsApp** 💬
**Arquivo:** `js/script.js` (linhas 102-130)

```javascript
const WHATSAPP_NUMBER = '5569999999999'; // EDITAR AQUI
```

**`enviarPedidoWhatsapp()`**
- Formata mensagem com itens e total
- Codifica para URL
- Abre WhatsApp Web
- Limpa carrinho após envio

**Formato da mensagem:**
```
🔥 *NOSSO PONTO - PEDIDO* 🔥

📋 *ITENS DO PEDIDO:*
• Picanha na Brasa (1x) - R$ 89,90
• Chopp Gelado (2x) - R$ 50,00

💰 *TOTAL: R$ 139,90*

✅ Por favor, confirme este pedido!
```

### 4. **Galeria de Fotos** 📸
**Arquivo:** `js/script.js` (linhas 132-165)

**`abrirGaleria(index)`**
- Abre modal com foto no índice
- Renderiza imagem e contador

**`galeriaNext()` / `galeriaPrevious()`**
- Navega entre fotos
- Usa módulo para looping

**`atualizarGaleria()`**
- Atualiza imagem exibida
- Atualiza contador (ex: "2 / 4")

**Navegação:**
- Clique nos botões ← →
- Teclado: setas esquerda/direita
- ESC para fechar

### 5. **Funções Auxiliares** 🛠️
**Arquivo:** `js/script.js` (linhas 167-200)

**`scrollToSection(sectionId)`**
- Scroll suave para seção
- Usado nos botões de navegação

**`mostrarNotificacao(mensagem)`**
- Cria toast com mensagem
- Desaparece após 3 segundos
- Animação slide-in/out

### 6. **LocalStorage (Persistência)** 💾
**Arquivo:** `js/script.js` (linhas 210-230)

```javascript
// Salva carrinho ao sair
window.addEventListener('beforeunload', function() {
    localStorage.setItem('nosso_ponto_carrinho', JSON.stringify(carrinho));
});

// Recupera carrinho ao entrar
window.addEventListener('load', function() {
    const carrinhoSalvo = localStorage.getItem('nosso_ponto_carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarCarrinho();
    }
});
```

**Benefício:** Carrinho persiste entre sessões

## 🎯 O que NÃO está no JavaScript

❌ Renderização de conteúdo (pratos, bebidas)
❌ Dados hardcoded (tudo está no HTML)
❌ Chamadas a APIs externas
❌ Frameworks (React, Vue, etc)
❌ Build tools (Webpack, Vite, etc)

## 🔧 Como Customizar

### 1. Mudar número do WhatsApp
**Arquivo:** `js/script.js` linha 18

```javascript
const WHATSAPP_NUMBER = '5569987654321'; // Seu número aqui
```

**Formato:** 55 + DDD + número (sem caracteres especiais)

### 2. Mudar tempo da notificação
**Arquivo:** `js/script.js` linha 190

```javascript
setTimeout(() => {
    notificacao.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notificacao.remove(), 300);
}, 3000); // Mude 3000 para tempo em milissegundos
```

### 3. Desabilitar persistência do carrinho
**Arquivo:** `js/script.js` linhas 210-230

Comente ou remova:
```javascript
// window.addEventListener('beforeunload', ...);
// window.addEventListener('load', ...);
```

### 4. Adicionar nova função
Exemplo: Função para favoritar item

```javascript
function adicionarFavorito(nome) {
    console.log('Adicionado aos favoritos: ' + nome);
    // Sua lógica aqui
}
```

Depois use no HTML:
```html
<button onclick="adicionarFavorito('Picanha')">❤️ Favoritar</button>
```

## 📊 Estrutura de Dados

### Array `carrinho`
```javascript
carrinho = [
    {
        nome: "Picanha na Brasa",
        preco: 89.90,
        quantidade: 2
    },
    {
        nome: "Chopp Gelado",
        preco: 25.00,
        quantidade: 1
    }
]
```

### Array `galeriaImagens`
```javascript
const galeriaImagens = [
    'images/ambiente-1.jpg',
    'images/ambiente-2.jpg',
    'images/ambiente-3.jpg',
    'images/ambiente-4.jpg'
];
```

## 🐛 Debugging

### Ver carrinho no console
```javascript
console.log(carrinho);
```

### Ver localStorage
```javascript
console.log(localStorage.getItem('nosso_ponto_carrinho'));
```

### Limpar localStorage
```javascript
localStorage.removeItem('nosso_ponto_carrinho');
```

## ✅ Checklist de Funcionalidades

- [ ] Menu mobile funciona
- [ ] Adicionar ao carrinho funciona
- [ ] Remover do carrinho funciona
- [ ] Alterar quantidade funciona
- [ ] Total calcula corretamente
- [ ] WhatsApp abre com mensagem formatada
- [ ] Galeria navega corretamente
- [ ] Notificações aparecem
- [ ] Carrinho persiste (localStorage)
- [ ] Sem erros no console (F12)

## 🚀 Para WordPress

Ao migrar para WordPress:

1. Copie o conteúdo de `js/script.js`
2. Crie um arquivo JS customizado no tema
3. Enfileire no functions.php:
```php
wp_enqueue_script('nosso-ponto', get_template_directory_uri() . '/js/script.js');
```

## 📞 Suporte

Se algo não funcionar:

1. Abra o console (F12 → Console)
2. Procure por erros em vermelho
3. Verifique se o número do WhatsApp está correto
4. Verifique se os IDs dos elementos existem no HTML

---

**Versão:** 1.0  
**Última atualização:** Janeiro 2024  
**Tipo:** JavaScript Puro (Vanilla JS)
