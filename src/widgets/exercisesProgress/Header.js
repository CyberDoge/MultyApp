import React, { useState } from "react";
import HeaderComp from "components/Header";
import {
  useExercises,
  usePushExercises,
  useSyncExercises,
} from "../../models/exercises";

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
    <HeaderComp>
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
    </HeaderComp>
  );
};

export default Header;
