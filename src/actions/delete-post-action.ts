"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/singlestore";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  //to do checar login
  console.log("id", id);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados Inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(()=>undefined)
  if(!post)
    {
    return {
      error: "Post não existe;",
    };
  }
  await drizzleDb.delete(postsTable).where(eq(postsTable.id,id))

  revalidateTag('posts');
  revalidateTag(`posts-${post.slug}`);
  return {
    error: "",
  };
}
