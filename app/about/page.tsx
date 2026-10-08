import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { Cta, FounderCard } from "@/components/sections";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { founder, site, stats, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name}, its founder ${founder.name}, and the values we work by.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company profile"
        title={`About ${site.name}`}
        body={site.description}
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Who we are</h2>
              <div className="mt-6 space-y-5 text-lg text-neutral-600">
                <p>
                  {site.name} was founded by {founder.name} to give businesses a dependable partner for building
                  software. Many companies still run on spreadsheets, paperwork or tools that don&apos;t quite fit how
                  they work. We change that.
                </p>
                <p>
                  We build web applications and custom systems that are fast, secure and easy to use, and we stay
                  involved after launch so they keep up as your business grows.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Our mission</h2>
              <p className="mt-6 text-lg text-neutral-600">
                To help businesses of every size work smarter with software that solves real problems, delivered
                with honesty, quality and care.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse rounded-2xl border border-neutral-200 p-5">
                    <dt className="mt-1 text-sm text-neutral-500">{s.label}</dt>
                    <dd className="text-2xl font-semibold text-neutral-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-24">
        <Container>
          <FounderCard />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={v.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-neutral-900">{v.title}</h3>
                <p className="mt-2 text-neutral-600">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Cta />
    </>
  );
}
