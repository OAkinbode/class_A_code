import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-start py-16 px-8 bg-white dark:bg-black sm:items-start gap-6">
        <div>
          <p className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-6xl">
            Welcome class a code
          </p>
        </div>
        <Image
          className="dark:invert"
          src="/noncreepy_teddybear.jpg"
          alt="Next.js logo"
          width={200}
          height={200}
          priority
        />
      </main>
    </div>
  );
}
