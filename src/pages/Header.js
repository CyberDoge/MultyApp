import React from "react";
import classes from "./Header.module.css";
import {
  useExercises,
  usePushExercises,
  useSyncExercises,
} from "../models/exercises";
const Header = () => {
  const { mutateAsync: sync } = useSyncExercises();
  const { mutateAsync: push } = usePushExercises();
  const { refetch } = useExercises();
  const confirmPush = () => {
    if (confirm("Пуш")) {
      push()
        .then(() => alert("success push"))
        .catch((e) => alert("error push " + e.getMessage()));
    }
  };
  const confirmSync = () => {
    if (confirm("Скачать")) {
      sync()
        .then(() => alert("success sync"))
        .then(() => {
          refetch();
        })
        .catch((e) => alert("error sync " + e.getMessage()));
    }
  };
  return (
    <header className={classes.header}>
      <span>v 11/03</span>
      <button onClick={confirmPush}>Пуш</button>
      <button onClick={confirmSync}>Скачать</button>
      <button onClick={() => location.reload()}>refresh</button>
    </header>
  );
};

export default Header;
