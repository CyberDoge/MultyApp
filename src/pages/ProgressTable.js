import React, { useEffect, useMemo, useState } from "react";
import { exercisesDb } from "../database";
import { allExercises } from "./consts";
import { startOfDay } from "date-fns";
import { useUpdateExercise } from "../models/exercises";
import Modal from "react-modal";
import useLongPress from "../hooks/longClick";
import classes from "./ProgressTable.module.css";

const ProgressTable = () => {
  const [all, setAll] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    exercisesDb.getAll().then((e) => {
      setAll(
        e?.target.result.sort((f, s) => f.date.getTime() - s.date.getTime()) ||
          []
      );
    });
  }, []);
  const allExercisesFiltered = useMemo(
    () => allExercises.filter((exec) => all.find((i) => i.exec === exec.value)),
    [all]
  );
  const dates = [...new Set(all.map((i) => startOfDay(i.date).getTime()))].map(
    (d) => new Date(d)
  );
  const updateExercise = useUpdateExercise();

  const longPressEvent = useLongPress(() => setModal(true), null, {
    shouldPreventDefault: true,
    delay: 500,
  });

  return (
    <table>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        contentLabel="Удалить"
      >
        <h3 className={classes.modalTitle}>Удалить</h3>
        <div
          className={classes.modalButtonContainer}
          style={{ display: "flex", gap: 30 }}
        >
          <button>Да</button>
          <button>Нет</button>
        </div>
      </Modal>
      <thead>
        <tr>
          <th colSpan={100}>Таблица с результатами</th>
        </tr>
        <tr>
          <td colSpan={2}>дата</td>
          {dates.map((i, index) => (
            <td key={index + "date"}>{i.getDay()}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {allExercisesFiltered.map((exec) => (
          <React.Fragment key={exec.value}>
            <tr>
              <td rowSpan={2}>{exec.value}</td>
              <td>вес</td>
              {all
                .filter((i) => i.exec === exec.value)
                .map((i, index) => (
                  <td
                    {...longPressEvent}
                    onBlur={(event) =>
                      updateExercise({
                        ...i,
                        mass: +event.target.innerHTML,
                      })
                    }
                    key={index + "mass" + exec.value}
                    contentEditable
                  >
                    {i.mass}
                  </td>
                ))}
            </tr>
            <tr>
              <td>кол-во</td>
              {all
                .filter((i) => i.exec === exec.value)
                .map((i, index) => (
                  <td
                    {...longPressEvent}
                    key={index + "count" + exec.value}
                    contentEditable
                    onBlur={(event) =>
                      updateExercise({
                        ...i,
                        count: +event.target.value,
                      })
                    }
                  >
                    {i.count}
                  </td>
                ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProgressTable;
