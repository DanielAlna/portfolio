import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "./globals.css";


export const metadata: Metadata = {
  title: "Daniel Al Nafutshy · Full Stack Engineer",
  description:
    "Full stack engineer working with React, Next.js and WordPress. Selected projects, client sites and experience.",
  openGraph: {
    title: "Daniel Al Nafutshy · Full Stack Engineer",
    description: "React, Next.js, WordPress and AI-assisted development.",
    type: "website",
  },
};

// Runs before the page paints, so a saved theme doesn't flash the wrong colors.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
