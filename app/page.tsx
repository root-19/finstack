import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Cta, Faq, FounderCard, Process, ProjectGrid, ServiceCards, WhyUs } from "@/components/sections";
import { Button, Container, SectionHeading } from "@/components/ui";
import { founder, services, site, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="bg-neutral-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What we build"
            body="Whether you need a customer-facing web app or an internal system to run your operations, we build it end to end."
          />
          <div className="mt-16">
            <ServiceCards />
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured work"
            title="Projects we're proud of"
            body={`A few highlights from the ${stats[0].value} projects ${founder.name} has delivered.`}
          />
          <div className="mt-16">
            <ProjectGrid />
          </div>
          <div className="mt-10 text-center">
            <Button href="/projects" variant="secondary">
              View all projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
      <Process />
      <WhyUs />
      <section className="bg-neutral-50 py-24">
        <Container>
          <FounderCard />
        </Container>
      </section>
      <Faq />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-24 sm:pt-40">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/3 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl"
        aria-hidden
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm text-neutral-300 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            {stats[0].value} {stats[0].label.toLowerCase()}
          </p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            We build software that{" "}
            <span className="bg-linear-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              grows your business
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-neutral-300">{site.description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              Get a free quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/projects" variant="ghost-dark">
              See our work
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
            {services.map((s) => (
              <li key={s.slug} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-500" />
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <AppPreview />
      </Container>
    </section>
  );
}

const bookings = [
  { time: "9:00 AM", name: "Full grooming · Bella", status: "Confirmed" },
  { time: "10:30 AM", name: "Bath & trim · Max", status: "Confirmed" },
  { time: "1:00 PM", name: "Nail clipping · Coco", status: "Pending" },
];

const chart = [40, 55, 48, 66, 60, 78, 72, 90];

// An illustrative mock of the kind of system we build, drawn in markup so it
// stays crisp and needs no image assets.
function AppPreview() {
  return (
    <div className="relative" aria-hidden>
      <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
        <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-brand-500" />
            <span className="h-3 w-3 rounded-full bg-neutral-300" />
            <span className="h-3 w-3 rounded-full bg-neutral-300" />
            <span className="ml-4 text-xs text-neutral-400">app.yourbusiness.com</span>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <div className="rounded-xl bg-ink-950 p-4 text-white">
              <p className="text-xs text-neutral-400">Monthly sales</p>
              <p className="mt-1 text-xl font-semibold">₱186,420</p>
              <div className="mt-4 flex h-16 items-end gap-1.5">
                {chart.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${i === chart.length - 1 ? "bg-brand-500" : "bg-white/20"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-xl border border-neutral-100 p-4">
                <p className="text-xs text-neutral-500">Bookings today</p>
                <p className="mt-1 text-xl font-semibold text-neutral-900">24</p>
              </div>
              <div className="rounded-xl border border-neutral-100 p-4">
                <p className="text-xs text-neutral-500">New customers</p>
                <p className="mt-1 text-xl font-semibold text-neutral-900">+12</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-100 sm:col-span-2">
              {bookings.map((b) => (
                <div
                  key={b.time}
                  className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3 text-sm last:border-0"
                >
                  <span className="w-16 shrink-0 font-mono text-xs text-neutral-500">{b.time}</span>
                  <span className="truncate font-medium text-neutral-900">{b.name}</span>
                  <span
                    className={`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${
                      b.status === "Pending" ? "bg-neutral-100 text-neutral-600" : "bg-brand-50 text-brand-700"
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl ring-1 ring-neutral-200 sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
          <CalendarCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-neutral-900">Launched on time</p>
          <p className="text-xs text-neutral-500">Built by {site.name}</p>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="border-b border-neutral-200 py-14">
      <Container>
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-neutral-500">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-neutral-900">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
