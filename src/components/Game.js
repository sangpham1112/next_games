import Image from "next/image";
import Link from "next/link";

const Game = ({ game }) => {
  const handleNoCaptilize = (str) => {
    let href = "";
    let str2 = str;
    if (str === "MMORPG" || str === "Action RPG" || str === "ARPG") {
      str2 = "action-rpg";
    }
    if (str === "Card" || str === "Card Game") {
      str2 = "card";
    }
    if (str === "Battle Royale") {
      str2 = "battle-royale";
    }
    str2.replace(" ", "-");
    href = "/games/categories/" + str2;
    return href;
  };

  const handleFormatTypeGame = (type) => {
    let href = "";
    if (type == "PC (Windows)") {
      href = "/games/platform/pc";
    }
    if (type == "Web Browser") {
      href = "/games/platform/browser";
    }
    return href;
  };
  return (
    <div
      className="col-span-3 md:col-span-1 space-y-2 my-3 relative min-h-[320px]"
      key={game.id}>
      <Image
        src={game.thumbnail}
        className="rounded-sm mb-2"
        width={800}
        height={800}
        alt={game.id}
      />
      <span className="bg-green-500 max-w-[160px] text-white rounded text-sm p-2 uppercase font-semibold absolute top-1 left-2">
        {game.developer}
      </span>

      <ul className="flex space-x-1">
        <li>
          <Link
            className="rounded-md bg-blue-500 p-1 text-white font-semibold"
            href={handleNoCaptilize(game.genre)}>
            {game.genre}
          </Link>
        </li>
        {game.platform.includes(",") ? (
          game.platform.split(",").map((item, index) => (
            <li key={index}>
              <Link
                href={handleFormatTypeGame(item)}
                className="rounded-md bg-yellow-500 p-1 text-white font-semibold">
                {item}
              </Link>
            </li>
          ))
        ) : (
          <li>
            <Link
              href={handleFormatTypeGame(game.platform)}
              className="rounded-md bg-yellow-500 p-1 text-white font-semibold">
              {game.platform}
            </Link>
          </li>
        )}
      </ul>

      <Link href={"/games/" + game.id}>
        <h1 className="text-gray-700 font-bold text-lg mt-2 hover:text-gray-800">
          {game.title}
        </h1>
      </Link>

      <span className="text-sm text-gray-600">{game.short_description}</span>
    </div>
  );
};

export default Game;
