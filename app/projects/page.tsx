import type { Metadata } from "next";
import { Cta, ProjectGrid } from "@/components/sections";
import { Container, PageHero } from "@/components/ui";
import { founder, projects, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web apps and custom systems we've designed, built and launched.",
};

export default function ProjectsPage() {
  const delivered = stats[0].value;

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={`${delivered} projects delivered`}
        body="Here are some of the web apps and systems we've built, from SaaS platforms with online payments to booking and management systems."
      />
      <section className="py-24">
        <Container>
          <ProjectGrid />
          <div className="mt-16 rounded-2xl border border-dashed border-neutral-300 p-8 text-center">
            <p className="text-3xl font-semibold text-neutral-900">
              + {Math.max(parseInt(delivered, 10) - projects.length, 0)} more
            </p>
            <p className="mt-2 text-neutral-600">
              Many projects are private client work. Ask {founder.name} for case studies relevant to your industry.
            </p>
          </div>
        </Container>
      </section>
      <Cta />
    </>
  );
}
