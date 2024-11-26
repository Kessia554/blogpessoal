// Adiciona animações de fade-in ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("fade-in");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Para ativar no carregamento inicial
});
