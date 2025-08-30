import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

async function main() {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);
    console.log("✅ Dados inseridos com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao inserir dados:", error);
  }
}

main();
