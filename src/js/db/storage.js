// Banco de dados IndexedDB, responsável por guardar os botões e sons gravados
const DB_NAME = "soundboard_voz";
const DB_VER = 1;
const STORE = "sounds";
let db = null;

export function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB_NAME, DB_VER);
    r.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains(STORE)) {
        d.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    r.onsuccess = e => res((db = e.target.result));
    r.onerror = e => rej(e.target.error);
  });
}

export function dbGetAll() {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => res(req.result);
    req.onerror = e => rej(e.target.error);
  });
}

export function dbPut(rec) {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readwrite");
    const store = tx.objectStore(STORE);
    const req = store.put(rec);
    req.onsuccess = () => res();
    req.onerror = e => rej(e.target.error);
  });
}

export function dbDelete(id) {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readwrite");
    const req = tx.objectStore(STORE).delete(id);
    req.onsuccess = () => res();
    req.onerror = e => rej(e.target.error);
  });
}

export function dbClear() {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, "readwrite");
    const req = tx.objectStore(STORE).clear();
    req.onsuccess = () => res();
    req.onerror = e => rej(e.target.error);
  });
}