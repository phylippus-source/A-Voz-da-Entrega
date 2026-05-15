// synth.js — fala texto (TTS) e cria botão
export function ttsSpeak(text) {
  if (!text.trim()) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "pt-BR";
  u.rate = 1;
  speechSynthesis.speak(u);
}

export async function ttsCreate(text, state) {
  if (!text.trim()) return;
  const btn = {
    id: crypto.randomUUID(),
    name: text.slice(0, 24),
    order: state.nextOrder++,
    isTTS: true,
    ttsText: text,
  };
  state.buttons.push(btn);
}