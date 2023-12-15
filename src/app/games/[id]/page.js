import Gallery from "@/components/Gallery";
import Image from "next/image";

async function getSingleGame(id) {
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c608db5bb7msh9c022b0bd809299p120358jsn6b85131880c7",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    console.log("Error");
  }

  return res.json();
}

const GamePage = async ({ params }) => {
  const { id } = params;
  const game = await getSingleGame(id);
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 p-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <Image
            src={game.thumbnail}
            width={800}
            height={900}
            className="w-full rounded-md"
          />

          <a
            className="text-white text-2xl bg-green-500 mt-3 py-1 px-5 font-bold hover:bg-green-600 block text-center"
            href={game.freetogame_profile_url}
            target="_blank">
            Play
          </a>
        </div>

        <div className="md:col-span-6 col-span-12 space-y-1">
          <h1 className="font-bold text-2xl md:text-3xl mb-3">{game.title}</h1>
          <ul className="space-y-3 border-b-[1px] mb-2 pb-2 border-gray-100">
            <li>
              <span className="font-bold">Genre:</span> {game.genre}
            </li>
            <li>
              <span className="font-bold">PlatForm:</span> {game.platform}
            </li>
            <li>
              <span className="font-bold">Developed: </span>
              {game.developer}
            </li>
            <li>
              <span className="font-bold">Release:</span> {game.release_date}
            </li>

            <li>
              <span className="font-bold">Short Description: </span>
              {game.short_description}
            </li>
          </ul>
        </div>

        <div className="col-span-12">
          {game.minimum_system_requirements && (
            <>
              <h4 className="text-xl font-bold mb-2">Minimum system</h4>
              <table className="border border-gray-300">
                <tbody>
                  <tr className="border border-gray-500">
                    <th className="border border-gray-400 capitalize">OS</th>
                    <td className="px-2">
                      {game.minimum_system_requirements?.os}
                    </td>
                  </tr>
                  <tr className="border border-gray-500">
                    <th className="border border-gray-400 capitalize">
                      processor
                    </th>
                    <td className="px-2">
                      {game.minimum_system_requirements?.processor}
                    </td>
                  </tr>
                  <tr className="border border-gray-500">
                    <th className="border border-gray-400 capitalize">
                      memory
                    </th>
                    <td className="px-2">
                      {game.minimum_system_requirements?.memory}
                    </td>
                  </tr>
                  <tr className="border border-gray-500">
                    <th className="border border-gray-400 capitalize">
                      graphics
                    </th>
                    <td className="px-2">
                      {game.minimum_system_requirements?.graphics}
                    </td>
                  </tr>
                  <tr className="border border-gray-500">
                    <th className="border border-gray-400 capitalize">
                      storage
                    </th>
                    <td className="px-2">
                      {game.minimum_system_requirements?.storage}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>

        <div className="col-span-12">
          <h1 className="text-2xl mb-1 border-b-[1px] border-gray-100 pb-1 font-semibold">
            Description
          </h1>
          <div className="whitespace-pre-line font-serif">
            {game.description}
          </div>
        </div>
      </div>

      {game.screenshots && (
        <div className="mt-3">
          <h3 className="text-2xl font-semibold border-b-[1px] pb-1 mb-1">
            Images In Game
          </h3>

          <Gallery images={game.screenshots} />
        </div>
      )}
    </main>
  );
};

export default GamePage;
