import { getISODay } from "date-fns";

export function getCurrentDay() {
  const day = getISODay(new Date());
  if (day < 3) {
    return 0;
  }
  if (day < 5) {
    return 1;
  }

  return 2;
}
