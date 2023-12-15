import Game from "@/components/Game";
import Pagination from "@/components/Pagination";

async function getData(page = 1) {
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games`,
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
  const data = await res.json();
  const dataPerPage = 24;
  const totalPages = Math.ceil(data?.length / dataPerPage);
  let currentPage = page;
  let lastIndexPage = dataPerPage * currentPage;
  let firstIndexPage = lastIndexPage - dataPerPage;
  let totalData = data.slice(firstIndexPage, lastIndexPage);

  return { totalData, totalPages };
}

export default async function Home({ searchParams }) {
  const page = searchParams?.page || 1;
  const { totalData: data, totalPages } = await getData(page);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6">
      <h3 className="text-6xl text-center mb-6 font-bold">Games</h3>
      <div className="grid grid-cols-3 gap-4">
        {data.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={page} />
    </main>
  );
}
