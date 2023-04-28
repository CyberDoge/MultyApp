import { getKey } from "models/exercises";
import { fetchRemote, pushRemote } from "./remoteStorage";

const NAME = "exercisesDb";
const STORE_NAME = "exercisesStore";
let db;

const openRequest = indexedDB.open(NAME, 1);

function promisingDbResult(query) {
  return new Promise((resolve, reject) => {
    query.onsuccess = function (event) {
      resolve(event);
    };

    query.onerror = function (event) {
      reject(event);
    };
  });
}

const dbPromise = new Promise((resolve, reject) => {
  openRequest.onsuccess = function (e) {
    db = e.target.result;
    resolve(e);
  };

  openRequest.onerror = function (e) {
    console.log("onerror! doesnt work");
    console.dir(e);
    reject(e);
  };

  openRequest.onupgradeneeded = function (e) {
    db = e.target.result;
    console.log("running onupgradeneeded");
    db.createObjectStore(STORE_NAME, {
      autoIncrement: true,
    });
    resolve(e);
  };
});

export function save(item) {
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  let query = store.put(item, item.id);
  return promisingDbResult(query);
}

export function remove(item) {
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  let query = store.delete(getKey(item));
  return promisingDbResult(query);
}

export async function getById(id) {
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  const query = store.get(id);
  return promisingDbResult(query);
}

export async function getAll() {
  return dbPromise.then(() => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const query = store.getAll();
    return promisingDbResult(query);
  });
}

export async function sync() {
  const resp = await fetchRemote();
  const json = await resp.json();
  const data = json.map((o) => ({
    ...o,
    date: new Date(o.date),
  }));

  data.forEach((m) => save(m));
}

export async function push() {
  const data = await getAll();
  await pushRemote(data.target.result);
}
