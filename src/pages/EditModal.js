import React, { useEffect, useState } from "react";
import classes from "./ProgressTable.module.css";
import Modal from "react-modal";
import {
  useExercise,
  useRemoveExercise,
  useSaveExercise,
} from "../models/exercises";
import { format } from "date-fns";

const EditModal = ({ id, isOpen, close }) => {
  const [exec, setExec] = useState(null);
  const { data } = useExercise(id);
  useEffect(() => {
    if (data) {
      setExec(data);
    }
  }, [data]);
  const { mutate: save } = useSaveExercise();
  const { mutate: remove } = useRemoveExercise();
  if (!isOpen) {
    return null;
  }
  if (!exec) {
    return <p>загрузка #{id}</p>;
  }
  const submit = () => {
    if (exec) {
      save(exec);
    }
    close();
  };
  const deleteExec = () => {
    if (exec) {
      remove(exec);
    }
    close();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={close} contentLabel="Удалить">
      <label>
        <span>масса</span>
        <input
          type="number"
          value={exec.mass}
          onChange={(event) =>
            setExec((e) => ({ ...e, mass: +event.target.value }))
          }
        />
      </label>
      <label>
        <span>кол-во</span>
        <input
          type="number"
          value={exec.count}
          onChange={(event) =>
            setExec((e) => ({ ...e, count: +event.target.value }))
          }
        />
      </label>
      <label>
        <span>дата</span>
        <input
          type="date"
          value={format(exec.date, "yyyy-MM-dd")}
          onChange={(event) =>
            setExec((e) => ({ ...e, date: new Date(event.target.value) }))
          }
        />
      </label>
      <div className={classes.modalButtonContainer}>
        <button onClick={submit}>Сохранить</button>
      </div>
      <h3 className={classes.modalTitle}>Удалить</h3>
      <div className={classes.modalButtonContainer}>
        <button onClick={deleteExec}>Да</button>
        <button onClick={close}>Нет</button>
      </div>
    </Modal>
  );
};

export default EditModal;
