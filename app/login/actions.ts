"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(_prevState: unknown, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (username !== "seller" || password !== process.env.SELLER_PASSWORD) {
    return { error: "Invalid credentials" };
  }

  const cookieStore = await cookies();
  cookieStore.set("auth", "true", { httpOnly: true, path: "/" });
  redirect("/dashboard");
}
