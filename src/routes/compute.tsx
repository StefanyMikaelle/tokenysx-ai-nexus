import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ComputeNetwork } from "@/components/site/ComputeNetwork";
import { motion } from "framer-motion";

export const Route = createFileRoute("/compute")({
  head: () => ({
    meta: [
      { title: "Compute Network — Tokenysx" },
      { name: "description", content: "Decentralized GPU mesh powering autonomous AI agents." },
    ],
  }),
  component: ComputePage,
});

function ComputePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">DePIN compute</div>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">
          A <span className="text-gradient-cyber">global GPU mesh</span>.
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Verifiable inference, instant payments and a marketplace of providers — from solo node operators to hyperscale clusters.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { k: "Active GPUs", v: "3,902" },
            { k: "Providers", v: "612" },
            { k: "Inferences / s", v: "42,118" },
            { k: "Avg uptime", v: "99.7%" },
          ].map((s) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-mono text-2xl font-semibold text-gradient">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <ComputeNetwork />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-strong rounded-2xl p-6">
          <div className="font-semibold mb-4">Top compute providers</div>
          <div className="grid grid-cols-12 text-xs font-mono text-muted-foreground border-b border-border/40 pb-2">
            <div className="col-span-4">Provider</div>
            <div className="col-span-2">GPU</div>
            <div className="col-span-2">Uptime</div>
            <div className="col-span-2">Reputation</div>
            <div className="col-span-2 text-right">Earnings 24h</div>
          </div>
          {[
            { p: "Helios Cluster · 0xA1…F3", gpu: "H100 × 128", up: "99.98%", rep: 4.96, earn: "412 SOL" },
            { p: "Orbit Compute · 0x4B…29", gpu: "A100 × 96", up: "99.91%", rep: 4.92, earn: "318 SOL" },
            { p: "NodeForge · 0x7C…AA", gpu: "RTX 4090 × 240", up: "99.87%", rep: 4.88, earn: "201 SOL" },
            { p: "MeshNode · 0x12…E4", gpu: "L40S × 64", up: "99.74%", rep: 4.84, earn: "164 SOL" },
            { p: "QuantumGrid · 0x9F…01", gpu: "H100 × 80", up: "99.69%", rep: 4.81, earn: "142 SOL" },
          ].map((r) => (
            <div key={r.p} className="grid grid-cols-12 py-3 text-sm border-b border-border/30 last:border-b-0">
              <div className="col-span-4 font-medium">{r.p}</div>
              <div className="col-span-2 font-mono text-muted-foreground">{r.gpu}</div>
              <div className="col-span-2 font-mono text-neon-green">{r.up}</div>
              <div className="col-span-2 font-mono">{r.rep}</div>
              <div className="col-span-2 text-right font-mono text-gradient">{r.earn}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
