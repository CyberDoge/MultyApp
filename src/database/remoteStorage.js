export function pushRemote(data) {
  return fetch(`https://api.telegra.ph/editPage/`, {
    method: "GET",
    redirect: "follow",
  });
}

export function fetchRemote() {
  return fetch(
    "https://api.telegra.ph/getPage/Multy-App-Remote-Database-exercisesDb-02-11?return_content=true"
  );
}
