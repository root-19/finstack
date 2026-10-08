import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { faqs, founder, projects, reasons, services, site, steps } from "@/lib/site";
import { Icon } from "./icon";
import { Button, Container, SectionHeading } from "./ui";

export function WhyUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow={`Why ${site.name}`}
          title="A development partner, not just a vendor"
          body="We care about what the software does for your business, not just about shipping code."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-neutral-200/60"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={r.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">{r.title}</h3>
              <p className="mt-2 text-neutral-600">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {services.map((s) => (
        <div key={s.slug} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-brand-500">
            <Icon name={s.icon} className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-neutral-900">{s.name}</h3>
          <p className="mt-3 text-neutral-600">{s.summary}</p>
          <ul className="mt-6 grid flex-1 gap-2 text-sm sm:grid-cols-2">
            {s.points.map((point) => (
              <li key={point} className="flex gap-2 text-neutral-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href={`/services#${s.slug}`}
            className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export function TechTags({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            dark ? "bg-white/10 text-neutral-200" : "bg-neutral-100 text-neutral-700"
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function ProjectGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((p, i) => (
        <article key={p.name} className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200">
          <div className="relative flex h-44 items-end overflow-hidden bg-ink-950 p-6">
            <div className="bg-grid absolute inset-0" aria-hidden />
            <div
              className={`absolute h-48 w-48 rounded-full bg-brand-600/40 blur-3xl ${i % 2 ? "-right-10 -top-10" : "-left-10 -top-10"}`}
              aria-hidden
            />
            <span className="relative font-mono text-5xl font-semibold text-white/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="relative ml-auto rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
              {p.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-neutral-900">{p.name}</h3>
            <p className="mt-3 text-neutral-600">{p.summary}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-neutral-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <TechTags items={p.tech} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Process() {
  return (
    <section className="bg-ink-950 py-24">
      <Container>
        <SectionHeading
          dark
          eyebrow="How we work"
          title="A simple process from idea to launch"
          body="You always know what's being built, what's next and when it'll be ready."
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-neutral-400">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function FounderCard() {
  return (
    <div className="grid items-center gap-10 rounded-3xl bg-white p-8 ring-1 ring-neutral-200 sm:p-12 lg:grid-cols-3">
      <div className="mx-auto">
        {founder.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={founder.photo}
            alt={founder.name}
            className="h-48 w-48 rounded-full object-cover ring-4 ring-brand-600"
          />
        ) : (
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-ink-950 text-5xl font-semibold text-white ring-4 ring-brand-600">
            {founder.initials}
          </div>
        )}
      </div>
      <div className="lg:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Meet the founder</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">{founder.name}</h2>
        <p className="mt-1 font-medium text-neutral-500">
          {founder.role}, {site.name}
        </p>
        <div className="mt-6 space-y-4 text-lg text-neutral-600">
          {founder.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-neutral-900">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-neutral-400 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-neutral-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Cta() {
  return (
    <section className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-16 text-center sm:px-16">
          <div
            className="absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/40 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
              Tell us what you need and get a free consultation and quote within one business day.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact">Get a free quote</Button>
              <Button href="/projects" variant="ghost-dark">
                See our work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
