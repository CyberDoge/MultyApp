export function pushRemote(store) {
  return (data) => {
    return fetch(`${store}?apiKey=${process.env.REACT_APP_ACCESS_TOKEN}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}

export function fetchRemote(store) {
  return () => {
    return fetch(`${store}?apiKey=${process.env.REACT_APP_ACCESS_TOKEN}`);
  };
}
