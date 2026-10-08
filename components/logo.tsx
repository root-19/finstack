import Link from "next/link";
import { site } from "@/lib/site";

// The "F" mark: a dark top leaf and a lighter lower leaf that forms the stem.
// Kept in sync with public/logo.svg and app/icon.svg.
export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" className={className} aria-hidden>
      <path d="M0 26C0 11.6 11.6 0 26 0H48C46.4 9.2 38.4 16 29 16H24C18.5 16 14 20.5 14 26Z" className="fill-brand-700" />
      <path
        d="M0 30H40C38.6 37 32.4 42 25.2 42H21C17.1 42 14 45.1 14 49V56C6.3 56 0 49.7 0 42Z"
        className="fill-brand-500"
      />
    </svg>
  );
}

export function Logo({ dark = false, tagline = true }: { dark?: boolean; tagline?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tight ${dark ? "text-white" : "text-neutral-950"}`}>
          {site.name}
        </span>
        {tagline && (
          <span
            className={`mt-1 text-[10px] font-medium tracking-[0.2em] ${dark ? "text-neutral-400" : "text-neutral-500"}`}
          >
            {site.motto}
          </span>
        )}
      </span>
    </Link>
  );
}
