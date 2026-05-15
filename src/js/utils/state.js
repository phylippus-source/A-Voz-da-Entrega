// state.js -- Estado global do seu soundboard (botoes, queue, controles)
export const state = {
  buttons: [],
  queue: [],
  nextOrder: 0,
  audioURLs: {},
  queuePlaying: false,
  queueCurrentIdx: 0
};