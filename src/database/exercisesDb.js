import { getKey } from "../models/exercises";
import { fetchRemote, pushRemote } from "./remoteStorage";

const NAME = "exercisesDb";
const STORE_NAME = "exercisesStore";
let db;

const openRequest = indexedDB.open(NAME, 1);
const dbPromise = new Promise((resolve, reject) => {
  openRequest.onsuccess = function (e) {
    console.log("running onsuccess");
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
    let store = db.createObjectStore(STORE_NAME, {
      autoIncrement: true,
    });
    resolve(e);
  };
});

export function save(item) {
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  let query = store.put(item, getKey(item));
  return new Promise((resolve, reject) => {
    query.onsuccess = function (event) {
      resolve(event);
    };

    query.onerror = function (event) {
      reject(event);
    };
  });
}

export async function getById(id) {
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  const query = store.get(id);
  return new Promise((resolve, reject) => {
    query.onsuccess = function (event) {
      resolve(event);
    };

    query.onerror = function (event) {
      reject(event);
    };
  });
}

export async function getAll() {
  return dbPromise.then(() => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const query = store.getAll();
    return new Promise((resolve, reject) => {
      query.onsuccess = function (event) {
        resolve(event);
      };

      query.onerror = function (event) {
        reject(event);
      };
    });
  });
}

export async function sync() {
  const resp = await fetchRemote();
  const json = await resp.json();
  const parsedContent = decodeURIComponent(
    escape(window.atob(json.result.content[0]))
  );
  const data = JSON.parse(parsedContent, (key, value) =>
    key === "date" ? new Date(value) : value
  );
  data.forEach((m) => save(m));
}

export async function push() {
  const data = await getAll();
  await pushRemote(
    btoa(unescape(encodeURIComponent(JSON.stringify(data.target.result))))
  )
    .then(() => alert("success push"))
    .catch((e) => alert("error push " + e.getMessage()));
}
