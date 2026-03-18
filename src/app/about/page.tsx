import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Stanley Lam",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Hey, I&apos;m Stanley
        </h1>
      </div>

      {/* Bio */}
      <div className="space-y-5 text-[var(--muted)] leading-relaxed max-w-xl">
        <p>
          I&apos;m an AI Engineer and Research Engineer based in Sydney,
          Australia, specialising in Brain-Computer Interfaces (BCI) and AI Agent development.
        </p>
        <p>
          I believe the most impactful work happens at the intersection of
          rigorous research and pragmatic engineering. I am passionate about building
          systems that are not just technically sound but actually useful to business users
          and reliable in production.
        </p>
        <p>
          Outside of work I enjoy reading about tech and science, contributing to
          open source, writing on Medium about things I&apos;ve learned in the field, and 
          creating content.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-[var(--border)]" />

      {/* Details grid */}
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
            Certifications
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-sm">
                AWS Certified Solutions Architect – Associate
              </p>
              <p className="text-xs text-[var(--muted)]">Amazon Web Services · 2025</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "AI Agents & LLMs",
              "Brain-Computer Interfaces",
              "Low-Latency Distributed Systems",
              "Open Source",
              "Cloud Architecture",
              "Content Creation",
            ].map((interest) => (
              <span
                key={interest}
                className="text-sm px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[var(--border)]" />

      {/* Links */}
      <div className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
          Find Me Online
        </h2>
        <div className="space-y-3">
          {[
            {
              label: "GitHub",
              href: "https://github.com/the0ninjas",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/stanley-lam-053546a0/",
            },
            {
              label: "Medium",
              href: "https://medium.com/@stanleylam909",
            },
          ].map(({ label, href}) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group py-2 border-b border-[var(--border)] last:border-0"
            >
              <div>
                <p className="text-sm font-medium group-hover:text-[var(--muted)] transition-colors">
                  {label}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
