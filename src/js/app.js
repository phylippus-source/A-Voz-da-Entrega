// app.js -- Disparadores/Listeners principais do topo (interface principal do app)

import { state } from './utils/state.js';
import { openDB, dbGetAll, dbClear } from './db/storage.js';
import { renderGrid } from './ui/grid.js';
import { renderQueue } from './ui/queue.js';
import { ttsSpeak, ttsCreate } from './tts/synth.js';

export async function initApp() {
  await openDB();
  state.buttons = await dbGetAll();
  if (state.buttons.length === 0) {
    for (let i = 1; i <= 6; i++) {
      state.buttons.push({
        id: crypto.randomUUID(),
        name: `Botão ${i}`,
        order: state.nextOrder++,
        audioBlob: null,
        isTTS: false
      });
    }
  }
  renderGrid(state.buttons);
  renderQueue(state.queue);

  // Listeners
  document.getElementById('btn-add').onclick = () => { /* ... */ };
  document.getElementById('btn-reset').onclick = async () => {
    await dbClear();
    state.buttons = [];
    state.queue = [];
    state.nextOrder = 0;
    initApp();
  };
  document.getElementById('tts-speak').onclick = () => {
    ttsSpeak(document.getElementById('tts-input').value);
  };
  document.getElementById('tts-create').onclick = async () => {
    await ttsCreate(document.getElementById('tts-input').value, state);
    renderGrid(state.buttons);
  };
}

initApp();