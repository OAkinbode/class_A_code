const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-start py-16 px-8 bg-white dark:bg-black sm:items-start gap-6">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-6xl">
            About Jammy Games
          </h1>
          <p className="text-2xl text-blue-700">
            Jammy Games is your ultimate destination for fun and engaging games!
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
