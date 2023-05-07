import React from "react";
import { format } from "date-fns";
import { useFinances } from "../models/finances";

const Finance = () => {
  const { data, isLoading } = useFinances();
  const placeVariants = data?.map((d) => d.place) || [];
  const currencyVariants = data?.map((d) => d.currency) || [];
  if (isLoading) {
    return "Loading";
  }
  return (
    <div>
      <table>
        <thead>
          <th>Дата</th>
          <th>Место</th>
          <th colSpan={2}>Сумма</th>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{format(item.date, "dd/MM/yy")}</td>
              <td>{item.place}</td>
              <td>{item.count}</td>
              <td>{item.currency}</td>
              <td>
                <button>X</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input
                type="date"
                defaultValue={format(new Date(), "yyyy-MM-dd")}
              />
            </td>
            <td>
              <input list="placeVariants" />
              <datalist id="placeVariants">
                {placeVariants.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </datalist>
            </td>
            <td>
              <input type="number" step="any" />
            </td>
            <td>
              <input list="currencyVariants" />
              <datalist id="currencyVariants">
                {currencyVariants.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </datalist>
            </td>
            <td>
              <button>Сохранить</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Finance;
