import { NextResponse } from "next/server";
import { getBooks } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  const all = await getBooks({});

  if (!q) {
    return NextResponse.json(all);
  }

  const filtered = all.filter((b) => b.title.toLowerCase().includes(q));
  return NextResponse.json(filtered);
}
