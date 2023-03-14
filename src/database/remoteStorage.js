export function pushRemote(data) {
  return fetch(
    `${process.env.REACT_APP_STORE_URL}?apiKey=${process.env.REACT_APP_ACCESS_TOKEN}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function fetchRemote() {
  return fetch(
    `${process.env.REACT_APP_STORE_URL}?apiKey=${process.env.REACT_APP_ACCESS_TOKEN}`
  );
}
