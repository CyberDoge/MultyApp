export const muscles = [
  { value: "грудные мышцы", key: "г" },
  { value: "Широчайшие мышцы спины", key: "Ш" },
  { value: "плечи", key: "п" },
  { value: "трицепс", key: "т" },
  { value: "Бицепс", key: "Б" },
  { value: "квадрицпесы", key: "к" },
  { value: "ягодицы", key: "я" },
  { value: "пресс", key: "пр" },
  { value: "Ягодичные", key: "Я" },
  { value: "Трапеции", key: "Т" },
  { value: "Задняя поверхность бедра (бицепсы бедер)", key: "З" },
];

export const exercises = [
  [
    {
      value: "Жим гантелей лежа",
      type: ["г"],
      link: "https://www.youtube.com/shorts/FBIIDKZbLLY",
    },
    {
      value: "Тяга горизонтального блока паралелльным хватом на широчайшие",
      type: ["Ш"],
      link: "https://www.youtube.com/watch?v=WrWb95t_9BQ",
    },
    {
      value: "Махи гантелей на среднюю дельту",
      type: ["п"],
      link: "https://www.youtube.com/shorts/buyc4l5M0oE",
    },
    {
      value: "Разгибание рук в блоке стоя",
      type: ["т"],
      link: "https://www.youtube.com/watch?v=IeXmX0avqZQ",
    },
    {
      value: "Сгибание на бицепс сидя на лавке",
      type: ["Б"],
      link: "https://www.youtube.com/watch?v=52SmOuScHvo",
    },
    {
      value: "Жим ногами со акцентом на квадрицепс",
      type: ["к", "я"],
      link: "https://www.youtube.com/watch?v=2VZuiPx6IW0",
    },
    {
      value: "Скручивание с фитболом",
      type: ["пр"],
      link: "https://youtu.be/ciFXMZCssnU?t=39",
    },
  ],
  [
    {
      value: "Болгарский сплит-присед с гантелями либо в смите",
      type: ["Я", "к"],
      link: "https://www.youtube.com/watch?v=0lP7rMaZb2c",
    },
    {
      value: "Тяга широким хватом в груди",
      type: ["Т"],
      link: "https://www.youtube.com/watch?v=kmwrwASiGp4",
    },
    {
      value: "Жим гантелей сидя",
      type: ["п"],
      link: "https://www.youtube.com/watch?v=Wyj0OR7tPLk?feature=share",
    },
    {
      value: "Бицепс в кроссовере растянутая позиция",
      type: ["Б"],
      link: "https://www.youtube.com/watch?v=AnZeqeW4uGw",
    },
    {
      value: "Сгибание ног лежа",
      type: ["З"],
      link: "https://www.youtube.com/watch?v=vByupeWa1G4",
    },
    {
      value: "Разгибание на трицепс над головой в кроссовере",
      type: ["т"],
      link: "https://www.youtube.com/watch?v=mTcgRhhAkXM",
    },
  ],
  [
    {
      value: "Тяга верхнего блока одной рукой",
      type: ["Ш"],
      link: "https://youtu.be/9wcIJfe-ofs?t=33",
    },
    {
      value: "Сведение рук бабочка",
      type: ["г"],
      link: "https://www.youtube.com/watch?v=kiLiQ0W5fYQ",
    },
    {
      value: "Бицепс в кроссовере сокращенная позиция",
      type: ["Б"],
      link: "https://www.youtube.com/watch?v=13hfmyUuZD4",
    },
    {
      value: "Плечи в кроссовере растянута позиция",
      type: ["п"],
      link: "https://www.youtube.com/watch?v=gf2xr1UaMBA",
    },
    {
      value: "Разгибание ног сидя",
      type: ["к"],
      link: "https://www.youtube.com/watch?v=WHzXyy7coBc",
    },
    {
      value: "Французкий жим с гантелями/изогнутой штангой",
      type: ["т"],
      link: "https://www.youtube.com/watch?v=FBsFqk61jnw",
    },
  ],
];

export const allExercises = exercises.flat();
