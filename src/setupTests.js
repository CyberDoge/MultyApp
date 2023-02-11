
const muscules = [
    {value: 'грудные мышцы', index: "г"},
    {value: 'Широчайшие мышцы спины', index: "Ш"},
    {value: 'плечи', index: "пл"},
    {value: 'трицепс', index: "т"},
    {value: 'Бицепс', index: "Б"},
    {value: 'квадрицпесы', index: "к"},
    {value: 'ягодицы', index: 'я'},
    {value: 'пресс', index: "п"},
    {value: "Ягодичные", key: 'Я'},
    {value: "Трапеции", key: 'Т'},
    {value: "Задняя поверхность бедра (бицепсы бедер)", key: 'З'},
];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)

console.log(toFindDuplicates(muscules.map(m=>m.index)))
