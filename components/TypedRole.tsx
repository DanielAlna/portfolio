"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 2200;
const START_MS = 2600;

/** Types and deletes each phrase in turn, with a blinking caret. */
export default function TypedRole({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let word = 0;
    let chars = phrases[0].length;
    let deleting = true;
    let timer: number;

    const tick = () => {
      if (deleting) {
        chars -= 1;
        setText(phrases[word].slice(0, chars));
        if (chars === 0) {
          deleting = false;
          word = (word + 1) % phrases.length;
          timer = window.setTimeout(tick, 350);
          return;
        }
        timer = window.setTimeout(tick, DELETE_MS);
        return;
      }
      chars += 1;
      setText(phrases[word].slice(0, chars));
      if (chars === phrases[word].length) {
        deleting = true;
        timer = window.setTimeout(tick, HOLD_MS);
        return;
      }
      timer = window.setTimeout(tick, TYPE_MS);
    };

    timer = window.setTimeout(tick, START_MS);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return (
    // Screen readers get the full sentence from the parent's aria-label
    <span aria-hidden="true" className="whitespace-nowrap text-accent">
      {text}
      <span className="caret" />
    </span>
  );
}
