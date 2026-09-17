export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <nav className="flex w-full items-center justify-between px-6 py-6 sm:px-10">
        <div className="text-xl font-bold tracking-tight">
          GIVE2GET
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
          <a href="#" className="text-zinc-600 hover:text-black">
            Browse Resources
          </a>

          <a href="#" className="text-zinc-600 hover:text-black">
            How It Works
          </a>

          <a href="#" className="text-zinc-600 hover:text-black">
            Login
          </a>

          <button className="rounded-full bg-black px-5 py-2.5 text-white">
            Get Started
          </button>
        </div>
      </nav>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          GIVE2GET
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          DON&apos;T BUY. FIND.
        </h1>

        <p className="mt-6 text-xl font-medium text-zinc-700">
          Have it? Give it. Need it? Get it.
        </p>

        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-500">
          Find what you need from your community. Borrow, share, and make
          better use of resources.
        </p>

        <div className="mt-8 w-full max-w-xl">
          <input
            type="text"
            placeholder="What do you need?"
            className="w-full rounded-full border border-zinc-300 px-6 py-4 text-base outline-none transition focus:border-black focus:ring-2 focus:ring-zinc-200"
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/resources"
            className="rounded-full bg-black px-6 py-3 font-medium text-white"
          >
            Find a Resource
          </a>

          <a
  href="/share"
  className="rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-900"
>
  Share a Resource
          </a>
        </div>
      </section>
    </main>
  );
}