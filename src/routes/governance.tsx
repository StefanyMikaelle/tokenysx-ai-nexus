import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance — Tokenysx" },
      { name: "description", content: "DAO governance for autonomous AI agents." },
    ],
  }),
  component: GovernancePage,
});

const proposals = [
  { id: "TXG-014", t: "Increase revenue share to holders to 75%", for: 78, against: 22, status: "Active" },
  { id: "TXG-013", t: "Add H200 nodes to compute mesh", for: 92, against: 8, status: "Passed" },
  { id: "TXG-012", t: "Upgrade LegalGPT base model to gpt-5.2-pro", for: 64, against: 36, status: "Active" },
  { id: "TXG-011", t: "Treasury buyback program – 50K SOL", for: 88, against: 12, status: "Passed" },
];

function GovernancePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Governance</div>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">
          The DAO of <span className="text-gradient-cyber">autonomous intelligence</span>.
        </h1>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { k: "Holders voting", v: "21,394" },
            { k: "Active proposals", v: "7" },
            { k: "Treasury", v: "184K SOL" },
            { k: "Quorum", v: "62%" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-xl p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-mono text-2xl text-gradient">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3">
          {proposals.map((p) => (
            <div key={p.id} className="glass-strong rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="font-mono text-xs text-muted-foreground">{p.id}</div>
                <div className={`rounded-full px-2 py-0.5 text-xs font-mono ${
                  p.status === "Active" ? "bg-accent/10 text-accent border border-accent/30" : "bg-neon-green/10 text-neon-green border border-neon-green/30"
                }`}>{p.status}</div>
                <div className="font-semibold">{p.t}</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Bar label="For" value={p.for} color="bg-neon-green" />
                <Bar label="Against" value={p.against} color="bg-destructive" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function Bar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-mono">
        <span className="text-muted-foreground">{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-1.5 h-1.5 rounded-full bg-background/60 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
