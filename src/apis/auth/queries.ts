import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./request";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getProfile,
  });
};
