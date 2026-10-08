"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { Logo } from "./logo";
import { Button, Container } from "./ui";

// Every page opens on a dark hero, so the bar starts transparent with light
// text and switches to a solid white bar once the user scrolls.
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/90 shadow-sm ring-1 ring-neutral-900/5 backdrop-blur" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo dark={!solid} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition ${
                  solid
                    ? active
                      ? "text-brand-600"
                      : "text-neutral-600 hover:text-neutral-900"
                    : active
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" className="py-2">
            Get a quote
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-md p-2 md:hidden ${solid ? "text-neutral-900" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-neutral-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3" onClick={() => setOpen(false)}>
              Get a quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
