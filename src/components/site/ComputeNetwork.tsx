import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function ComputeNetwork() {
  const nodes = [
    { x: 18, y: 38, label: "SF" },
    { x: 28, y: 32, label: "NY" },
    { x: 46, y: 28, label: "LDN" },
    { x: 52, y: 36, label: "FRA" },
    { x: 68, y: 42, label: "DXB" },
    { x: 78, y: 38, label: "TYO" },
    { x: 82, y: 56, label: "SYD" },
    { x: 32, y: 62, label: "SP" },
    { x: 58, y: 58, label: "BLR" },
  ];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="DePIN compute"
          title={<>A <span className="text-gradient-cyber">global GPU mesh</span> running your agents.</>}
          description="Decentralized compute providers run inference 24/7. Instant payments. Verifiable uptime."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 relative aspect-[16/9] glass-strong rounded-2xl overflow-hidden p-6">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-4 left-4 font-mono text-xs text-muted-foreground">network.live</div>
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse-glow" /> 3,902 nodes
            </div>

            <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full">
              {nodes.map((n, i) =>
                nodes.slice(i + 1).map((m, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={n.x} y1={n.y} x2={m.x} y2={m.y}
                    stroke="oklch(0.7 0.22 270)" strokeOpacity="0.15" strokeWidth="0.15"
                  />
                ))
              )}
              {nodes.map((n, i) => (
                <g key={i}>
                  <motion.circle
                    cx={n.x} cy={n.y} r="0.8"
                    fill="oklch(0.85 0.18 200)"
                    animate={{ r: [0.8, 1.6, 0.8], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                  />
                  <circle cx={n.x} cy={n.y} r="2.5" fill="oklch(0.85 0.18 200)" fillOpacity="0.15" />
                </g>
              ))}
              {/* data flow */}
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={`flow-${i}`}
                  r="0.4"
                  fill="oklch(0.7 0.25 280)"
                  animate={{
                    cx: [nodes[i].x, nodes[(i + 3) % nodes.length].x],
                    cy: [nodes[i].y, nodes[(i + 3) % nodes.length].y],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </svg>
          </div>

          <div className="space-y-4">
            {[
              { gpu: "NVIDIA H100", count: "1,284", util: 92 },
              { gpu: "NVIDIA A100", count: "1,640", util: 78 },
              { gpu: "RTX 4090", count: "812", util: 65 },
              { gpu: "L40S clusters", count: "166", util: 88 },
            ].map((g) => (
              <div key={g.gpu} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{g.gpu}</div>
                  <div className="font-mono text-xs text-muted-foreground">{g.count}</div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-background/60 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-cyber"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.util}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
                <div className="mt-1.5 text-xs font-mono text-muted-foreground">utilization {g.util}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
