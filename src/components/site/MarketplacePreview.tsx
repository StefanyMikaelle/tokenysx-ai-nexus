import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";
import { AGENTS } from "@/lib/agents-data";
import { Button } from "@/components/ui/button";

export function MarketplacePreview() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            align="left"
            eyebrow="Marketplace"
            title={<>The <span className="text-gradient-cyber">Bloomberg terminal</span> for AI agents.</>}
            description="Discover, trade and invest in autonomous agents across every vertical."
          />
          <Button asChild variant="glass">
            <Link to="/marketplace">Open marketplace →</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {AGENTS.slice(0, 4).map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <AgentCard agent={a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgentCard({ agent }: { agent: typeof AGENTS[number] }) {
  return (
    <Link to="/marketplace" className="group block">
      <div className="relative overflow-hidden rounded-2xl glass p-5 transition-all hover:shadow-neon hover:border-primary/30">
        <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-cyber opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />

        <div className="flex items-center gap-3">
          <AgentAvatar id={agent.id} />
          <div>
            <div className="font-semibold">{agent.name}</div>
            <div className="font-mono text-xs text-muted-foreground">{agent.category}</div>
          </div>
          <div className="ml-auto rounded-full bg-neon-green/10 px-2 py-0.5 text-xs font-mono text-neon-green border border-neon-green/30">
            {agent.change}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
          <Stat label="Price" value={agent.price} />
          <Stat label="Market cap" value={agent.marketCap} />
          <Stat label="Revenue" value={agent.revenue} />
          <Stat label="APY" value={agent.apy} accent />
        </div>

        <div className="mt-4 h-10">
          <Sparkline />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>⛁ {agent.gpus}</span>
          <span>{agent.holders.toLocaleString()} holders</span>
        </div>
      </div>
    </Link>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-muted-foreground">{label}</div>
      <div className={`font-mono font-semibold ${accent ? "text-gradient-cyber" : ""}`}>{value}</div>
    </div>
  );
}

function AgentAvatar({ id }: { id: string }) {
  const seed = id.charCodeAt(0) + id.charCodeAt(1);
  const hue1 = (seed * 13) % 360;
  const hue2 = (seed * 47) % 360;
  return (
    <div
      className="h-10 w-10 rounded-lg shadow-neon"
      style={{
        background: `conic-gradient(from ${seed}deg, hsl(${hue1} 80% 60%), hsl(${hue2} 80% 60%), hsl(${hue1} 80% 60%))`,
      }}
    />
  );
}

function Sparkline() {
  const points = Array.from({ length: 24 }).map((_, i) => {
    const v = 30 + Math.sin(i / 2) * 15 + Math.random() * 8;
    return `${(i / 23) * 100},${50 - v}`;
  });
  return (
    <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.85 0.18 200)" stopOpacity="0.4" />
          <stop offset="1" stopColor="oklch(0.85 0.18 200)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points.join(" ")} fill="none" stroke="oklch(0.85 0.18 200)" strokeWidth="0.8" />
      <polygon points={`0,50 ${points.join(" ")} 100,50`} fill="url(#spark)" />
    </svg>
  );
}
