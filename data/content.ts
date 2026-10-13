// All site text lives here, so content changes don't touch the components.

export const profile = {
  name: "Daniel Al Nafutshy",
  email: "daniel.alnafut@gmail.com",
  linkedin: "https://www.linkedin.com/in/danielalnafutshy",
  github: "https://github.com/DanielAlna",
  resume: "/Daniel_Al_Nafutshy_Resume.pdf",
  intro:
    "I have worked on the web for more than ten years. I started with WordPress and moved to React and Next.js. Today I use Claude Code and Cursor every day, and I care about websites and web apps that are fast, accessible, and easy for the next person to maintain.",
  roles: ["React and Next.js.", "WordPress.", "AI-assisted development."],
};

export type Project = {
  meta: string;
  title: string;
  body: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    meta: "Log-On · Applicant tracking system",
    title: "ATS migration to Next.js",
    body: "I moved a large recruiting system from plain React to the Next.js Page Router, then to the App Router. Pages load faster, the bundle is smaller, and the app now renders on the server. The system has about 1,000 users.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    meta: "Log-On · HR tool",
    title: "Employee retention platform",
    body: "Log-On has about 1,000 employees, and HR kept talking about retention but had no clear way to measure it. I suggested a score that shows retention rates and which employees may be at risk of leaving, then made it. HR started using it regularly. I kept it careful so it helps people stay, and can't be used to push anyone out early.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    meta: "AppsFlyer · Contract",
    title: "Company-wide design system",
    body: "A shared React component library used across the company, connected to a GraphQL data layer, with automated code review checks.",
    tags: ["React", "Material-UI", "GraphQL"],
  },
  {
    meta: "Log-On · Team workflow",
    title: "AI in the daily workflow",
    body: "I brought Cursor with MCP into our production work. It cut a lot of repetitive tasks. Every AI change still went through review, so quality and security stayed in our hands.",
    tags: ["Cursor", "Claude Code", "MCP"],
  },
];

export type Client = {
  id: string; // image files are /img/{id}-1.jpg, /img/{id}-2.jpg, ...
  name: string;
  body: string;
  shots: number;
  // "page" = a flat screenshot (gets a frame), "mockup" = device mockup on white
  kind: "page" | "mockup";
};

export const clients: Client[] = [
  { id: "elbit", name: "Elbit Systems", kind: "mockup", shots: 1,
    body: "Corporate website for an international defense technology company, with business lines, investor relations, press releases, and careers." },
  { id: "wizer", name: "Wizer", kind: "page", shots: 3,
    body: "Marketing website for a consumer research company that uses AI, with product pages, a case study, and lead forms." },
  { id: "naturalformula", name: "Natural Formula", kind: "mockup", shots: 1,
    body: "Brand website for a professional hair care line, with a product catalog, how-to guides, and a country selector." },
  { id: "artjudaica", name: "Art Judaica", kind: "page", shots: 3,
    body: "Online store for Judaica gifts sold abroad, with wholesale accounts, a large category menu, and a supplier ordering system." },
  { id: "amazingday", name: "Amazing Day", kind: "mockup", shots: 1,
    body: "Store for personalized planners, where customers design their own planner online. Hebrew." },
  { id: "sano", name: "Sano", kind: "page", shots: 3,
    body: "Brand site for a large household products company, with product categories, a blog, and a promotions slider. Hebrew." },
  { id: "logon", name: "Log-On", kind: "page", shots: 4,
    body: "Careers site with job search, open positions, and an application form. Hebrew, right to left." },
  { id: "teka", name: "Teka Israel", kind: "mockup", shots: 1,
    body: "Israeli website for an international kitchen appliance brand, with a full-screen slider and product categories. Hebrew." },
  { id: "careline", name: "Careline", kind: "page", shots: 3,
    body: "Online store for cosmetics and fragrance brands, with a mega menu and product listings. Hebrew." },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Front end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Material-UI"] },
  { group: "WordPress", items: ["Custom themes", "Plugins", "Gutenberg blocks", "Elementor", "Divi", "WooCommerce", "PHP"] },
  { group: "Back end", items: ["Node.js", "REST", "GraphQL", "PostgreSQL", "MySQL", "Prisma", "Firebase", "Supabase"] },
  { group: "AI tools", items: ["Claude Code", "Cursor", "MCP servers", "Subagents", "OpenAI API"] },
  { group: "Testing and ops", items: ["Jest", "Playwright", "Sentry", "PostHog", "Git", "CI/CD", "Stripe"] },
  { group: "Standards", items: ["WCAG", "Performance", "Secure coding", "SEO"] },
];

export const jobs: { when: string; title: string; body: string }[] = [
  { when: "2026 – Now", title: "Founder · DAN Web Solutions",
    body: "My web development business in the US. Contract projects with WordPress, React, and Next.js, using AI tools like Claude Code to deliver faster." },
  { when: "2021 – 2026", title: "Full Stack Software Engineer · Log-On",
    body: "Log-On is an HR and tech recruiting company of about 1,000 people. I worked directly with the managing director, the VP of R&D, and the VP of Strategy and Marketing, mentored a junior developer, and led the ATS migration and the retention platform." },
  { when: "2020", title: "Frontend Developer (Contract) · AppsFlyer",
    body: "Company-wide design system in React and Material-UI." },
  { when: "2018 – 2020", title: "Full Stack Engineer (Contract) · Log-On",
    body: "First version of the applicant tracking system, in React with the WordPress API." },
  { when: "2016 – 2018", title: "Frontend Web Developer · Matomy Media Group",
    body: "WordPress sites, landing pages, and plugins for marketing campaigns. SEO and page speed work." },
  { when: "2016 – 2020", title: "Freelance Web Developer · Israel",
    body: "WordPress sites for clients, mostly through Anova Web Development, alongside my full-time roles." },
];

export const about: string[] = [
  "I have always cared about how a space feels and how it is organized. In high school I considered architecture as a potential path, but I was drawn to software because of the infinite possibilities it offered to shape and curate a virtual space. I still enjoy getting the structure, the look, and the feel right, in the design and in the code.",
  "What I care about most is how a product feels to use. How fast it responds, how things move, how a button feels when you click it. Most people never notice these details, but they notice when something is wrong. I check the small things many times until they feel right.",
  "I moved to the United States a few years ago and live in Columbia, Maryland with my wife and son. I speak English and Hebrew.",
];

export const recommendation = {
  name: "Irina Zabelyshinsky",
  role: "VP R&D and CISO, LogOn Software · Managed Daniel for more than five years",
  paragraphs: [
    "Daniel combines strong technical skills with a real passion for software development and continuous learning. He quickly adopts new technologies and has excellent judgment when choosing the right tools to bring real value to the team and the project.",
    "Beyond his technical expertise, Daniel is an excellent mentor and teammate.",
    "I truly enjoyed working with Daniel, and I would be happy to work with him again in the future.",
  ],
};
