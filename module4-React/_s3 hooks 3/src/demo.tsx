import React from "react";
import { useUsersFiltered } from "./use-users-filtered.hook";

export const Demo = () => {
  const { list, filter, setFilter } = useUsersFiltered();

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
