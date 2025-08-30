import { drizzleDb } from "@/db/drizzle";
import { PostRepository } from "./post-repository";
import { PostModel } from "@/models/post/post-model";
import { asyncDelay } from "@/utils/asyncDelay";

export class DrizzlePostRepository implements PostRepository {
  simulate_wait_in_ms = 1000;
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(this.simulate_wait_in_ms, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(this.simulate_wait_in_ms, true);

    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq, and }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });
    if (!post) throw new Error("Post não encontrado");

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    await asyncDelay(this.simulate_wait_in_ms, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    await asyncDelay(this.simulate_wait_in_ms, true);

    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.id, id),
    });
    if (!post) throw new Error("Post não encontrado");

    return post;
  }
}
