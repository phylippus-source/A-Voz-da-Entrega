# 🎛️ A Voz da Entrega - Soundboard

Um soundboard (painel de botões sonoros) web moderno, modular e 100% em português.
Ideal para sistemas de atendimento, diversão com amigos, ou automatizações de frases e sons!  
Grave áudios ou crie botões de fala digitando texto (TTS).

## Como rodar localmente
1. Garanta que tem Node.js ou Python instalado.
2. No terminal, rode na pasta do projeto:
   - Node.js: `npx http-server public -p 8080`
   - Python:  `python -m http.server 8080`
3. Abra o navegador em [http://localhost:8080](http://localhost:8080)

## Estrutura do projeto

```
soundboard-voz/
├── public/
│   └── index.html
├── src/
│   ├── css/
│   │   ├── main.css (variáveis globais, reset, layout)
│   │   ├── components.css (cards, menu, recorder, queue)
│   │   └── animations.css (ripple, pulse, wave, transitions)
│   ├── js/
│   │   ├── main.js (init, imports)
│   │   ├── db/
│   │   │   └── storage.js (openDB, dbGet, dbPut, dbDelete, dbClear)
│   │   ├── audio/
│   │   │   ├── player.js (playSound, playQueue, playQueueItem)
│   │   │   └── recorder.js (startRecordingFlow, stopRecording, cancelRecording)
│   │   ├── tts/
│   │   │   └── synth.js (ttsSpeak, ttsCreate)
│   │   ├── ui/
│   │   │   ├── grid.js (renderGrid, buildCard, refreshCard, attachCardEvents)
│   │   │   ├── menu.js (openCtxMenu, closeCtxMenu, context listeners)
│   │   │   ├── queue.js (renderQueue, addToQueue, removeFromQueue, updateQueueBadges)
│   │   │   ├── editor.js (startRenameInline)
│   │   │   └── toast.js (showToast)
│   │   ├── utils/
│   │   │   ├── constants.js (DB_NAME, STORE, CSS vars)
│   │   │   ├── helpers.js (uid, fmtTime, createRipple)
│   │   │   └── state.js (buttons[], queue[], state global)
│   │   └── app.js (listeners de header: btnAdd, btnReset, btnPlayQueue)
│   └── index.html (strutura pura, sem CSS inline, sem JS)
├── .gitignore
└── README.md

```

## Funcionalidades
- Gravação de áudio pelo microfone
- Síntese de fala/texto (TTS)
- Fila de reprodução
- Organização modular para evoluir fácil

---
Crédito: Projeto idealizado e desenvolvido por [Seu Nome]
