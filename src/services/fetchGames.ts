import { IGamesData } from "@/types/game";
import { useInfiniteQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useFetchGames = ({ genre }: { genre: string }) => {
  return useInfiniteQuery<IGamesData>({
    refetchOnWindowFocus: false,
    queryKey: ["games", genre],
    queryFn: ({ pageParam = 1 }) => {
      return fetch(
        `${API_URL}/games?genre=${
          genre === "all" ? "" : genre
        }&page=${pageParam}`
      ).then((res) => res.json());
    },
    initialPageParam: 1,
    getNextPageParam(res) {
      return res.currentPage < res.totalPages ? res.currentPage + 1 : undefined;
    },
  });
};
