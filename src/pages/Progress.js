import React, { useState } from "react";
import classes from "./Progress.module.css";
import { allExercises, exercises, muscles } from "./consts";
import { format, getISODay, startOfDay } from "date-fns";
import { generateUUID } from "../utils/uuid";
import { useSaveExercise } from "../models/exercises";
import ToastMessage from "../components/ToastMessage";
import { getCurrentDay } from "../utils/getCurrentDate";

const Progress = () => {
  const [exec, setExec] = useState("");
  const [mass, setMass] = useState(0);
  const [count, setCount] = useState(0);
  const [note, setNote] = useState(undefined);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState(undefined);
  const { mutateAsync } = useSaveExercise();
  const submit = async (e) => {
    e.preventDefault();

    if (!(exec && mass && count)) {
      return setMessage(
        "не все заполнено: " +
          [
            { k: "exec", v: +exec },
            { k: "mass", v: +mass },
            { k: "count", v: +count },
          ]
            .filter(({ v, k }) => !v)
            .map(({ k }) => k)
            .join(", ")
      );
    }
    const savedObj = Object.assign(
      {
        exec,
        mass,
        count,
        date: startOfDay(date),
        id: generateUUID(),
      },
      note ? { note } : null
    );
    const res = await mutateAsync(savedObj);
    setMessage(res.type || "ошибка");
    setTimeout(() => {
      setMessage(undefined);
    }, 5000);
    setExec("");
    setNote(undefined);
    setMass(0);
    setCount(0);
  };

  const restExercises = exercises.slice();
  restExercises.splice(getCurrentDay(), 1);
  return (
    <form className={classes.form} onSubmit={submit}>
      {message && (
        <ToastMessage close={() => setMessage(undefined)}>
          {message}
        </ToastMessage>
      )}
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
          {[{ value: "" }, ...exercises[getCurrentDay()]].map((e) => (
            <option key={e.value} value={e.value}>
              {e.value}
              {" - "}
              {e.type
                ?.map((t) => muscles.find((s) => s.key === t).value)
                .join(" ")}
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
              {" - "}
              {e.type
                ?.map((t) => muscles.find((s) => s.key === t).value)
                .join(" ")}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className={classes.labelSubtext}>Вес:&nbsp;</span>
        <input
          type="number"
          pattern="[0-9]+([\.][0-9]+)?"
          value={mass}
          onClick={(e) => e.target.select(0, 100)}
          onChange={(e) => setMass(e.target.value)}
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
          pattern="[0-9]+([\.][0-9]+)?"
          value={count}
          onClick={(e) => e.target.select(0, 100)}
          onChange={(e) => setCount(e.target.value)}
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
      </label>{" "}
      <label>
        <span className={classes.labelSubtext}>Заметка&nbsp;</span>
        <input value={note} onChange={(e) => setNote(e.target.value)} />
      </label>
      <label>
        <span className={classes.labelSubtext}>Дата:&nbsp;</span>
        <input
          type="date"
          value={format(date, "yyyy-MM-dd")}
          onClick={(e) => e.target.select(0, 100)}
          onChange={(e) => setDate(new Date(e.target.value))}
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
