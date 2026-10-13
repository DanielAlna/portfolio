type Props = {
  id?: string;
  title: string;
  tag?: string;
  alt?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, tag, alt, className = "", children }: Props) {
  const headingId = `${id ?? title.toLowerCase().replace(/\s+/g, "-")}-h`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-line py-14 ${alt ? "bg-bg-alt" : ""} ${className}`}
    >
      <div className="mx-auto max-w-page px-5">
        <div className="mb-7 flex items-baseline gap-3">
          <h2 id={headingId} className="text-section font-extrabold tracking-tight">
            {title}
          </h2>
          {tag && <span className="font-mono text-sm text-muted">{tag}</span>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-fg">
          {t}
        </li>
      ))}
    </ul>
  );
}
