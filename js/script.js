// ============================================
// NOSSO PONTO - JavaScript
// Funcionalidades: Carrinho, Galeria, Menu Mobile
// ============================================

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================

let carrinho = [];
let galeriaAtual = 0;
const galeriaImagens = [
    'images/ambiente-1.jpg',
    'images/ambiente-2.jpg',
    'images/ambiente-3.jpg',
    'images/ambiente-4.jpg'
];

// Número do WhatsApp da lanchonete (EDITAR COM O NÚMERO REAL)
const WHATSAPP_NUMBER = '5569999999999'; // Formato: 55 + DDD + número

// ============================================
// MENU MOBILE
// ============================================

document.getElementById('menuToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('active');
    });
});

// ============================================
// CARRINHO DE COMPRAS
// ============================================

function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }
    
    atualizarCarrinho();
    mostrarNotificacao(`${nome} adicionado ao carrinho!`);
}

function removerDoCarrinho(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
    atualizarCarrinho();
}

function alterarQuantidade(nome, quantidade) {
    const item = carrinho.find(item => item.nome === nome);
    if (item) {
        item.quantidade = Math.max(1, quantidade);
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    // Atualizar contador
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cartCount').textContent = totalItens;
    
    // Atualizar conteúdo do modal
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');
    
    if (carrinho.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Seu carrinho está vazio</p>';
        cartTotalSpan.textContent = '0,00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-name">
                    <strong>${item.nome}</strong><br>
                    <small>R$ ${item.preco.toFixed(2)}</small>
                </div>
                <div class="cart-item-qty">
                    <button onclick="alterarQuantidade('${item.nome}', ${item.quantidade - 1})">−</button>
                    <span>${item.quantidade}</span>
                    <button onclick="alterarQuantidade('${item.nome}', ${item.quantidade + 1})">+</button>
                </div>
                <div class="cart-item-price">R$ ${subtotal.toFixed(2)}</div>
                <button class="cart-item-remove" onclick="removerDoCarrinho('${item.nome}')">✕</button>
            </div>
        `;
    });
    
    cartItemsDiv.innerHTML = html;
    cartTotalSpan.textContent = total.toFixed(2);
}

function abrirCarrinho() {
    document.getElementById('cartModal').classList.add('active');
}

function fecharCarrinho() {
    document.getElementById('cartModal').classList.remove('active');
}

function enviarPedidoWhatsapp() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    let mensagem = '🔥 *NOSSO PONTO - PEDIDO* 🔥\n\n';
    mensagem += '📋 *ITENS DO PEDIDO:*\n';
    
    let total = 0;
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        mensagem += `• ${item.nome} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}\n`;
    });
    
    mensagem += `\n💰 *TOTAL: R$ ${total.toFixed(2)}*\n`;
    mensagem += '\n✅ Por favor, confirme este pedido!';
    
    // Codificar mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Abrir WhatsApp
    const urlWhatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemCodificada}`;
    window.open(urlWhatsapp, '_blank');
    
    // Limpar carrinho após envio
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

function fazerPedidoWhatsapp() {
    if (carrinho.length === 0) {
        alert('Adicione itens ao carrinho primeiro!');
        return;
    }
    enviarPedidoWhatsapp();
}

// ============================================
// GALERIA
// ============================================

function abrirGaleria(index) {
    galeriaAtual = index;
    atualizarGaleria();
    document.getElementById('galleryModal').classList.add('active');
}

function fecharGaleria() {
    document.getElementById('galleryModal').classList.remove('active');
}

function galeriaNext() {
    galeriaAtual = (galeriaAtual + 1) % galeriaImagens.length;
    atualizarGaleria();
}

function galeriaPrevious() {
    galeriaAtual = (galeriaAtual - 1 + galeriaImagens.length) % galeriaImagens.length;
    atualizarGaleria();
}

function atualizarGaleria() {
    document.getElementById('galleryImage').src = galeriaImagens[galeriaAtual];
    document.getElementById('galleryCounter').textContent = `${galeriaAtual + 1} / ${galeriaImagens.length}`;
}

// Navegação com teclado na galeria
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('galleryModal');
    if (modal.classList.contains('active')) {
        if (event.key === 'ArrowRight') galeriaNext();
        if (event.key === 'ArrowLeft') galeriaPrevious();
        if (event.key === 'Escape') fecharGaleria();
    }
});

// Fechar modal ao clicar fora
document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharCarrinho();
    }
});

document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharGaleria();
    }
});

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function mostrarNotificacao(mensagem) {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 300;
        animation: slideInRight 0.3s ease;
    `;
    notificacao.textContent = mensagem;
    
    document.body.appendChild(notificacao);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notificacao.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    atualizarCarrinho();
    
    // Adicionar estilos de animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// ============================================
// ARMAZENAR CARRINHO NO LOCALSTORAGE (OPCIONAL)
// ============================================

// Salvar carrinho ao atualizar
window.addEventListener('beforeunload', function() {
    localStorage.setItem('nosso_ponto_carrinho', JSON.stringify(carrinho));
});

// Recuperar carrinho ao carregar
window.addEventListener('load', function() {
    const carrinhoSalvo = localStorage.getItem('nosso_ponto_carrinho');
    if (carrinhoSalvo) {
        try {
            carrinho = JSON.parse(carrinhoSalvo);
            atualizarCarrinho();
        } catch (e) {
            console.log('Erro ao recuperar carrinho');
        }
    }
});
