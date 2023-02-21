import React, { useEffect, useState } from "react";
import classes from "./ProgressTable.module.css";
import Modal from "react-modal";
import { exercisesDb } from "../database";

const EditModal = ({ id, isOpen, close }) => {
  const [exec, setExec] = useState(null);
  useEffect(() => {
    if (id === null || id === undefined) {
      return;
    }
    exercisesDb.getById(id).then((event) => {
      setExec(event.target.result);
    });
  }, [id]);
  if (!isOpen) {
    return null;
  }
  if (!exec) {
    return <p>загрузка #{id}</p>;
  }
  const submit = () => {
    // todo подумать над удалением строй записи
    exercisesDb.save(exec);
    close();
  };
  const deleteExec = () => {
    // todo подумать над удалением строй записи
    exercisesDb.remove(exec);
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
        <span>повторений</span>
        <input
          type="number"
          value={exec.repeats}
          onChange={(event) =>
            setExec((e) => ({ ...e, repeats: +event.target.value }))
          }
        />
      </label>
      <label>
        <span>дата</span>
        <input
          type="date"
          value={exec.date.toISOString().split("T")[0]}
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
