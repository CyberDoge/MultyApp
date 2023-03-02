import React, { useMemo, useState } from "react";
import { allExercises } from "./consts";
import { format, isSameDay, startOfDay } from "date-fns";
import { useExercises, useUpdateExercise } from "../models/exercises";
import EditModal from "./EditModal";
import EditableNumberTd from "./EditableNumberTd";
import { clsx } from "clsx";
import classes from "./ProgressTable.module.css";

const ProgressTable = () => {
  const { data: exercises = [] } = useExercises();
  const [selectedExec, setSelectedExec] = useState();
  const [showTable, setShowTable] = useState(false);

  const constExercises = useMemo(() => {
    if (exercises) {
      return allExercises.filter((exec) =>
        exercises.find((i) => i.exec === exec.value)
      );
    }
    return [];
  }, [exercises]);

  const dates = [
    ...new Set(exercises.map((i) => startOfDay(i.date).getTime())),
  ].map((d) => new Date(d));

  const { mutate: updateExercise } = useUpdateExercise();

  const toggleTable = () => {
    setShowTable((v) => !v);
  };
  return (
    <table className={classes.table}>
      <EditModal
        id={selectedExec}
        isOpen={selectedExec}
        close={() => setSelectedExec(null)}
      />
      <thead onClick={() => toggleTable()}>
        <tr>
          <th colSpan={100}>Таблица с результатами</th>
        </tr>
        <tr className={clsx(!showTable && "hidden")}>
          <td colSpan={2}>дата</td>
          {dates.map((i, index) => (
            <td key={index + "date"}>{format(i, "dd.MM")}</td>
          ))}
        </tr>
      </thead>
      <tbody className={clsx(!showTable && "hidden")}>
        {constExercises.map((constExec) => (
          <React.Fragment key={constExec.value}>
            <tr>
              <td rowSpan={2}>{constExec.value}</td>
              <td>В</td>
              {dates
                .map((i) => {
                  return exercises.find((item) => {
                    return (
                      item.exec === constExec.value && isSameDay(i, item.date)
                    );
                  });
                })
                .map((item, index) =>
                  item ? (
                    <EditableNumberTd
                      field={"mass"}
                      i={item}
                      key={index + "mass" + constExec.value}
                      setSelectedExec={setSelectedExec}
                      updateExercise={(v) => {
                        updateExercise({
                          ...item,
                          mass: v,
                        });
                      }}
                    />
                  ) : (
                    <td key={index + "mass" + constExec.value} />
                  )
                )}
            </tr>
            <tr className="bg-gray-200">
              <td>К</td>
              {dates
                .map((i) => {
                  return exercises.find((item) => {
                    return (
                      item.exec === constExec.value && isSameDay(i, item.date)
                    );
                  });
                })
                .map((item, index) =>
                  item ? (
                    <EditableNumberTd
                      classNameInput="bg-gray-200"
                      field={"count"}
                      i={item}
                      key={index + "count" + constExec.value}
                      setSelectedExec={setSelectedExec}
                      updateExercise={(v) => {
                        updateExercise({
                          ...item,
                          count: v,
                        });
                      }}
                    />
                  ) : (
                    <td key={index + "mass" + constExec.value} />
                  )
                )}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProgressTable;
