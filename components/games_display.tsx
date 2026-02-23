import { listOfGames } from "@/utils/welcome_function";
import { Game } from "@/utils/welcome_function";

type GamesDisplayProp = {
  games: Game[];
  setCart?: React.Dispatch<React.SetStateAction<Game[]>>;
};

export default function GamesDisplay({ games, setCart }: GamesDisplayProp) {
  const handleAddToCart = (game: Game) => {
    const gameExists = games.some((g) => g.title === game.title);
    if (gameExists) {
      alert("Game is already in the cart!");
      return;
    }

    if (setCart) {
      setCart((prevCart) => [...prevCart, game]);
    }
  };

  const listOfRecentGames: Game[] = listOfGames.filter(
    (game) => game.releaseYear >= 2010,
  );

  const listOfGames2: Game[] = listOfGames.map((game) => {
    if (game.genre === "Sandbox") {
      return { ...game, title: game.title + " (Recommended)" };
    }
    return game;
  });

  return (
    <div className="w-full p-4 bg-zinc-100 rounded-lg">
      <ul>
        {listOfGames.map((game) => (
          <li key={game.title} className="p-2 border-b border-zinc-300 gap-2">
            {game.title} -{" "}
            <span className="italic text-amber-600">{game.genre}</span> (
            {game.releaseYear})
            <div className="flex flex-row gap-2 italic">
              {" "}
              <p
                className="text-sm text-gray-600"
                onClick={() => handleAddToCart(game)}
              >
                Add to cart
              </p>
              <p className="text-sm text-gray-600">See details</p>
            </div>
          </li>
        ))}
      </ul>
      <button>Show cart games</button>
    </div>
  );
}
