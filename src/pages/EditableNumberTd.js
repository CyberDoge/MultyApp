import React from "react";
import { getKey } from "../models/exercises";
import useLongPress from "../hooks/longClick";
import classes from "./EditableNumberTd.module.css";

const EditableNumberTd = ({ i, setSelectedExec, updateExercise }) => {
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
    <td
      {...longPressEvent}
      className={classes.td}
      onMouseDown={(e) => longPressEvent.onMouseDown({ ...e, id: getKey(i) })}
      onTouchStart={(e) => longPressEvent.onTouchStart({ ...e, id: getKey(i) })}
    >
      <input
        className={classes.inputNumber}
        onBlur={(event) => {
          if (Number.isNaN(+event.target.value)) {
            return;
          }
          updateExercise(+event.target.value);
        }}
        defaultValue={i.mass}
        type="number"
      />
    </td>
  );
};

export default EditableNumberTd;
