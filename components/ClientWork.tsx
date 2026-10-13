"use client";

import { useRef, useState } from "react";
import type { Client } from "@/data/content";
import ScreenshotViewer, { type ViewerItem } from "./ScreenshotViewer";

const images = (c: Client) => Array.from({ length: c.shots }, (_, i) => `/img/${c.id}-${i + 1}.jpg`);

/** Grid of client sites. Clicking a site opens its screenshots in the viewer. */
export default function ClientWork({ clients }: { clients: Client[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [item, setItem] = useState<ViewerItem | null>(null);
  const [index, setIndex] = useState(0);

  const open = (c: Client, i = 0) => {
    setItem({ title: c.name, images: images(c) });
    setIndex(i);
    dialog.current?.showModal();
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
        {clients.map((c) => (
          <article key={c.id} className="flex min-w-0 flex-col gap-2.5 rounded-xl border border-line bg-bg p-3.5">
            <button
              type="button"
              onClick={() => open(c)}
              aria-label={`View ${c.name} screenshots`}
              className="group flex aspect-4/3 w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-md bg-white p-3.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- screenshots keep their own aspect ratio inside the frame */}
              <img
                src={images(c)[0]}
                alt={`${c.name} website`}
                loading="lazy"
                className={`block max-h-full max-w-full transition-transform duration-300 group-hover:scale-105 ${
                  c.kind === "page" ? "rounded border border-slate-200 shadow-md" : ""
                }`}
              />
            </button>
            <h3 className="mt-1 text-lead font-bold">{c.name}</h3>
            <p className="text-small text-muted">{c.body}</p>
            <div className="mt-auto flex min-h-12 items-center justify-between gap-2.5 border-t border-line pt-2.5">
              <button type="button" onClick={() => open(c)} className="py-1 text-meta font-bold text-accent hover:underline">
                {c.shots > 1 ? `See all ${c.shots} →` : "View larger →"}
              </button>
              {c.shots > 1 && (
                <div className="flex gap-1">
                  {images(c).map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => open(c, i)}
                      aria-label={`${c.name} screenshot ${i + 1}`}
                      className="h-7 w-10 rounded border border-line bg-white bg-cover bg-top hover:outline hover:outline-2 hover:outline-accent"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <ScreenshotViewer dialogRef={dialog} item={item} index={index} onIndexChange={setIndex} />
    </>
  );
}
