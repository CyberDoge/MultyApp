import { getISODay } from "date-fns";

export function getCurrentDay() {
  const day = getISODay(new Date());
  console.log(day)
  if(day === 1) {
    return 0
  }
  if (day > 1 && day < 3) {
    return 1;
  }
  if (day < 5) {
    return 2;
  }

  return 3;
}
