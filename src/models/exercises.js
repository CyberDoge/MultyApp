import { save } from "../database/exercisesDb";

export function useUpdateExercise() {
  return (exercise) => {
    const { result } = save(exercise);
    return result;
  };
}

export function useSaveExercise() {
  return (exercise) => {
    const { result } = save(exercise);
    return result;
  };
}

export function getKey(exec) {
  return exec.exec + " " + exec.date.getTime();
}
