import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

// custom Hook! empiezan siempre por use...
export const useUsersFiltered = () => {
  const [filter, setFilter] = useState("");
  const [list, setList] = useState([]);
  const [debouncedFilter] = useDebounce(filter, 1000);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${debouncedFilter}`
    )
      .then((r) => r.json())
      .then((result) => setList(result));
  }, [debouncedFilter]);

  return {
    list,
    filter,
    setFilter,
  };
};
