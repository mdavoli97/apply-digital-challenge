"use client";

import CatalogHeader from "@/components/catalog-header";
import GameCard from "@/components/game-card";
import Spinner from "@/components/spinner";
import { useFetchGames } from "@/services/fetchGames";
import { cn } from "@/utils/utils";
import { Fragment } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedGenre = (searchParams?.genre || "") as string;

  const {
    data: gamesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useFetchGames({
    genre: selectedGenre,
  });

  return (
    <main className="container mx-auto flex flex-col p-5 md:p-0 min-h-screen">
      <CatalogHeader
        filters={gamesData?.pages[0]?.availableFilters!}
        selectedGenre={selectedGenre}
        isLoading={isLoading}
      />

      {gamesData?.pages.length === 0 ? (
        <div className="flex justify-center">
          <p>No games found</p>
        </div>
      ) : (
        <div className="my-6 md:my-12 max-w-7xl mx-auto flex flex-col gap-12">
          {isLoading ? (
            <Spinner className="mt-20" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {gamesData?.pages.map((group, i) => (
                <Fragment key={i}>
                  {group?.games?.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </Fragment>
              ))}
            </div>
          )}

          {gamesData && gamesData?.pages[0]?.games.length > 11 ? (
            <button
              className={cn(
                "capitalize bg-[#585660] w-fit p-3 rounded-md text-white",
                {
                  hidden: !hasNextPage,
                }
              )}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
          ) : null}
        </div>
      )}
    </main>
  );
}
