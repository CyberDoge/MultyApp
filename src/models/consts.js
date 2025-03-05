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
      value: "Сведение рук бабочка",
      type: ["г"],
      link: "https://www.youtube.com/watch?v=kiLiQ0W5fYQ"
    },
    {
      value: "тяга к спине",
      type: ["Ш"],
      link: "https://youtube.com/shorts/G_HxzH9cHBE"
    },
    {
      value: "Приседания со штангой",
      type: ["к", "я"],
      link: "https://youtube.com/shorts/G_HxzH9cHBE"
    },
    {
      value: "Становая тяга на прямых ногах",
      type: ["З", "я"],
      link: "https://youtube.com/shorts/G_HxzH9cHBE"
    },
    {
      value: "молотки в блоке",
      type: ["пл-луч-мышцы"],
      link: "https://youtu.be/3VAWB60ODJo?t=24"
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
      value: "Разгибание на трицепс над головой в кроссовере",
      type: ["т"],
      link: "https://www.youtube.com/shorts/mTcgRhhAkXM"
    },
    {
      value: "Бицепс в кроссовере растянутая позиция",
      type: ["Б"],
      link: "https://www.youtube.com/shorts/AnZeqeW4uGw"
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
      value: "Плечи в кроссовере растянута позиция",
      type: ["п"],
      link: "https://www.youtube.com/watch?v=gf2xr1UaMBA",
    },
    {
      value: "Отведение на блоке (Задние дельты)",
      type: ["з-дельты"],
      link: "https://youtu.be/mrdJxJDCjwE?t=66",
    },
  ],
  [
    {
      value: "Жим штанги лежа средним хватом",
      type: ["г", "Б"],
      link: "https://www.youtube.com/shorts/jWdzYreqKLc"
    },
    {
      value: "Тяга штанги в наклоне",
      type: ["Ш"],
      link: "https://www.youtube.com/shorts/NtDgLs1tBb4"
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
      value: "Жим гантелей сидя",
      type: ["п"],
      link: "https://www.youtube.com/watch?v=Wyj0OR7tPLk?feature=share"
    },
    { value: "подтягивания", "type": ["Ш"], link: "https://www.youtube.com/watch?v=chawvGPn-Wo" },
  ]
];
export const allExercises = exercises.flat();
