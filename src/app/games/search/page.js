import SearchForm from "@/components/SearchForm";
import SearchGames from "@/components/SearchGames";
import { Suspense } from "react";

async function getGames() {
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c608db5bb7msh9c022b0bd809299p120358jsn6b85131880c7",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    },
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.log("Error");
  }

  return res.json();
}

const SearchPage = async ({ searchParams }) => {
  const data = await getGames();
  const firstGames = data.slice(0, 9);
  const query = searchParams?.query || "";
  const result = data?.filter((game) =>
    game.title.toLowerCase().includes(query)
  );

  return (
    <main className="flex flex-col md:p-24 p-6">
      <div className="relative text-3xl font-bold">
        <h4 className="mb-3 pb-3 border-b-[1px] w-fit ">Find Game</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-6 h-6 absolute top-2 left-40">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <SearchForm />
      <Suspense key={query} fallback="Loading...">
        {query ? (
          <SearchGames result={result} />
        ) : (
          <SearchGames result={firstGames} />
        )}
      </Suspense>
    </main>
  );
};

export default SearchPage;
