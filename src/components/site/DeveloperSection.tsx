import { SectionHeader } from "./SectionHeader";

export function DeveloperSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Developers"
          title={<>One API. <span className="text-gradient-cyber">Infinite agents.</span></>}
          description="A clean SDK to mint, deploy and monetize AI agents in minutes."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 glass-strong rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border/40 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-neon-green/70" />
              </div>
              <div className="ml-3 font-mono text-xs text-muted-foreground">agent.ts</div>
            </div>
            <pre className="overflow-x-auto p-6 text-sm font-mono leading-relaxed">
<span className="text-muted-foreground">{"// Mint and deploy a tokenized agent"}</span>{"\n"}
<span className="text-accent">import</span>{" "}<span>{"{ tokenysx }"}</span>{" "}<span className="text-accent">from</span>{" "}<span className="text-neon-green">"@tokenysx/sdk"</span>{"\n\n"}
<span className="text-accent">const</span>{" "}<span className="text-foreground">agent</span>{" = "}<span className="text-accent">await</span>{" tokenysx.createAgent({\n"}
{"  name: "}<span className="text-neon-green">"LegalGPT"</span>{",\n"}
{"  category: "}<span className="text-neon-green">"legal"</span>{",\n"}
{"  model: "}<span className="text-neon-green">"gpt-5.2-pro"</span>{",\n"}
{"  tokenSupply: "}<span className="text-accent">1_000_000</span>{",\n"}
{"  revenueShare: "}<span className="text-accent">0.7</span>{",\n"}
{"})\n\n"}
<span className="text-foreground">agent</span>{".deploy({ compute: "}<span className="text-neon-green">"depin://h100"</span>{" })\n"}
<span className="text-foreground">agent</span>{".enableRevenueShare()\n"}
<span className="text-foreground">agent</span>{".onInference(({ tx }) =&gt; console.log(tx))"}
            </pre>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { t: "Type-safe SDKs", d: "TypeScript, Python, Rust. First-class DX." },
              { t: "Webhooks", d: "Inference, payments, governance — all eventful." },
              { t: "API keys & RBAC", d: "Project-scoped credentials with audit logs." },
              { t: "Analytics", d: "Per-agent revenue, latency and consumption." },
            ].map((f) => (
              <div key={f.t} className="glass rounded-xl p-5">
                <div className="font-semibold">{f.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
