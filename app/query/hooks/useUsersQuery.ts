import { useQuery } from "@tanstack/react-query";

/*
  Fetch function (Business Logic)
*/
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

/*
  useQuery:
  - fetches data
  - caches data
  - handles loading & error automatically
*/
export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"], // cache key
    queryFn: fetchUsers,
  });
};
