import { financesDb } from "../database";
import { useMutation, useQuery } from "react-query";

export function useFinances() {
  return useQuery("useFinances", async () => {
    const e = await financesDb.getAll();
    return e?.target.result || [];
  });
}
