import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import ErrorMessage from "../ErrorMessage";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle="Ops!"
        content="Sem posts criados"
        pageTitle="Crie um post"
      />
    );
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <section
      className={clsx(
        "grid grid-cols-1 gap-8 mb-16",
        "sm:grid-cols-2",
        "group"
      )}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: `${post.coverImageUrl}`,
          alt: "alt_da_imagem",
          priority: true,
        }}
      />
      <PostSummary
        title={post.title}
        excerpt={post.excerpt}
        createdAt={post.createdAt}
        postLink={postLink}
        postHeading="h2"
      />
    </section>
  );
}
