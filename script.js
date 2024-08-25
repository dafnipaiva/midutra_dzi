document.addEventListener('DOMContentLoaded', () => {
    // Script para redirecionamento do botão
    const buttons = document.querySelectorAll('button[data-url]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = button.getAttribute('data-url');
        });
    });

    // Script para os itens de FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle('hidden');
        });
    });

    // Script para o menu responsivo
    document.getElementById('nav-toggle').onclick = function() {
        let navContentMobile = document.getElementById('nav-content-mobile');
        navContentMobile.classList.toggle('hidden');
    };

    // Interatividade para os cards no mobile
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active')); // Remove 'active' de todos os cards
            card.classList.add('active'); // Adiciona 'active' no card clicado
        });
    });
    
});


