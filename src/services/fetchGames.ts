import { IGamesData } from "@/types/game";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchGames(
  genre?: string,
  page: number = 1
): Promise<IGamesData> {
  const url = new URL(`${API_URL}/games`);

  if (genre) {
    url.searchParams.append("genre", genre);
  }
  url.searchParams.append("page", page.toString());

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}
