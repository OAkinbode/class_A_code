import Image from "next/image";
import { welcomeMessage } from "../utils/welcome_function";
import JammyGamesWelcome from "@/components/jammy_games_welcome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-start py-16 px-8 bg-white dark:bg-black sm:items-start gap-6">
        <div>
          <p className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-6xl">
            Welcome class a code.
          </p>
          <p className="text-2xl text-blue-700"> {welcomeMessage("Olusola")}</p>
        </div>
        <div className="flex flex-row bg-zinc-50 p-4 w-full">
          <div className="flex-1  flex justify-center items-center">
            <Image
              className="dark:invert "
              src="/noncreepy_teddybear.jpg"
              alt="Next.js logo"
              width={300}
              height={300}
              priority
            />
          </div>

          <div className="flex-1 bg-green-200 p-4 flex flex-col justify-start items-center">
            <nav className="flex flex-col gap-4 italics text-lg">
              <Link href="/about">About</Link>
              <Link href="/twistingJack">Twisting Jack</Link>
            </nav>
          </div>
        </div>

        <JammyGamesWelcome />
      </main>
    </div>
  );
}
