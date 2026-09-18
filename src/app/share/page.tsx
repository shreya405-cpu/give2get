"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SharePage() {
  const [resourceName, setResourceName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!resourceName || !category || !location || !description) {
    alert("Please fill in all fields.");
    return;
  }
  const { error } = await supabase
  .from("resources")
  .insert([
    {
      name: resourceName,
      category: category,
      location: location,
      description: description,
    },
  ]);

console.log("Supabase error:", error);

console.log("Resource inserted successfully!");
console.log("Supabase error:", error);

  console.log({
    resourceName,
    category,
    location,
    description,
  });
};

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <a
          href="/resources"
          className="text-sm text-zinc-500 hover:text-black"
        >
          ← Back to resources
        </a>

        <div className="mt-8">
          <p className="text-sm font-medium text-zinc-500">
            GIVE2GET
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Share a Resource
          </h1>

          <p className="mt-4 text-zinc-600">
            Have something you're not using? Share it with someone
            who needs it.
          </p>
        </div>

        <form
          className="mt-10 space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Resource Name */}
          <div>
            <label className="text-sm font-medium">
              Resource name
            </label>

            <input
              type="text"
              placeholder="e.g. Scientific Calculator"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-black"
            >
              <option value="">Select a category</option>
              <option value="Books">Books</option>
              <option value="Electronics">Electronics</option>
              <option value="Tools">Tools</option>
              <option value="Study Items">Study Items</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium">
              Location
            </label>

            <input
              type="text"
              placeholder="e.g. Pune"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">
              Description
            </label>

            <textarea
              placeholder="Tell people a little about the resource..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-zinc-800"
          >
            Share Resource
          </button>
        </form>
      </div>
    </main>
  );
}