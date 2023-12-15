import Game from "./Game";

const SearchGames = ({ result }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {result?.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
};

export default SearchGames;
