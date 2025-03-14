import { IGame } from "@/types/game";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchGames(): Promise<{ games: IGame[] }> {
  const response = await fetch(`${API_URL}/games`);

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}
