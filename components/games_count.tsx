import { Game } from "@/utils/welcome_function";

type GamesCountProp = {
  games: Game[];
};

export default function GamesCount({ games }: GamesCountProp) {
  return (
    <div className="w-full p-4 bg-zinc-100 rounded-lg">
      <p>{games.length} games in cart </p>
    </div>
  );
}
