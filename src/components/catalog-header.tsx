"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CatalogHeader({ filters }: { filters: string[] }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    if (event.target.value) {
      params.set("genre", event.target.value);
      params.delete("page");
    } else {
      params.delete("genre");
    }
    replace(`?${params.toString()}`);
  }

  return (
    <div className="md:h-60 flex gap-10 flex-col max-w-7xl mx-auto w-full py-3 md:py-12 justify-between">
      <h1 className="font-bold text-2xl text-gray-700 uppercase md:normal-case md:text-4xl">
        Top Sellers
      </h1>
      <div className="flex gap-5 md:self-end">
        <p className="font-bold">Genre</p>
        <div className="bg-gray-300 w-0.5" />
        <select onChange={handleSelect}>
          <option value="">All</option>
          {filters.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
