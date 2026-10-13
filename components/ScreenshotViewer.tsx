"use client";

import { useEffect, useRef, type RefObject } from "react";

export type ViewerItem = { title: string; images: string[] };

type Props = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  item: ViewerItem | null;
  index: number;
  onIndexChange: (index: number) => void;
};

/** Modal screenshot viewer: thumbnails, prev/next, arrow keys, and swipe on touch screens. */
export default function ScreenshotViewer({ dialogRef, item, index, onIndexChange }: Props) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const count = item?.images.length ?? 0;

  const step = (dir: 1 | -1) => count > 1 && onIndexChange((index + dir + count) % count);
  const close = () => dialogRef.current?.close();

  // Arrow keys move between screenshots while the viewer is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open || count < 2) return;
      if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dialogRef, count, index, onIndexChange]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // A mostly horizontal swipe of 50px or more changes the screenshot
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  };

  const button = "rounded-md border border-accent px-3 py-1.5 text-sm font-bold text-accent hover:bg-accent-soft";

  return (
    <dialog
      ref={dialogRef}
      aria-label="Screenshots"
      onClick={(e) => e.target === dialogRef.current && close()}
      className="viewer rounded-xl border border-line bg-bg p-0 text-fg"
    >
      {item && (
        <>
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <strong>{item.title}</strong>
            {count > 1 && (
              <span className="font-mono text-xs text-muted">
                {index + 1} of {count}
              </span>
            )}
            <button type="button" onClick={close} className={`ml-auto ${button}`}>
              Close
            </button>
          </div>

          <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="viewer-body flex touch-pan-y justify-center overflow-auto bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element -- full-size screenshot at its natural size */}
            <img src={item.images[index]} alt={`${item.title} screenshot ${index + 1}`} className="block h-auto max-w-full" />
          </div>

          {count > 1 && (
            <div className="flex items-center gap-3 border-t border-line px-4 py-3">
              <button type="button" onClick={() => step(-1)} className={button}>
                ← Prev
              </button>
              <div className="flex min-w-0 flex-1 justify-center gap-2 overflow-x-auto">
                {item.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => onIndexChange(i)}
                    aria-label={`Screenshot ${i + 1}`}
                    aria-current={i === index}
                    className={`h-12 w-20 flex-none rounded border-2 bg-white bg-cover bg-top ${i === index ? "border-accent" : "border-transparent"}`}
                    style={{ backgroundImage: `url(${src})` }}
                  />
                ))}
              </div>
              <button type="button" onClick={() => step(1)} className={button}>
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </dialog>
  );
}
