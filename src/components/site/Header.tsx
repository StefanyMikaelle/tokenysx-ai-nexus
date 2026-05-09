import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/marketplace", label: "Marketplace" },
  { to: "/compute", label: "DePIN" },
  { to: "/create", label: "Create Agent" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/docs", label: "Docs" },
  { to: "/pricing", label: "Pricing" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 glass-strong">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-cyber animate-pulse-glow" />
            <div className="absolute inset-[3px] rounded-md bg-background flex items-center justify-center font-mono text-[11px] font-bold text-gradient-cyber">
              TX
            </div>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Tokenysx <span className="text-muted-foreground">Agents</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/dashboard">Sign in</Link>
          </Button>
          <Button asChild size="sm" variant="hero">
            <Link to="/create">Launch Agent</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
