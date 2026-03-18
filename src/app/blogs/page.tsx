import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs — Stanley Lam",
};

const posts = [
  {
    title: "How I passed the AWS Certified Solutions Architect exam without spending a penny on resources",
    excerpt:
      "A firsthand look at how I prepared for the AWS Certified Solutions Architect Associate exam — the free study resources I used, my approach to practice exams, and key reflections for anyone attempting the cert.",
    date: "Oct 28, 2025",
    readTime: null,
    tags: ["AWS", "Cloud", "Career"],
    publication: "AWS in Plain English",
    href: "https://medium.com/@stanleylam909",
  },
  {
    title: "Detecting Facial Action Units in Real-Time: Which Tool Works Best?",
    excerpt:
      "An exploration of different open-source tools for Facial Action Unit (FAU) detection — comparing accuracy, speed, and ease of integration for real-time applications.",
    date: "Oct 11, 2025",
    readTime: null,
    tags: ["AI/ML", "Computer Vision", "Python"],
    publication: null,
    href: "https://medium.com/@stanleylam909",
  },
  {
    title: "How to Run a Diffusion Model Locally (without ComfyUI) — Using Qwen-Image-Edit with Nunchaku",
    excerpt:
      "Run Qwen-Image-Edit locally with quantized models and Nunchaku — no GUI required, just Python and your GPU. A step-by-step guide for running diffusion models from the command line.",
    date: "Oct 2, 2025",
    readTime: null,
    tags: ["AI", "Diffusion Models", "Local AI", "Python"],
    publication: "Cubed",
    href: "https://medium.com/@stanleylam909",
  },
];

const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

export default function BlogsPage() {
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

      {/* Posts */}
      <div className="space-y-px">
        {posts.map((post) => (
          <Link
            key={post.title}
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
                  <span className="text-xs text-[var(--muted)]">{post.date}</span>
                  {post.publication && (
                    <>
                      <span className="text-xs text-[var(--muted)]">·</span>
                      <span className="text-xs text-[var(--muted)]">
                        {post.publication}
                      </span>
                    </>
                  )}
                  <span className="text-xs text-[var(--muted)]">·</span>
                  <div className="flex gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
