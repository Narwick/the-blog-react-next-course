import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: CurrentH = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight font-extrabold sm:text-4xl",
    h2: "text-2xl/tight font-extrabold",
  };
  const Tag = CurrentH;

  return (
    <Tag className={headingClassesMap[CurrentH]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
