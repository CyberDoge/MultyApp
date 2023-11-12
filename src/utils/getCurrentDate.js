import { getISODay } from "date-fns";

export function getCurrentDay() {
  const day = getISODay(new Date());
  console.log(day)
  if (day === 7 || day < 3) {
    return 0;
  }
  if (day < 5) {
    return 1;
  }

  return 2;
}
