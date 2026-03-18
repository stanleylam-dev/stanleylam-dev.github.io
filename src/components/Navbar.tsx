"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/tools", label: "Tools" },
  { href: "/creative", label: "Creative" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[var(--foreground)] font-medium"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="ml-2 p-2 rounded-md text-[var(--muted)] hover:text-[var(--foreground)] transition-colors shrink-0"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
}
