import Game from "@/components/Game";

async function getCategoryGame(category) {
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
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

const CategoryPage = async ({ params }) => {
  const { category } = params;
  const data = await getCategoryGame(category);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6">
      <h4 className="font-bold border-b-[1px] text-3xl mb-2 pb-2 capitalize">
        Games By Category: {category}
      </h4>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
