import React from "react";
import classes from "./Header.module.css";
import { exercisesDb } from "../database";
const Header = () => {
  return (
    <header className={classes.header}>
      <button onClick={exercisesDb.push}>Сохранить</button>
      <button onClick={exercisesDb.sync}>синхронизировать</button>
    </header>
  );
};

export default Header;
