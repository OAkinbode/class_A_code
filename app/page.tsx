import Image from "next/image";
import JammyGamesWelcome from "@/components/jammy_games_welcome";
import Link from "next/link";
import { userDetails } from "@/utils/user_functions";
import CheckUsername from "@/components/check_username";

export default function Home() {
  const { firstname, hobby, age } = userDetails;

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-start py-16 px-8 bg-white dark:bg-black sm:items-start gap-6">
        <div className=" w-full p-2 flex flex-row gap-2">
          <div className="flex-1 flex justify-center items-center">
            <Image
              className="dark:invert "
              src="/noncreepy_teddybear.jpg"
              alt="Next.js logo"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className="flex-1">
            <p className="text-3xl text-zinc-900 dark:text-white ">
              Welcome to Our Kahoots Clone:{" "}
              <span className="text-blue-500 italic">{firstname}</span>
            </p>

            {age > 18 ? (
              <p className="text-xl text-gray-700">
                {" "}
                I know you like {hobby}, but would you like to play a kahoots
                clone?
              </p>
            ) : (
              <p className="text-xl text-gray-700">
                {" "}
                Sorry, you are too young to play these games.
              </p>
            )}
            <div className="my-2">
              <CheckUsername />
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-zinc-50 p-4 w-full">
          <div className="flex-1 bg-[#f7b80a] p-4 flex flex-col justify-start items-center">
            <nav className="flex flex-col gap-4 italics text-lg">
              <Link href="/about">About</Link>
              <Link href="/twistingJack">Twisting Jack</Link>
            </nav>
          </div>
        </div>

        <JammyGamesWelcome
          name={firstname}
          recommendation={() => {
            return `${age > 18 ? "Here are a list of potential games you can play: " : "Go get your mom!!!"}`;
          }}
        />
      </main>
    </div>
  );
}
