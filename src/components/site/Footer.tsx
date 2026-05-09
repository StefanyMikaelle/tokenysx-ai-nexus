import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-cyber" />
            <span className="font-semibold">Tokenysx Agents</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The financial infrastructure of the autonomous AI economy.
          </p>
          <p className="mt-6 font-mono text-xs text-muted-foreground">Powered by Solana · DePIN</p>
        </div>
        <FooterCol title="Product" links={[
          { to: "/marketplace", label: "Marketplace" },
          { to: "/create", label: "Create Agent" },
          { to: "/compute", label: "Compute Network" },
          { to: "/dashboard", label: "Dashboard" },
        ]} />
        <FooterCol title="Developers" links={[
          { to: "/docs", label: "Docs" },
          { to: "/docs", label: "API" },
          { to: "/docs", label: "SDKs" },
        ]} />
        <FooterCol title="Company" links={[
          { to: "/pricing", label: "Pricing" },
          { to: "/governance", label: "Governance" },
          { to: "/", label: "About" },
        ]} />
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tokenysx Labs. Decentralized intelligence.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
