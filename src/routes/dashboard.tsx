import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { LineChart, Line, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { AGENTS } from "@/lib/agents-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Tokenysx" },
      { name: "description", content: "Operate your AI agent fleet." },
    ],
  }),
  component: DashboardPage,
});

const series = Array.from({ length: 30 }).map((_, i) => ({
  d: i,
  rev: 40 + Math.sin(i / 3) * 15 + i * 1.5 + Math.random() * 6,
  inf: 200 + Math.cos(i / 2) * 60 + i * 4,
}));

const sidebar = [
  ["Overview", true], ["Agents", false], ["Marketplace", false],
  ["Compute Network", false], ["Tokenization", false], ["Revenue", false],
  ["Investors", false], ["Governance", false], ["Analytics", false],
  ["APIs", false], ["Settings", false],
];

function DashboardPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-24">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="glass rounded-2xl p-3 h-fit sticky top-20 hidden lg:block">
            {sidebar.map(([label, active]) => (
              <button
                key={label as string}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  active ? "bg-gradient-cyber text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
          </aside>

          <div className="space-y-6">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Overview</div>
                <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">Welcome back, operator.</h1>
              </div>
              <Link to="/create" className="rounded-md bg-gradient-cyber px-4 py-2 text-sm font-medium text-primary-foreground shadow-neon">
                + New Agent
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                { k: "Active agents", v: "12", c: "+3 this week" },
                { k: "Network revenue", v: "$84.2K", c: "+12.4%" },
                { k: "GPUs allocated", v: "184", c: "97% util" },
                { k: "Holders", v: "21,394", c: "+1.2K" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
                  <div className="mt-1 font-mono text-2xl font-semibold text-gradient">{s.v}</div>
                  <div className="mt-1 font-mono text-xs text-neon-green">{s.c}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2 glass-strong rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-semibold">Network revenue</div>
                  <div className="font-mono text-xs text-muted-foreground">last 30d</div>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={series}>
                    <defs>
                      <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="oklch(0.7 0.25 280)" stopOpacity={0.6} />
                        <stop offset="1" stopColor="oklch(0.7 0.25 280)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="oklch(1 0 0 / 0.05)" />
                    <XAxis dataKey="d" tickLine={false} axisLine={false} tick={{ fill: "oklch(0.7 0.03 260)", fontSize: 10 }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fill: "oklch(0.7 0.03 260)", fontSize: 10 }} />
                    <Tooltip contentStyle={{ background: "oklch(0.17 0.025 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 8 }} />
                    <Area dataKey="rev" stroke="oklch(0.7 0.25 280)" fill="url(#rev)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <div className="font-semibold mb-4">Inference / s</div>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={series}>
                    <Line dataKey="inf" stroke="oklch(0.85 0.18 200)" strokeWidth={2} dot={false} />
                    <Tooltip contentStyle={{ background: "oklch(0.17 0.025 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-3 font-mono text-2xl text-gradient-cyber">42,118 inf/s</div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <div className="font-semibold mb-4">Your agents</div>
              <div className="grid grid-cols-12 text-xs font-mono text-muted-foreground border-b border-border/40 pb-2">
                <div className="col-span-3">Agent</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Revenue</div>
                <div className="col-span-2">Holders</div>
                <div className="col-span-2">APY</div>
                <div className="col-span-1 text-right">24h</div>
              </div>
              {AGENTS.slice(0, 6).map((a) => (
                <div key={a.id} className="grid grid-cols-12 py-3 text-sm border-b border-border/30 last:border-b-0 items-center">
                  <div className="col-span-3 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-md bg-gradient-cyber" />
                    <div>
                      <div className="font-medium">{a.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{a.category}</div>
                    </div>
                  </div>
                  <div className="col-span-2 font-mono">{a.price}</div>
                  <div className="col-span-2 font-mono">{a.revenue}</div>
                  <div className="col-span-2 font-mono">{a.holders.toLocaleString()}</div>
                  <div className="col-span-2 font-mono text-gradient-cyber">{a.apy}</div>
                  <div className="col-span-1 text-right font-mono text-neon-green">{a.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
