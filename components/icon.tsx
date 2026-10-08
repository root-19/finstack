import {
  Code2,
  Database,
  Eye,
  Globe,
  Lock,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Target,
  UserCheck,
  Wrench,
  type LucideProps,
} from "lucide-react";

// Lets lib/site.ts reference icons by name instead of importing components.
const icons = {
  Code2,
  Database,
  Eye,
  Globe,
  Lock,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Target,
  UserCheck,
  Wrench,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}
