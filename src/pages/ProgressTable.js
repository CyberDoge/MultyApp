import React, { useCallback, useEffect, useMemo, useState } from "react";
import { exercisesDb } from "../database";
import { allExercises } from "./consts";
import { startOfDay } from "date-fns";
import { useUpdateExercise } from "../models/exercises";
import EditModal from "./EditModal";
import EditableNumberTd from "./EditableNumberTd";

const ProgressTable = () => {
  const [all, setAll] = useState([]);
  const [selectedExec, setSelectedExec] = useState();
  console.log(selectedExec);
  const fillAll = useCallback(() => {
    exercisesDb.getAll().then((e) => {
      setAll(
        e?.target.result.sort((f, s) => f.date.getTime() - s.date.getTime()) ||
          []
      );
    });
  }, []);

  useEffect(() => {
    fillAll();
    window.addEventListener("dbChange", fillAll);

    return fillAll;
  }, [fillAll]);
  const allExercisesFiltered = useMemo(
    () => allExercises.filter((exec) => all.find((i) => i.exec === exec.value)),
    [all]
  );
  const dates = [...new Set(all.map((i) => startOfDay(i.date).getTime()))].map(
    (d) => new Date(d)
  );
  const updateExercise = useUpdateExercise();

  return (
    <table>
      <EditModal
        id={selectedExec}
        isOpen={selectedExec}
        close={() => setSelectedExec(null)}
      />
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
                  <EditableNumberTd
                    i={i}
                    key={index + "mass" + exec.value}
                    setSelectedExec={setSelectedExec}
                    updateExercise={(v) => {
                      updateExercise({
                        ...i,
                        mass: v,
                      });
                    }}
                  />
                ))}
            </tr>
            <tr>
              <td>кол-во</td>
              {all
                .filter((i) => i.exec === exec.value)
                .map((i, index) => (
                  <EditableNumberTd
                    i={i}
                    key={index + "count" + exec.value}
                    setSelectedExec={setSelectedExec}
                    updateExercise={(v) => {
                      updateExercise({
                        ...i,
                        count: v,
                      });
                    }}
                  />
                ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProgressTable;
