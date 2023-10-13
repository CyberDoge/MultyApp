import React, { useState } from "react";
import classes from "./Header.module.css";
import {
  useExercises,
  usePushExercises,
  useSyncExercises,
} from "models/exercises";
import clsx from "clsx";

const Header = () => {
  const { mutateAsync: sync } = useSyncExercises();
  const { mutateAsync: push } = usePushExercises();
  const [show, setShow] = useState(false);
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
      <span>v 13/10</span>
      <button onClick={() => setShow((s) => !s)}>Управление</button>
      <div
        className={clsx(
          `items-center bg-gray-100 border-solid border-2 overflow-hidden inset-x-0
          top-16 mt-2 p-2 absolute flex-col gap-y-2 `,
          show ? "flex" : "hidden"
        )}
      >
        <button className="w-2/3" onClick={confirmPush}>
          Пуш
        </button>
        <button className="w-2/3" onClick={confirmSync}>
          Скачать
        </button>
        <button disabled className="w-2/3" onClick={confirmSync}>
          Добавить упражнение
        </button>
        <button className="w-2/3" onClick={() => location.reload()}>
          Обновить страницу
        </button>
        <button className="w-2/3" onClick={() => setShow(false)}>
          X
        </button>
      </div>
    </header>
  );
};

export default Header;
