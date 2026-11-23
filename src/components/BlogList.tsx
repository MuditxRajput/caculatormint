import Link from "next/link";
import type { BlogPost } from "@/lib/posts";

interface BlogListProps {
  posts: BlogPost[];
  compact?: boolean;
}

export function BlogList({ posts, compact = false }: BlogListProps) {
  if (compact) {
    return (
      <div className="blog-feed-compact">
        {posts.map((post) => (
          <article key={post.href} className="blog-entry-card blog-entry-card--compact">
            <div className="blog-entry-card__meta">
              <span className="blog-entry-card__category">{post.category}</span>
              <span className="blog-entry-card__dot">&bull;</span>
              <span className="blog-entry-card__time">{post.readTime}</span>
            </div>
            <h3 className="blog-entry-card__title">
              <Link href={post.href}>{post.title}</Link>
            </h3>
            <p className="blog-entry-card__excerpt">{post.excerpt}</p>
            <div className="blog-entry-card__footer">
              <div className="blog-entry-card__author">
                <div className="author-avatar author-avatar--sm">CM</div>
                <span className="author-name">{post.author}</span>
              </div>
              <Link href={post.href} className="blog-entry-card__link">
                Read Guide &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="blog-feed">
      {posts.map((post) => (
        <article key={post.href} className="blog-entry-card">
          <div className="blog-entry-card__header">
            <span className="blog-entry-card__category">{post.category}</span>
            <span className="blog-entry-card__dot">&bull;</span>
            <span className="blog-entry-card__time">{post.readTime}</span>
            <span className="blog-entry-card__dot">&bull;</span>
            <span className="blog-entry-card__date">{post.date}</span>
          </div>

          <h2 className="blog-entry-card__title">
            <Link href={post.href}>{post.title}</Link>
          </h2>

          <p className="blog-entry-card__excerpt">{post.excerpt}</p>

          <div className="blog-entry-card__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                #{tag}
              </span>
            ))}
          </div>

          <div className="blog-entry-card__footer">
            <div className="blog-entry-card__author">
              <div className="author-avatar author-avatar--sm">CM</div>
              <span className="author-name">{post.author}</span>
            </div>

            <Link href={post.href} className="button button--ghost button--sm">
              Read Complete Guide &rarr;
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
