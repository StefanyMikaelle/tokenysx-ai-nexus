import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { AgentCard } from "@/components/site/MarketplacePreview";
import { AGENTS, CATEGORIES } from "@/lib/agents-data";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Tokenysx Agents" },
      { name: "description", content: "Discover, trade and invest in tokenized AI agents." },
    ],
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = AGENTS.filter((a) => (cat === "All" || a.category === cat) && a.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Marketplace</div>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">
          Tokenized agents, <span className="text-gradient-cyber">live markets</span>.
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Real-time pricing, on-chain ownership, and verifiable performance for every autonomous agent.
        </p>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
          <Input
            placeholder="Search agents…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="md:max-w-xs glass border-border/60"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-mono transition-all ${
                  cat === c
                    ? "bg-gradient-cyber text-primary-foreground shadow-neon"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {list.map((a) => (
            <AgentCard key={a.id} agent={a} />
          ))}
        </div>

        {/* Live ticker */}
        <div className="mt-16 overflow-hidden rounded-2xl glass-strong">
          <div className="flex animate-ticker whitespace-nowrap py-3 font-mono text-xs">
            {[...AGENTS, ...AGENTS].map((a, i) => (
              <span key={i} className="mx-6 text-muted-foreground">
                {a.name} <span className="text-foreground">{a.price}</span>{" "}
                <span className="text-neon-green">{a.change}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
