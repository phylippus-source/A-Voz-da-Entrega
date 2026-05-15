// helpers.js — funções pequenas auxiliares
export function uid() {
  return crypto.randomUUID();
}
export function fmtTime(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
export function createRipple(card, e) { /* ... */ }