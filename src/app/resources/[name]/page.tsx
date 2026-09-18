import { Resource } from "@/types/resource";
import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";
export default async function ResourcePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const resourceName = name.replaceAll("-", " ");
  

const { data: resource, error } = await supabase
  .from("resources")
  .select("*")
  .ilike("name", resourceName)
  .single();

if (error || !resource) {
  notFound();
}

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <a
          href="/resources"
          className="text-sm text-zinc-500 hover:text-black"
        >
          ← Back to resources
        </a>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8">
            <div className="mb-8 flex h-64 items-center justify-center rounded-2xl bg-zinc-100">
                <p className="text-sm text-zinc-400">
                  Resource Image
                </p>
            </div>
          <p className="text-sm text-zinc-500">
            Community Resource
          </p>

          <h1 className="mt-2 text-4xl font-bold capitalize">
            {resource?.name}
          </h1>

          <div className="mt-8 space-y-4">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {resource?.category}
            </p>

            <p>
              <span className="font-semibold">Location:</span>{" "}
              Pune
            </p>

            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="text-green-600">
                Available for borrowing
              </span>
            </p>
          </div>

          <button className="mt-8 rounded-full bg-black px-6 py-3 font-medium text-white">
            Request to Borrow
          </button>
        </div>
      </div>
    </main>
  );
}