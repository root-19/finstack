// All company profile content lives here so the pages stay layout-only.
// Anything marked TODO is a placeholder to replace with your real details.

export const site = {
  name: "Finstack",
  tagline: "Custom web apps and systems that help businesses grow",
  motto: "Save • Grow • Build",
  description:
    "Finstack is a software development company that designs, builds and maintains web applications and custom business systems, from first idea to launch and beyond.",
  url: "https://finstack.example.com", // TODO: your domain
  email: "rensacuna1@gmail.com",
  phone: "+63 930 487 8996",
  address: "Philippines", // TODO: city / office address
  social: {
    facebook: "https://www.facebook.com/", // TODO
    linkedin: "https://www.linkedin.com/", // TODO
    github: "https://github.com/", // TODO
  },
};

export const founder = {
  name: "Rens Acuña",
  role: "Founder & CEO",
  initials: "RA", // shown until you add a photo
  photo: "", // TODO: e.g. "/founder.jpg" placed in /public
  bio: [
    "I started Finstack to help businesses turn their ideas and manual processes into reliable software. I've personally delivered more than 20 projects, from SaaS platforms with online payments to booking and management systems.",
    "Every client works directly with me, from planning to launch, so nothing gets lost between a sales team and the people writing the code.",
  ],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "2", label: "Core services" },
  { value: "End-to-end", label: "From design to deployment" },
  { value: "1", label: "Direct point of contact" },
];

export const services = [
  {
    slug: "web-apps",
    name: "Web App Development",
    icon: "Globe",
    summary:
      "Fast, modern websites and web applications: customer portals, dashboards, SaaS platforms and online stores, built to work on any device.",
    points: [
      "Company websites & landing pages",
      "Admin dashboards & customer portals",
      "SaaS platforms with user accounts",
      "Online payments & API integrations",
      "Responsive, mobile-first design",
      "Hosting, deployment & maintenance",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    slug: "custom-systems",
    name: "Custom Systems",
    icon: "Database",
    summary:
      "Software built around how your business actually works: booking, inventory, records and management systems that replace spreadsheets and paperwork.",
    points: [
      "Booking & appointment systems",
      "Inventory & sales management",
      "Records & client management",
      "Role-based access (admin / staff / user)",
      "Database design & data migration",
      "Reports & data exports",
    ],
    tech: ["Python", "MySQL", "SQL", "REST APIs"],
  },
] as const;

export const projects = [
  {
    name: "SMS Provider Platform",
    category: "Web App Development",
    summary:
      "A multi-tenant SMS platform where businesses register sender IDs, send bulk and OTP messages through an API, and top up credits with QR Ph payments.",
    highlights: ["Customer dashboard & public API docs", "QR Ph top-ups via PayMongo", "Admin console & usage tracking"],
    tech: ["Next.js", "Convex", "PayMongo", "Tailwind CSS"],
  },
  {
    name: "Pet Grooming Management System",
    category: "Custom Systems",
    summary:
      "An appointment and service management system for a pet grooming shop, with separate dashboards for pet owners and shop admins.",
    highlights: ["Pet profiles & online booking", "Service & schedule management", "Role-based login for users and admins"],
    tech: ["Python", "MySQL"],
  },
  // TODO: add more of your projects here using the same shape.
] as const;

export const steps = [
  { title: "Discover", body: "We talk through your goals, users and budget, then agree on a clear scope and timeline." },
  { title: "Design & build", body: "You see progress early and often, with working previews you can click through and give feedback on." },
  { title: "Launch & support", body: "We deploy, train your team and stay on to fix issues and add features as you grow." },
];

export const reasons = [
  { icon: "UserCheck", title: "Work with the founder", body: "You deal directly with the person building your project. No middlemen." },
  { icon: "Code2", title: "Modern tech stack", body: "Proven tools that are fast, secure and easy to maintain long-term." },
  { icon: "MessageCircle", title: "Clear communication", body: "Regular updates in plain language, and quick replies when you need us." },
  { icon: "ShieldCheck", title: "Built to last", body: "Clean code, secure logins and backups, so your system keeps working." },
  { icon: "Smartphone", title: "Mobile-ready", body: "Every web app works on phones, tablets and desktops out of the box." },
  { icon: "Wrench", title: "Ongoing support", body: "Maintenance and improvements after launch, not just a handover." },
] as const;

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope. After a short discovery call we send a fixed quote with a clear list of features, so there are no surprises.",
  },
  {
    q: "How long does it take to build?",
    a: "A company website usually takes 1–3 weeks. Web apps and custom systems typically take 4–12 weeks depending on features.",
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "Yes. We offer monthly support plans covering hosting, updates, bug fixes and small improvements.",
  },
  {
    q: "Will I own the source code?",
    a: "Yes. Once the project is paid in full, the code and data are yours.",
  },
  {
    q: "Can you improve an existing system?",
    a: "Yes. We can review what you have, fix problems, add features or migrate it to a more modern setup.",
  },
];

export const values = [
  { icon: "Target", title: "Solve real problems", body: "Software should save time and make money, not just look nice." },
  { icon: "Eye", title: "Be transparent", body: "Honest timelines, clear quotes and no hidden costs." },
  { icon: "Lock", title: "Earn trust", body: "We treat your business data with the highest care." },
  { icon: "Rocket", title: "Keep improving", body: "We learn from every project and bring that to the next one." },
] as const;
