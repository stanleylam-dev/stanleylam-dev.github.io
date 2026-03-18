import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { featuredProjects } from "./projects/page";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const socialLinks = [
  { href: "https://www.linkedin.com/in/stanley-lam-053546a0/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/the0ninjas", label: "GitHub", icon: Github },
  {
    href: "https://medium.com/@stanleylam909",
    label: "Medium",
    icon: MediumIcon,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-8 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            AI &amp; Research Engineer
          </h1>
        </div>

        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl">
          I specialise in neural time-series data modeling in Brain-Computer Interfaces (BCI) research, 
          and AI agent development for real-world business workflows — 
          operating across the wide spectrum from developing frontier AI models and production-ready software engineering.
        </p>

        <p className="text-[var(--muted)] leading-relaxed max-w-xl">
          Currently working as an AI Engineer at Precise Value and as a Research
          Engineer at the UTS Australian Artificial Intelligence Institute.
          AWS Certified Solutions Architect.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5 pt-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Icon size={15} />
              <span>{label}</span>
            </Link>
          ))}
        </div>

      </section>

      {/* Featured Projects */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
          >
            All projects <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="space-y-px">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="block group py-4 border-b border-[var(--border)] last:border-0 hover:pl-2 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[var(--foreground)]">
                      {project.title}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
            Recent Writing
          </h2>
          <Link
            href="/blogs"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
          >
            All posts <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="space-y-1">
          {[
            {
              title: "How I passed the AWS SAA exam without spending a penny on resources",
              date: "Oct 28, 2025",
              href: "https://medium.com/@stanleylam909",
            },
            {
              title: "Detecting Facial Action Units in Real-Time: Which Tool Works Best?",
              date: "Oct 11, 2025",
              href: "https://medium.com/@stanleylam909",
            },
            {
              title: "How to Run a Diffusion Model Locally (without ComfyUI)",
              date: "Oct 2, 2025",
              href: "https://medium.com/@stanleylam909",
            },
          ].map((post) => (
            <Link
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-0 group"
            >
              <span className="text-sm group-hover:text-[var(--muted)] transition-colors">
                {post.title}
              </span>
              <span className="text-xs text-[var(--muted)] shrink-0 ml-4">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
