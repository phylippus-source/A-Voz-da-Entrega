// grid.js — renderiza o grid de botões
export function renderGrid(buttons) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  buttons.forEach(btn => {
    const card = buildCard(btn);
    grid.appendChild(card);
  });
}

export function buildCard(btn) {
  const card = document.createElement("div");
  card.textContent = btn.name;
  card.className = "sound-card";
  card.onclick = () => {
    if (btn.isTTS) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(btn.ttsText));
    } else if (btn.audioBlob) {
      // Importe playSound e use aqui se preferir
    }
  };
  return card;
}