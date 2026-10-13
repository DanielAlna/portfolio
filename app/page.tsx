import Image from "next/image";
import Nav from "@/components/Nav";
import Section, { Chips } from "@/components/Section";
import TypedRole from "@/components/TypedRole";
import ClientWork from "@/components/ClientWork";
import CopyEmail from "@/components/CopyEmail";
import { about, clients, jobs, profile, projects, recommendation, skills } from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Intro */}
        <header className="intro-stagger mx-auto max-w-page px-5 pb-14 pt-20">
          <p className="mb-3.5 flex items-center gap-2.5 font-mono text-meta font-medium text-muted">
            <span aria-hidden="true" className="status-dot h-2 w-2 rounded-full bg-accent-2" />
            Based in Columbia, MD · Open to new roles
          </p>
          <h1 className="text-display font-extrabold leading-tight tracking-tight">
            {profile.name}
          </h1>
          <h2
            aria-label="Full stack engineer. React, Next.js, WordPress and AI-assisted development."
            className="mt-2 text-subhead font-semibold text-muted"
          >
            Full stack engineer. <TypedRole phrases={profile.roles} />
          </h2>
          <p className="mt-6 max-w-measure text-lead">{profile.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md border border-accent bg-accent px-5 py-2.5 text-small font-bold text-bg hover:opacity-90">
              See my work
            </a>
            <a href={profile.resume} target="_blank" rel="noopener" className="rounded-md border border-accent px-5 py-2.5 text-small font-bold text-accent hover:bg-accent-soft">
              Resume (PDF)
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="rounded-md border border-accent px-5 py-2.5 text-small font-bold text-accent hover:bg-accent-soft">
              LinkedIn
            </a>
          </div>
        </header>

        <Section id="projects" title="Projects">
          <div className="grid border-t border-line">
            {projects.map((p) => (
              <article
                key={p.title}
                className="grid grid-cols-1 gap-x-12 gap-y-2.5 border-b border-line py-7 md:grid-cols-project"
              >
                <div>
                  <div className="mb-1.5 font-mono text-meta text-muted">{p.meta}</div>
                  <h3 className="text-title font-extrabold tracking-tight">{p.title}</h3>
                </div>
                <div>
                  <p className="max-w-measure text-muted">{p.body}</p>
                  <p className="mt-3 font-mono text-meta font-medium text-accent">{p.tags.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Recommendation">
          <figure className="grid max-w-4xl gap-3.5 rounded-xl border border-line bg-bg px-8 pb-6 pt-7">
            <div aria-hidden="true" className="h-6 font-serif text-5xl font-extrabold leading-none text-accent">
              &ldquo;
            </div>
            <blockquote className="grid gap-2.5">
              {recommendation.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="text-lead leading-relaxed">
                  {p}
                </p>
              ))}
            </blockquote>
            <figcaption className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 border-t border-line pt-3 text-small">
              <b className="font-extrabold">{recommendation.name}</b>
              <span className="text-muted">{recommendation.role} · Recommendation on LinkedIn</span>
            </figcaption>
          </figure>
        </Section>

        <Section id="clients" title="Client work" alt>
          <p className="-mt-3 mb-7 max-w-measure text-muted">
            Freelance sites, mostly through Anova Web Development. I was the developer and the main contact for each
            client. Some of these sites have changed since, so the older ones are shown as I delivered them. Click a
            site to see all its screenshots.
          </p>
          <ClientWork clients={clients} />
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-2.5 text-meta font-bold uppercase tracking-widest text-muted">{s.group}</h3>
                <Chips items={s.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" alt>
          <ol reversed className="grid">
            {jobs.map((j) => (
              <li key={j.title} className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-line py-4 last:border-b-0 sm:grid-cols-timeline">
                <div className="pt-0.5 font-mono text-sm tabular-nums text-accent">{j.when}</div>
                <div>
                  <h3 className="text-lead font-bold">{j.title}</h3>
                  <p className="mt-1 max-w-measure text-small text-muted">{j.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="About me">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-8">
            <Image
              src="/img/daniel.jpg"
              alt={profile.name}
              width={112}
              height={112}
              className="mt-1.5 h-20 w-20 flex-none rounded-full border-2 border-bg object-cover ring-1 ring-line sm:h-28 sm:w-28"
            />
            <div className="min-w-0">
              {about.map((para) => (
                <p key={para.slice(0, 20)} className="mb-3.5 max-w-measure text-lead">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Get in touch" alt>
          <p className="-mt-3 mb-7 text-muted">I am open to full-time and contract work, and I am authorized to work in the US.</p>
          <CopyEmail email={profile.email} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-bold">
            <li><a href={profile.resume} target="_blank" rel="noopener" className="text-accent hover:underline">Resume (PDF)</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener" className="text-accent hover:underline">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener" className="text-accent hover:underline">GitHub</a></li>
          </ul>
        </Section>
      </main>
    </>
  );
}
