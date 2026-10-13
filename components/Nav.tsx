"use client";

import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { profile } from "@/data/content";

const links = [
  { id: "projects", label: "Projects" },
  { id: "clients", label: "Client work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const ids = links.map((l) => l.id);

export default function Nav() {
  const active = useActiveSection(ids);

  return (
    <nav aria-label="Main" className="sticky top-0 z-10 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-page items-center gap-4 px-5 py-3.5">
        <a href="#top" className="font-mono text-small font-medium text-fg hover:no-underline">
          &lt;daniel<span className="text-accent">.dev</span> /&gt;
        </a>
        <ul className="ml-auto flex gap-5 text-small font-semibold">
          {links.map((l, i) => {
            const current = active === l.id;
            return (
              // On phones only "Contact" stays visible
              <li key={l.id} className={i < links.length - 1 ? "hidden sm:block" : ""}>
                <a
                  href={`#${l.id}`}
                  aria-current={current ? "true" : undefined}
                  className={`hover:text-fg ${
                    current
                      ? "text-fg underline decoration-accent-2 decoration-2 underline-offset-8"
                      : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          title="GitHub"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-fg hover:border-accent"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
          </svg>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
