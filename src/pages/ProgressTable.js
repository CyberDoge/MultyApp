import React, { useCallback, useEffect, useMemo, useState } from "react";
import { exercisesDb } from "../database";
import { allExercises } from "./consts";
import { startOfDay } from "date-fns";
import { getKey, useUpdateExercise } from "../models/exercises";
import useLongPress from "../hooks/longClick";
import EditModal from "./EditModal";

const ProgressTable = () => {
  const [all, setAll] = useState([]);
  const [selectedExec, setSelectedExec] = useState();
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

  const longPressEvent = useLongPress(
    ({ id }) => {
      setSelectedExec(id);
    },
    null,
    {
      shouldPreventDefault: true,
      delay: 500,
    }
  );

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
                  <td
                    {...longPressEvent}
                    contentEditable
                    onMouseDown={(e) =>
                      longPressEvent.onMouseDown({ ...e, id: getKey(i) })
                    }
                    onTouchStart={(e) =>
                      longPressEvent.onTouchStart({ ...e, id: getKey(i) })
                    }
                    onBlur={(event) => {
                      updateExercise({
                        ...i,
                        mass: +event.target.innerHTML,
                      });
                    }}
                    key={index + "mass" + exec.value}
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
                    contentEditable
                    onMouseDown={(e) =>
                      longPressEvent.onMouseDown({ ...e, id: getKey(i) })
                    }
                    onTouchStart={(e) =>
                      longPressEvent.onTouchStart({ ...e, id: getKey(i) })
                    }
                    key={index + "count" + exec.value}
                    onBlur={(event) => {
                      updateExercise({
                        ...i,
                        count: +event.target.innerHTML,
                      });
                    }}
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
