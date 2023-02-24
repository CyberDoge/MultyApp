import React from "react";
import classes from "./Header.module.css";
import { exercisesDb } from "../database";
const Header = () => {
  const confirmPush = () => {
    if (confirm("Сохранить")) {
      exercisesDb
        .push()
        .then(() => alert("success push"))
        .catch((e) => alert("error push " + e.getMessage()));
    }
  };
  const confirmSync = () => {
    if (confirm("синхронизировать")) {
      exercisesDb
        .push()
        .then(() => alert("success push"))
        .catch((e) => alert("error push " + e.getMessage()));
    }
  };
  return (
    <header className={classes.header}>
      <button onClick={confirmPush}>Сохранить</button>
      <button onClick={confirmSync}>Синхронизировать</button>
    </header>
  );
};

export default Header;
