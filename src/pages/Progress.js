import React, { useState } from "react";
import classes from "./Progress.module.css";
import { exercisesDb } from "../database";
import { allExercises, exercises, muscles } from "./consts";
import { getISODay, startOfDay } from "date-fns";
import { generateUUID } from "../utils/uuid";

const Progress = () => {
  const [exec, setExec] = useState(null);
  const [mass, setMass] = useState(0);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState(undefined);

  const submit = async (e) => {
    e.preventDefault();

    if (!(exec && mass && count)) {
      return setMessage("не все заполнено");
    }
    const res = await exercisesDb.save({
      exec,
      mass,
      count,
      date: startOfDay(date),
      id: generateUUID(),
    });
    setMessage(res.type || "ошибка");
    setTimeout(() => {
      setMessage(undefined);
    }, 5000);
    setExec(undefined);
    setMass(0);
    setCount(0);
    setDate(new Date());
  };

  function getDay() {
    const day = getISODay(new Date());
    if (day < 3) {
      return 0;
    }
    if (day < 5) {
      return 1;
    }

    return 2;
  }

  const restExercises = exercises.slice();
  restExercises.splice(getDay(), 1);
  return (
    <form className={classes.form} onSubmit={submit}>
      <h2 className={classes.message}>{message}</h2>
      <p>
        Выбрано:{" "}
        <a
          target="_blank"
          href={allExercises.find((a) => a.value === exec)?.link}
          rel="noreferrer"
        >
          &nbsp;
          {exec}
        </a>
        &nbsp;&mdash;&nbsp;
        {
          muscles.find((value) =>
            allExercises.find((s) => s.value === exec)?.type.includes(value.key)
          )?.value
        }
      </p>
      <label>
        <span className={classes.labelSubtext}>Упражнение:&nbsp;</span>
        <select value={exec} onChange={(e) => setExec(e.target.value)}>
          {[{ value: null }, ...exercises[getDay()]].map((e) => (
            <option key={e.value} value={e.value}>
              {e.value}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className={classes.labelSubtext}>Доп упр:&nbsp;</span>
        <select value={exec} onChange={(e) => setExec(e.target.value)}>
          {[{ value: null }, ...restExercises.flat()].map((e) => (
            <option key={e.value} value={e.value}>
              {e.value}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className={classes.labelSubtext}>Вес:&nbsp;</span>
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(+e.target.value || undefined)}
        />
        <div className={classes.count}>
          <button
            onClick={(e) => {
              setMass((c) => 5 + c);
              e.preventDefault();
            }}
          >
            Увеличить вес на 5
          </button>
          <button
            onClick={(e) => {
              setMass((c) => c - 1);
              e.preventDefault();
            }}
          >
            Уменьшить на 1
          </button>
        </div>
      </label>
      <label>
        <span className={classes.labelSubtext}>Кол-во:&nbsp;</span>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value || undefined)}
        />
        <div className={classes.count}>
          <button
            onClick={(e) => {
              setCount((c) => 1 + c);
              e.preventDefault();
            }}
          >
            Увеличить кол-во на 1
          </button>
          <button
            onClick={(e) => {
              setCount((c) => 2 + c);
              e.preventDefault();
            }}
          >
            Увеличить кол-во на 2
          </button>
          <button
            onClick={(e) => {
              setCount((c) => c - 1);
              e.preventDefault();
            }}
          >
            Уменьшить на 1
          </button>
        </div>
      </label>
      <label>
        <span className={classes.labelSubtext}>Подходы:&nbsp;</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={(e) => {
            setDate(new Date());
            e.preventDefault();
          }}
        >
          Сегодня
        </button>
      </label>

      <button className={classes.submit} type="submit">
        Сохранить
      </button>
    </form>
  );
};

export default Progress;
