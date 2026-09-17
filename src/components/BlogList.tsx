import Link from "next/link";
import type { BlogPost } from "@/lib/posts";

export function BlogList({
  posts,
  compact = false,
}: {
  posts: BlogPost[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "blog-list blog-list--compact" : "blog-list"}>
      {posts.map((post) => (
        <Link key={post.href} href={post.href} className="blog-card">
          <p className="blog-card__meta">{post.meta}</p>
          <h2>{post.title}</h2>
          {!compact ? <p>{post.excerpt}</p> : null}
          <span className="blog-card__cta">Read →</span>
        </Link>
      ))}
    </div>
  );
}
