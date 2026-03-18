import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Youtube, Instagram, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Creative — Stanley Lam",
};

export default function CreativePage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-2 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight">Creative</h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          The skills that make for good engineering and good creative work
          overlap more than people think. Both demand problem-solving through creativity, 
          working within constraints, learning from failure, and the dedication to get better at the craft.
        </p>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          Outside of my technical work I produce and edit a podcast about AI,
          shoot photography professionally across multiple genres, and create content for my personal brand.
          These outlets aren&apos;t separate from
          my engineering — they sharpen how I communicate complex ideas, how I
          frame problems, and how I notice the details that others miss.
        </p>
      </div>

      {/* Podcast */}
      <section className="space-y-5">
        <div className="flex items-center gap-2">
          <Youtube size={14} className="text-[var(--muted)]" />
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
            Podcast
          </h2>
        </div>
        <Link
          href="https://www.youtube.com/@TwoBlokesInaShed"
          target="_blank"
          rel="noopener noreferrer"
          className="block group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--muted)] transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Two Blokes In a Shed</h3>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
              I run the production for “Two Blokes In A Shed”,                 
              a podcast where two hostswith engineering backgrounds explore topics surrounding the relationship between AI/tech and society/humanity. 
              From planning and recording to editing and publishing, I turn casual shed catch-ups into polished episodes, 
              handling all the behind-the-scenes work that brings the podcast to life.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">
                  YouTube
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">
                  Podcast
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">
                  AI
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">
                  Video Editing
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Photography */}
      <section className="space-y-5">
        <div className="flex items-center gap-2">
          <Camera size={14} className="text-[var(--muted)]" />
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
            Photography
          </h2>
        </div>
        <Link
          href="https://stanleylam-dev.github.io/photography-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--muted)] transition-colors"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">STANLEYLVISUAL</h3>
              <ArrowUpRight
                size={16}
                className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
              I shoot across portrait, sports, events, motorsport, and street photography.
              Photography taught me how to connect with people and the importance of 
              paying attention to every detail to capture the perfect shot. 
              It's as much about understanding the process as it is about the final image.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {["Portrait", "Sports", "Events", "Motorsport", "Street", "Personal"].map((g) => (
                <span
                  key={g}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </section>

      {/* Instagram */}
      <section className="space-y-5">
        <div className="flex items-center gap-2">
          <Instagram size={14} className="text-[var(--muted)]" />
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
            Instagram
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="https://www.instagram.com/stanleylvisual/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl border border-[var(--border)] hover:border-[var(--muted)] transition-colors space-y-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">@stanleylvisual</h3>
              <ArrowUpRight
                size={14}
                className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              The visual portfolio — photography, FPV drone videography, and behind-the-scenes from
              shoots.
            </p>
          </Link>

          <Link
            href="https://www.instagram.com/fuj_in_boots/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl border border-[var(--border)] hover:border-[var(--muted)] transition-colors space-y-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">@fuj_in_boots</h3>
              <ArrowUpRight
                size={14}
                className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Proud dad of Fuji, a cute tabby cat and an upcoming petfluencer.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
