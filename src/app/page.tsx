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
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            How it works
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Share what you have. Find what you need.
          </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-4 text-2xl">01</div>
          <h3 className="text-xl font-semibold">Find</h3>
          <p className="mt-2 leading-7 text-zinc-500">
            Tell GIVE2GET what you need and discover resources available
            around you.
          </p>
        </div>

        <div>
          <div className="mb-4 text-2xl">02</div>
            <h3 className="text-xl font-semibold">Borrow</h3>
            <p className="mt-2 leading-7 text-zinc-500">
              Connect with a resource owner and arrange a trusted handover.
            </p>
          </div>

          <div>
           <div className="mb-4 text-2xl">03</div>
              <h3 className="text-xl font-semibold">Return</h3>
              <p className="mt-2 leading-7 text-zinc-500">
                Return the resource safely and help keep the sharing cycle going.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-50 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Discover
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Resources people are sharing
          </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white">
            All
          </button>

          <button className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium">
            Books
          </button>

          <button className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium">
            Electronics
          </button>

          <button className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium">
            Tools
          </button>

          <button className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium">
            Study Items
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-500">Electronics</p>
          <h3 className="mt-2 text-xl font-semibold">Scientific Calculator</h3>
          <p className="mt-2 text-sm text-zinc-500">
            Available for borrowing
          </p>
          <p className="mt-6 text-sm font-medium">Pune</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-500">Books</p>
          <h3 className="mt-2 text-xl font-semibold">Engineering Mathematics</h3>
          <p className="mt-2 text-sm text-zinc-500">
            Available for borrowing
          </p>
          <p className="mt-6 text-sm font-medium">Pune</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-500">Study Items</p>
          <h3 className="mt-2 text-xl font-semibold">Drawing Kit</h3>
          <p className="mt-2 text-sm text-zinc-500">
            Available for borrowing
          </p>
          <p className="mt-6 text-sm font-medium">Pune</p>
        </div>
        </div>
        </div>
      
      </section>
      <footer className="border-t border-zinc-200 px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">GIVE2GET</p>
          <p className="mt-1 text-sm text-zinc-500">
            Have it? Give it. Need it? Get it.
          </p>
        </div>

        <p className="text-sm text-zinc-400">
          Built to help communities share more and buy less.
        </p>
        </div>
      </footer>
    </main>
  );
}