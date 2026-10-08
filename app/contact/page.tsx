import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free consultation and quote from ${site.name}.`,
};

export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Office", value: site.address },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something together"
        body="Tell us about your project and get a free consultation and quote within one business day."
      />
      <section className="py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-neutral-900">Get in touch</h2>
              <p className="mt-3 text-neutral-600">
                Need a website, web app or custom system? Send us a message or reach us directly.
              </p>
              <ul className="mt-10 space-y-6">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <d.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-neutral-500">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="font-medium text-neutral-900 hover:text-brand-700">
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-medium text-neutral-900">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
