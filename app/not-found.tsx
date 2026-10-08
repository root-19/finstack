import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink-950 pt-40 pb-32">
      <Container className="text-center">
        <p className="font-mono text-sm text-brand-300">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">Page not found</h1>
        <p className="mt-4 text-neutral-300">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
