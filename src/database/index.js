import { getAll, getById, save, push, sync, remove } from "./exercisesDb";
const event = new Event("dbChange");
export const exercisesDb = {
  save: function () {
    return save(...arguments).then((r) => {
      window.dispatchEvent(event);
      return r;
    });
  },
  getById,
  getAll,
  push: function () {
    return push(...arguments).then((r) => {
      window.dispatchEvent(event);
      return r;
    });
  },
  sync: function () {
    return sync(...arguments).then((r) => {
      window.dispatchEvent(event);
      return r;
    });
  },
  remove: function () {
    return remove(...arguments).then((r) => {
      window.dispatchEvent(event);
      return r;
    });
  },
};
