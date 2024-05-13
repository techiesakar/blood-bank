import { fetchData, postData } from "@/api/action";
import { ActionType } from "@/lib/types/action-type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFetch = (path: string) => {
  const [__, key, id] = path.split("/");

  return useQuery({
    queryKey: id ? [key, id] : [key],
    queryFn: () => fetchData(path),
  });
};

export const usePost = async <T>(path: string, type: ActionType) => {
  // const queryClient = useQueryClient();

  // const [__, key, id] = path.split("/");

  // const queryKey = id ? [key, id] : [key];

  const mutation = useMutation({
    mutationFn: async (values: T) => await postData(path, values, type),
  });
  return mutation;
};
