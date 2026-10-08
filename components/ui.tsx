import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "ghost-dark" };

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-500/30",
  secondary: "bg-white text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50",
  "ghost-dark": "text-white ring-1 ring-white/20 hover:bg-white/10",
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-wider ${dark ? "text-brand-300" : "text-brand-600"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${dark ? "text-white" : "text-neutral-900"}`}
      >
        {title}
      </h2>
      {body && <p className={`mt-4 text-lg text-pretty ${dark ? "text-neutral-300" : "text-neutral-600"}`}>{body}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-pretty text-neutral-300">{body}</p>
        </div>
      </Container>
    </section>
  );
}
