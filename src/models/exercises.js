import { exercisesDb } from "../database";
import { useMutation, useQuery } from "react-query";

export function useExercises() {
  return useQuery("useExercises", async () => {
    const e = await exercisesDb.getAll();
    return (
      e?.target.result.sort((f, s) => f.date.getTime() - s.date.getTime()) || []
    );
  });
}

export function useExercise(id) {
  return useQuery(
    ["useExercise", id],
    () => {
      return exercisesDb.getById(id).then((event) => event.target.result);
    },
    {
      enabled: !!id,
    }
  );
}

export function useUpdateExercise() {
  const { refetch } = useExercises();
  return useMutation((exercise) => exercisesDb.save(exercise), {
    onSuccess: refetch,
  });
}

export function useSaveExercise() {
  const { refetch } = useExercises();
  return useMutation((exercise) => exercisesDb.save(exercise), {
    onSuccess: refetch,
  });
}
export function usePushExercises() {
  return useMutation(() => exercisesDb.push());
}
export function useSyncExercises() {
  const { refetch } = useExercises();

  return useMutation(() => exercisesDb.sync(), {
    onSuccess: refetch,
  });
}
export function useRemoveExercise() {
  const { refetch } = useExercises();

  return useMutation((exercise) => exercisesDb.remove(exercise), {
    onSuccess: refetch,
  });
}
