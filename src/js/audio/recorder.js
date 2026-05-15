// recorder.js — lida com gravação de áudio
export async function startRecordingFlow(id, state) {
  // Lógica para gravar som e salvar no botão (precisa MediaRecorder etc)
  if (!navigator.mediaDevices) return alert("Sem microfone!");
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  let chunks = [];
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: "audio/webm" });
    let btn = state.buttons.find(x => x.id === id);
    if (btn) btn.audioBlob = blob;
  };
  recorder.start();
  setTimeout(() => recorder.stop(), 3000); // grava 3 seg.
}