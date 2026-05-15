// Arquivo principal – "placa-mãe"
// Faz a ligação de todos os módulos!
// Carregado com <script type="module"> no index.html

import { openDB, dbGetAll, dbPut, dbDelete, dbClear } from './db/storage.js';
import * as Player from './audio/player.js';
import * as Recorder from './audio/recorder.js';
import * as TTS from './tts/synth.js';
import * as Grid from './ui/grid.js';
import * as Menu from './ui/menu.js';
import * as Queue from './ui/queue.js';
import * as Editor from './ui/editor.js';
import * as Toast from './ui/toast.js';

// Estado central do app
export const state = {
  buttons: [],
  queue: [],
  nextOrder: 0,
};
window.state = state; // (debug: permite ver no console)

// Inicialização:
async function init() {
  await openDB();
  state.buttons = await dbGetAll();
  if (!state.buttons.length) {
    // cria 6 botões iniciais (exemplo)
    for (let i = 1; i <= 6; i++) {
      const btn = {
        id: crypto.randomUUID(),
        name: `Botão ${i}`,
        order: state.nextOrder++,
        audioBlob: null,
        isTTS: false,
      };
      state.buttons.push(btn);
      await dbPut(btn);
    }
  }
  Grid.renderGrid(state.buttons);
  Queue.renderQueue(state.queue);

  // Listeners de header
  document.getElementById('btn-add').onclick = () => {
    Editor.novoBotao(state);
  };
  document.getElementById('btn-reset').onclick = async () => {
    await dbClear();
    state.buttons = [];
    state.nextOrder = 0;
    init();
  };
  document.getElementById('btn-play-queue').onclick = () => {
    Player.playQueue(state.queue, state.buttons);
  };
  // TTS
  document.getElementById('tts-speak').onclick = () => {
    TTS.ttsSpeak(document.getElementById('tts-input').value);
  };
  document.getElementById('tts-create').onclick = async () => {
    await TTS.ttsCreate(
      document.getElementById('tts-input').value,
      state
    );
    Grid.renderGrid(state.buttons);
  };
}
init();