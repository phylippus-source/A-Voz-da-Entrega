// player.js — lida com tocar sons e fila
export function playSound(audioBlob) {
  if (!audioBlob) return;
  const url = URL.createObjectURL(audioBlob);
  const audio = new Audio(url);
  audio.play();
  audio.onended = () => URL.revokeObjectURL(url);
}

export function playQueue(queue, buttons) {
  if (!queue.length) return;
  let idx = 0;
  function tocaProx() {
    const item = queue[idx];
    const btn = buttons.find(b => b.id === item.id);
    if (btn && btn.audioBlob) {
      playSound(btn.audioBlob);
      setTimeout(() => {
        idx++;
        if (idx < queue.length) tocaProx();
      }, 1500); // soma duração do áudio real depois
    }
  }
  tocaProx();
}