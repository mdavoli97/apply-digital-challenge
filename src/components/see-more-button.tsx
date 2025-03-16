import { cn } from "@/utils/utils";
import Spinner from "./spinner";

export default function SeeMoreButton({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}) {
  return (
    <button
      className={cn(
        "uppercase bg-[#585660] text-sm w-fit p-4 px-5 rounded-md text-white",
        {
          hidden: !hasNextPage,
        },
        {
          "bg-transparent text-black": isFetchingNextPage,
        }
      )}
      onClick={() => fetchNextPage()}
      disabled={!hasNextPage || isFetchingNextPage}
    >
      {isFetchingNextPage ? (
        <div className="flex gap-2">
          <Spinner /> Loading more...
        </div>
      ) : hasNextPage ? (
        "See More"
      ) : (
        "Nothing more to load"
      )}
    </button>
  );
}
