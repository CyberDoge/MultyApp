export const muscles = [
  { value: "грудные мышцы", key: "г" },
  { value: "Широчайшие мышцы спины", key: "Ш" },
  { value: "плечи", key: "п" },
  { value: "задние дельты", key: "з-дельты" },
  { value: "трицепс", key: "т" },
  { value: "Бицепс", key: "Б" },
  { value: "квадрицпесы", key: "к" },
  { value: "ягодицы", key: "я" },
  { value: "пресс", key: "пр" },
  { value: "Ягодичные", key: "Я" },
  { value: "Трапеции", key: "Т" },
  { value: "Задняя поверхность бедра (бицепсы бедер)", key: "З" },
  { value: "Предплечия", key: "предпл" },
  { value: "Икры", key: "Икры" },
  { value: "Приводящие мышцы бедра", key: "пмб" },
  { value: "плечелучевая мышца", key: "пл-луч-мышцы" },
];

export const exercises = [
  [
    {
      value: "Жим гантелей лежа",
      type: ["г"],
      link: "https://www.youtube.com/shorts/FBIIDKZbLLY"
    },
    {
      value: "молотки в блоке",
      type: ["пл-луч-мышцы"],
      link: "https://youtu.be/3VAWB60ODJo?t=24"
    },
    {
      value: "Махи гантелей на среднюю дельту",
      type: ["п"],
      link: "https://www.youtube.com/shorts/buyc4l5M0oE"
    },
    {
      value: "Жим ногами со акцентом на квадрицепс",
      type: ["к", "я"],
      link: "https://www.youtube.com/watch?v=2VZuiPx6IW0"
    },
    {
      value: "подъем на носки",
      type: ["Икры"],
      link: "https://youtu.be/CYFhrdjfCK8?t=1624"
    },
    {
      value: "Сгибание на бицепс сидя на лавке",
      type: ["Б"],
      link: "https://www.youtube.com/watch?v=52SmOuScHvo"
    },
    {
      value: "Французкий жим с гантелями/изогнутой штангой",
      type: ["т"],
      link: "https://www.youtube.com/watch?v=FBsFqk61jnw"
    },
  ],
  // -----

  [
    {
      value: "Жим гантелей сидя",
      type: ["п"],
      link: "https://www.youtube.com/watch?v=Wyj0OR7tPLk?feature=share"
    },
    {
      value: "Сведение рук бабочка",
      type: ["г"],
      link: "https://www.youtube.com/watch?v=kiLiQ0W5fYQ"
    },
    {
      value: "Сгибание ног стоя",
      type: ["З"],
      link: "https://www.youtube.com/shorts/LGSqlxsN6hc"
    },
    {
      value: "Разгибание ног сидя",
      type: ["к"],
      link: "https://www.youtube.com/watch?v=WHzXyy7coBc"
    },
    {
      value: "Разгибание рук в блоке стоя",
      type: ["т"],
      link: "https://www.youtube.com/watch?v=IeXmX0avqZQ"
    },
    {
      value: "подъем на носки",
      type: ["Икры"],
      link: "https://youtu.be/CYFhrdjfCK8?t=1624"
    },
    {
      value: "Бицепс в кроссовере сокращенная позиция",
      type: ["Б"],
      link: "https://www.youtube.com/watch?v=13hfmyUuZD4"
    },
  ],
  // -----
  [
    {
      value: "отжимания на брусьях",
      type: ["г", "Б"],
      link: "https://www.youtube.com/watch?v=oBou1aR3KTU"
    },
    { value: "подтягивания", "type": ["Ш"], link: "https://www.youtube.com/watch?v=chawvGPn-Wo" },
    {
      value: "Плечи в кроссовере растянута позиция",
      type: ["п"],
      link: "https://www.youtube.com/watch?v=gf2xr1UaMBA",
    },
    {
      value: "Отведение на блоке (Задние дельты)",
      type: ["з-дельты"],
      link: "https://youtu.be/mrdJxJDCjwE?t=66",
    },
    {
      value: "Приводящие мышцы бедра",
      type: ["пмб"],
      link: "https://www.youtube.com/watch?v=O-BVD9uhGTc"
    },
    {
      value: "подъем на носки",
      type: ["Икры"],
      link: "https://youtu.be/CYFhrdjfCK8?t=1624",
    },
    {
      value: "Сгибания и разгибания запястия",
      type: ["предпл"],
      link: "https://youtu.be/3VAWB60ODJo?t=39"
    },
  ]
];
export const allExercises = exercises.flat();
