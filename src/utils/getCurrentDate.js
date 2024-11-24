import { getISODay } from "date-fns";

export function getCurrentDay() {
  const day = getISODay(new Date());

  if(day > 0 && day < 3) {
    return 0
  }
  if (day > 2 && day < 5) {
    return 1;
  }
  return 3;
}
