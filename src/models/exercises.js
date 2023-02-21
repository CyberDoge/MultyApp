import { exercisesDb } from "../database";

export function useUpdateExercise() {
  return (exercise) => {
    const { result } = exercisesDb.save(exercise);
    return result;
  };
}

export function useSaveExercise() {
  return (exercise) => {
    const { result } = exercisesDb.save(exercise);
    return result;
  };
}

export function getKey(exec) {
  return exec.id;
}
