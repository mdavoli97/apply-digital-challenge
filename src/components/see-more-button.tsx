"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SeeMoreButton({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleClick() {
    if (currentPage >= totalPages) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", (currentPage + 1).toString());

    replace(`?${params.toString()}`);
  }

  return (
    <button
      className="capitalize bg-[#585660] w-fit p-3 rounded-md text-white"
      onClick={handleClick}
    >
      See more
    </button>
  );
}
