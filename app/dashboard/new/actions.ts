"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addBook } from "@/lib/data";

export async function createBook(_prevState: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const slug = formData.get("slug") as string;
  const coverImageUrl = formData.get("coverImageUrl") as string;

  if (!title || !author || isNaN(price) || !slug) {
    return { error: "Title, author, price, and slug are required." };
  }

  await addBook({
    title,
    author,
    price,
    description: description || "",
    category: category || "General",
    slug,
    coverImageUrl: coverImageUrl || "/covers/placeholder.svg",
  });

  revalidatePath("/books");
  revalidatePath("/");
  redirect("/dashboard");
}
