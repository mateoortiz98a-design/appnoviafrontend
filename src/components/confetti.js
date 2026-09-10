// Animación sutil de destellos al aceptar (sin emojis de corazones/fiesta,
// para un estilo más sobrio).
const SIMBOLOS = ['✦', '✧', '❁'];

function launchConfetti(cantidad = 40) {
  for (let i = 0; i < cantidad; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.textContent = SIMBOLOS[Math.floor(Math.random() * SIMBOLOS.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    el.style.fontSize = `${14 + Math.random() * 16}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

export default launchConfetti;
