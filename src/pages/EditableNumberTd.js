import React from "react";
import classes from "./EditableNumberTd.module.css";
import clsx from "clsx";
import { useDoubleTap } from "use-double-tap";

const EditableNumberTd = ({
  i,
  setSelectedExec,
  updateExercise,
  field,
  classNameInput,
}) => {
  const bind = useDoubleTap(() => {
    setSelectedExec(i.id);
  });

  return (
    <td {...bind} className={clsx(classes.td)}>
      <input
        className={clsx(classes.inputNumber, classNameInput)}
        onBlur={(event) => {
          if (
            Number.isNaN(+event.target.value) ||
            +event.target.value === i[field]
          ) {
            return;
          }
          updateExercise(+event.target.value);
        }}
        defaultValue={i[field]}
        type="number"
      />
    </td>
  );
};

export default EditableNumberTd;
