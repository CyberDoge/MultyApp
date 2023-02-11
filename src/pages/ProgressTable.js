import React, {useEffect, useMemo, useState} from 'react';
import {exercisesDb} from "../database";
import {allExercises} from "./consts";
import {startOfDay} from "date-fns";

const ProgressTable = () => {
    const [all, setAll] = useState([]);
    useEffect(() => {
        exercisesDb.getAll().then(e => {
            console.log(e)
            setAll(e?.target.result.sort((f, s) => f.date.getTime() - s.date.getTime())
                || [])
        })
    }, [])
    const allExercisesFiltered = useMemo(() =>
        allExercises.filter(exec => all.find((i) => i.exec === exec.value)), [all])
    const dates = [...new Set(all.map((i) => startOfDay(i.date).getTime()))].map(d=>new Date(d));
    console.log(allExercisesFiltered, all)
    return (
        <table>
            <thead>
            <tr>
                <th colSpan={100}>Таблица с результатами</th>
            </tr>
            <tr>
                <td colSpan={2}>дата</td>
                {dates.map((i, index) => (<td key={index}>{i.getDay()}</td>))}</tr>
            </thead>
            <tbody>
            {allExercisesFiltered.map((exec) => (
                <>
                    <tr>
                        <td rowSpan={2}>{exec.value}</td>
                        <td>вес</td>
                        {all.filter(i => i.exec === exec.value).map((i, index) => (
                            <td onBlur={} key={index} contentEditable>{i.mass}</td>))}
                    </tr>
                    <tr>
                        <td>кол-во</td>
                        {all.filter(i => i.exec === exec.value).map((i, index) => (
                            <td key={index} contentEditable>{i.count}</td>))}
                    </tr>
                </>
            ))}
            </tbody>
        </table>
    )
};

export default ProgressTable;
