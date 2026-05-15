// queue.js — renderiza e gerencia fila
export function renderQueue(queue) {
  const queueList = document.getElementById("queue-list");
  queueList.innerHTML = queue.map(q => `<span>${q.name}</span>`).join("");
}