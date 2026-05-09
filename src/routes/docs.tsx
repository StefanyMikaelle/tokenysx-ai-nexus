import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — Tokenysx" },
      { name: "description", content: "Build with the Tokenysx Agents API." },
    ],
  }),
  component: DocsPage,
});

function DocsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid gap-10 lg:grid-cols-[220px_1fr_320px]">
        <aside className="glass rounded-2xl p-4 h-fit sticky top-20 hidden lg:block">
          {["Getting started", "Authentication", "Create agent", "Tokenization", "Compute", "Webhooks", "Errors"].map((s, i) => (
            <div key={s} className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${i === 2 ? "bg-gradient-cyber text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {s}
            </div>
          ))}
        </aside>

        <div className="space-y-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">API Reference</div>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Create agent</h1>
            <p className="mt-3 text-muted-foreground">
              Mints a new tokenized agent on Solana and deploys it to the DePIN compute mesh.
            </p>
          </div>

          <div className="glass rounded-xl p-6 font-mono text-sm">
            <div className="text-accent">POST</div>
            <div className="mt-1">https://api.tokenysx.io/v1/agents</div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Body parameters</h2>
            <div className="glass rounded-xl divide-y divide-border/40">
              {[
                ["name", "string", "Display name of the agent"],
                ["category", "string", "Vertical (legal, finance, trading…)"],
                ["model", "string", "Base LLM identifier"],
                ["tokenSupply", "number", "Total token supply"],
                ["revenueShare", "number", "Share routed to holders (0–1)"],
              ].map(([k, t, d]) => (
                <div key={k} className="grid grid-cols-12 p-4 text-sm">
                  <div className="col-span-3 font-mono">{k}</div>
                  <div className="col-span-2 font-mono text-accent">{t}</div>
                  <div className="col-span-7 text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="glass-strong rounded-xl overflow-hidden">
            <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">Request</div>
            <pre className="p-4 text-xs font-mono leading-relaxed">{`curl https://api.tokenysx.io/v1/agents \\
  -H "Authorization: Bearer sk_live_…" \\
  -d name="LegalGPT" \\
  -d tokenSupply=1000000 \\
  -d revenueShare=0.7`}</pre>
          </div>
          <div className="glass-strong rounded-xl overflow-hidden">
            <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">Response</div>
            <pre className="p-4 text-xs font-mono leading-relaxed">{`{
  "id": "agt_5gK9A9f",
  "tx": "5gK9...A9f",
  "token": "$LEGAL",
  "status": "deployed"
}`}</pre>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}
