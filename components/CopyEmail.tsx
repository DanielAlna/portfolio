"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");
  const ref = useRef<HTMLSpanElement>(null);

  function flash(text: string) {
    setLabel(text);
    window.setTimeout(() => setLabel("Copy email"), 1800);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      flash("Copied");
    } catch {
      // Clipboard blocked: select the text so the visitor can copy it
      if (ref.current) {
        const range = document.createRange();
        range.selectNodeContents(ref.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      flash("Selected");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <span ref={ref} className="select-all break-all font-mono text-email font-medium">
        {email}
      </span>
      <button
        type="button"
        onClick={copy}
        className="rounded-md border border-accent px-3.5 py-2 text-sm font-bold text-accent hover:bg-accent-soft"
      >
        {label}
      </button>
    </div>
  );
}
