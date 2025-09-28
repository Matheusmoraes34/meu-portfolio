// --- ROLAGEM SUAVE PARA LINKS DA NAVEGAÇÃO E BOTÕES CTA ---
// Seleciona todos os links que começam com "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Previne o comportamento padrão de "pulo"

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth' // A mágica acontece aqui!
      });
    }
  });
});

// --- ATUALIZA O ANO NO RODAPÉ AUTOMATICAMENTE ---
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}