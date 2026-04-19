import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs — Stanley Lam",
};

interface RssItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
}

interface RssResponse {
  status: string;
  items: RssItem[];
}

async function getMediumPosts() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stanleylam909",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data: RssResponse = await res.json();
    if (data.status !== "ok") return [];

    return data.items.map((item) => ({
      title: item.title,
      excerpt:
        item.description
          .replace(/<[^>]*>/g, "")
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .trim()
          .slice(0, 220) + "…",
      date: new Date(item.pubDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      tags: (item.categories ?? []).slice(0, 4),
      href: item.link,
    }));
  } catch {
    return [];
  }
}

export default async function BlogsPage() {
  const posts = await getMediumPosts();
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight">Blogs</h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          I write about AI engineering, cloud, and practical notes from building
          things. Published on{" "}
          <Link
            href="https://medium.com/@stanleylam909"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors"
          >
            Medium
          </Link>
          .
        </p>
      </div>

      {/* Tags */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Posts */}
      <div className="space-y-px">
        {posts.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">
            Could not load posts. Check out{" "}
            <Link
              href="https://medium.com/@stanleylam909"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors"
            >
              Medium
            </Link>{" "}
            directly.
          </p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group py-5 border-b border-[var(--border)] last:border-0"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium group-hover:text-[var(--muted)] transition-colors">
                      {post.title}
                    </h3>
                    <ArrowUpRight
                      size={14}
                      className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    />
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs text-[var(--muted)]">
                      {post.date}
                    </span>
                    {post.tags.length > 0 && (
                      <>
                        <span className="text-xs text-[var(--muted)]">·</span>
                        <div className="flex gap-1.5">
                          {post.tags.map((tag) => (
                            <span key={tag} className="text-xs text-[var(--muted)]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
