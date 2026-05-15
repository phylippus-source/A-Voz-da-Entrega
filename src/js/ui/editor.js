// editor.js — novo botão, renomear botão, etc.
export function novoBotao(state) {
  const nome = prompt("Nome do botão:");
  if (!nome) return;
  state.buttons.push({
    id: crypto.randomUUID(),
    name: nome,
    order: state.nextOrder++,
    audioBlob: null,
    isTTS: false,
  });
}