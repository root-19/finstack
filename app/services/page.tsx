import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Icon } from "@/components/icon";
import { Cta, Faq, Process, TechTags } from "@/components/sections";
import { Button, Container, PageHero } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web app development and custom business systems, built end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software built around your business"
        body="From a fast company website to a full management system, we handle design, development, deployment and support."
      />

      <section className="py-24">
        <Container className="space-y-24">
          {services.map((s, i) => (
            <div key={s.slug} id={s.slug} className="grid scroll-mt-24 items-center gap-12 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900">{s.name}</h2>
                <p className="mt-4 text-lg text-neutral-600">{s.summary}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.points.map((point) => (
                    <li key={point} className="flex gap-2 text-neutral-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Get a quote</Button>
                  <Button href="/projects" variant="secondary">
                    See related projects
                  </Button>
                </div>
              </div>

              <div className="relative flex aspect-4/3 flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl bg-ink-950 p-8">
                <div className="bg-grid absolute inset-0" aria-hidden />
                <div className="absolute h-64 w-64 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white/5 text-brand-500 ring-1 ring-white/15 backdrop-blur">
                  <Icon name={s.icon} className="h-14 w-14" strokeWidth={1.5} />
                </div>
                <div className="relative">
                  <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Tech we use
                  </p>
                  <TechTags items={s.tech} dark />
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <Process />
      <Faq />
      <Cta />
    </>
  );
}
