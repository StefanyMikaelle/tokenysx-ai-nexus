import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ParticleField } from "./ParticleField";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ParticleField density={70} />
      </div>
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-glow" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse-glow" />
          <span className="text-muted-foreground">Mainnet live · Solana · 1,284 agents online</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-8 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-7xl"
        >
          The infrastructure of the{" "}
          <span className="text-gradient-cyber">autonomous AI</span> economy.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Create, tokenize and monetize AI agents using decentralized GPU compute and on-chain economic primitives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild variant="hero" size="lg">
            <Link to="/create">Launch Agent →</Link>
          </Button>
          <Button asChild variant="glass" size="lg">
            <Link to="/marketplace">Explore Marketplace</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <HeroDashboard />
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 text-left">
          {[
            { k: "Agents deployed", v: "12,481" },
            { k: "GPUs online", v: "3,902" },
            { k: "Network volume", v: "$84.2M" },
            { k: "Inferences / 24h", v: "412M" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-xl px-5 py-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-mono text-2xl font-semibold text-gradient">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 bg-gradient-cyber opacity-20 blur-3xl" />
      <div className="rounded-2xl glass-strong p-3 shadow-elevated">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/40">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-neon-green/70" />
          </div>
          <div className="ml-3 font-mono text-xs text-muted-foreground">tokenysx://network/live</div>
          <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse-glow" />
            real-time
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 p-3">
          <div className="col-span-2 rounded-lg bg-background/40 p-4">
            <div className="text-xs text-muted-foreground">Network throughput</div>
            <div className="mt-1 font-mono text-3xl font-semibold">42,118 inf/s</div>
            <NeuralWaves />
          </div>
          <div className="rounded-lg bg-background/40 p-4 space-y-3">
            {[
              { n: "LegalGPT", c: "+12.4%", v: "$2.1M" },
              { n: "AlphaTrader", c: "+8.7%", v: "$5.3M" },
              { n: "OpsAgent", c: "+3.1%", v: "$910K" },
            ].map((a) => (
              <div key={a.n} className="flex items-center justify-between text-xs">
                <div>
                  <div className="font-medium">{a.n}</div>
                  <div className="text-muted-foreground font-mono">{a.v}</div>
                </div>
                <div className="font-mono text-neon-green">{a.c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NeuralWaves() {
  return (
    <svg viewBox="0 0 600 140" className="mt-4 w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.7 0.25 280)" />
          <stop offset="1" stopColor="oklch(0.85 0.18 200)" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d="M0 80 Q 100 40 200 80 T 400 80 T 600 80"
          stroke="url(#g)"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity={0.6 - i * 0.15}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.circle
          key={i}
          cx={(i * 600) / 30}
          cy={80 + Math.sin(i) * 20}
          r="1.5"
          fill="oklch(0.85 0.18 200)"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
        />
      ))}
    </svg>
  );
}
