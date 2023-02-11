import React, {useState} from 'react';
import classes from './Progress.module.css'
import {exercisesDb} from "../database";
import {allExercises, exercises, muscles} from "./consts";
import {startOfDay} from "date-fns";


const Progress = () => {
    const [exec, setExec] = useState(allExercises[0].value);
    const [mass, setMass] = useState(0);
    const [count, setCount] = useState(0);
    const [repeats, setRepeats] = useState(0);
    const [message, setMessage] = useState(undefined);

    const submit = async (e) => {
        e.preventDefault();
        console.log(exec, mass, count, repeats)
        if(!(exec && mass && count && repeats)){
            return setMessage("не все заполенено")
        }
        const res = await exercisesDb.save({exec, mass, count, repeats, date: startOfDay(new Date())})
        setMessage(res.type || "ошибка")
        setTimeout(() => {
            setMessage(undefined)
        }, 5000)
        setExec(undefined);
        setMass(undefined);
        setCount(undefined);
        setRepeats(undefined);
    }

    return (
        <form className={classes.form} onSubmit={submit}>
            <p>Выбрано: {muscles.find(value => value.key === exec)?.value}</p>
            <label>
                <span className={classes.labelSubtext}>Упражнение:&nbsp;</span>
                <select value={exec} onChange={e => setExec(e.target.value)}>
                    {allExercises.map(e => (
                        <option key={e.value} value={e.value}>{e.value}</option>
                    ))}
                </select>
            </label>
            <label>
                <span className={classes.labelSubtext}>Вес:&nbsp;</span>
                <input type='number' value={mass}
                       onChange={e => setMass(+e.target.value || undefined)}/>
                <button onClick={(e) => {
                    setMass(c => 5+c);
                    e.preventDefault();
                }}>
                    Увеличить вес на 5
                </button>
            </label>
            <label>
                <span className={classes.labelSubtext}>Кол-во:&nbsp;</span>
                <input type='number' value={count}
                       onChange={e => setCount(+e.target.value || undefined)}/>
                <div className={classes.count}>
                <button onClick={(e) => {
                    setCount(c => 2+c);
                    e.preventDefault();
                }}>
                    Увеличить кол-во на 2
                </button>
                    <button onClick={(e) => {
                    setCount(c => 2+c);
                    e.preventDefault();
                }}>
                    Увеличить кол-во на 2
                </button>
                </div>
            </label>
            <label>
                <span className={classes.labelSubtext}>Подходы:&nbsp;</span>
                <input type='number' value={repeats}
                       onChange={e => setRepeats(+e.target.value || undefined)}/>
                <button onClick={(e) => {
                    setRepeats(c => ++c);
                    e.preventDefault();
                }}>
                    Увеличить подход на 1
                </button>
            </label>

            <button className={classes.submit} type="submit">Сохранить</button>
            <h3>{message}</h3>
        </form>
    );
};

export default Progress;
