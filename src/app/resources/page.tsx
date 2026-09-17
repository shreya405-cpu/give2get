"use client";
import { useState } from "react";
const resources = [
  {
    name: "Scientific Calculator",
    category: "Electronics",
    location: "Pune",
  },
  {
    name: "Engineering Mathematics",
    category: "Books",
    location: "Pune",
  },
  {
    name: "Drawing Kit",
    category: "Study Items",
    location: "Pune",
  },
];

export default function Resources() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const filteredResources = resources.filter((resource) => {
        const matchesCategory =
            selectedCategory === "All" ||
             resource.category === selectedCategory;

        const matchesSearch =
           resource.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
   });
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Discover
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Find a resource
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">
            Find things you need from people in your community instead of
            buying something you may only use once.
          </p>

          <div className="mt-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for something you need..."
              className="w-full rounded-full border border-zinc-300 bg-white px-6 py-4 outline-none transition focus:border-black focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => setSelectedCategory("All")}className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              All
            </button>

            <button onClick={() => setSelectedCategory("Books")} className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Books
            </button>

            <button onClick={() => setSelectedCategory("Electronics")} className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Electronics
            </button>

            <button onClick={() => setSelectedCategory("Tools")} className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Tools
            </button>

            <button onClick={() => setSelectedCategory("Study Items")} className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Study Items
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {filteredResources.length > 0 ? (
                filteredResources.map((resource) => (
                    <div
                        key={resource.name}
                        className="rounded-2xl border border-zinc-200 bg-white p-6"
                    >
                        <p className="text-sm text-zinc-500">{resource.category}</p>

                        <h2 className="mt-2 text-xl font-semibold">
                           {resource.name}
                        </h2>

                        <p className="mt-3 text-sm text-zinc-500">
                           Available for borrowing
                        </p>

                        <p className="mt-6 text-sm font-medium">
                           {resource.location}
                        </p>
                    </div>
               ))
            ) : (
                <div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center md:col-span-3">
                    <h2 className="text-lg font-semibold">
                       No resources found
                    </h2>
                    <p>
                       Try another category or share a resource with the community.
                    </p>
                </div>
                )}
            </div>
        </div>
      </section>
    </main>
  );
}