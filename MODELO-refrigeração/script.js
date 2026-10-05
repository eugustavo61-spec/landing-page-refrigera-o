// Seleciona os blocos que queremos animar
const elementosParaAnimar = document.querySelectorAll('.card-alerta, .card-servico, .hero-texto, .hero-imagem');

// Configura a "câmera" que vai vigiar a rolagem da página
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Quando o elemento entrar na área visível da tela
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
            // Opcional: faz a animação acontecer apenas uma vez
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15 // Dispara quando 15% do bloco aparecer na tela
});

// Aplica a classe 'oculto' inicialmente e manda o observador vigiar cada um
elementosParaAnimar.forEach(elemento => {
    elemento.classList.add('oculto');
    observador.observe(elemento);
});