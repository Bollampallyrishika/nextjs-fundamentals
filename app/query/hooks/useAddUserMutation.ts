import { useMutation, useQueryClient } from "@tanstack/react-query";

/*
  Mutation = create/update/delete data
*/
const addUser = async (user: { name: string }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const useAddUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,

    // After mutation, refetch users
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
