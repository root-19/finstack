import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import { Logo } from "./logo";
import { Container } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    { title: "Services", links: services.map((s) => ({ label: s.name, href: `/services#${s.slug}` })) },
    { title: "Company", links: nav },
    {
      title: "Connect",
      links: [
        { label: "Facebook", href: site.social.facebook },
        { label: "LinkedIn", href: site.social.linkedin },
        { label: "GitHub", href: site.social.github },
      ],
    },
  ];

  return (
    <footer className="bg-ink-950 text-neutral-400">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm">{site.tagline}.</p>
            <p className="mt-6 text-sm">
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
              <br />
              {site.address}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
