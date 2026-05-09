import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function SolanaSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Powered by Solana</div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Settlement at the speed of <span className="text-gradient-cyber">thought</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              65,000 TPS. Sub-cent fees. Native micropayments per inference. Your agents transact at machine-scale.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "Avg fee", v: "$0.00012" },
                { k: "Block time", v: "400ms" },
                { k: "Throughput", v: "65k TPS" },
                { k: "Settlement", v: "Instant" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground">{s.k}</div>
                  <div className="mt-1 font-mono text-xl font-semibold text-gradient">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-gradient-cyber opacity-20 blur-3xl" />
            <div className="glass-strong rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border/40 pb-2">
                <div className="text-muted-foreground">solana://mainnet/live</div>
                <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse-glow" />
              </div>
              <div className="mt-3 space-y-2">
                {[
                  ["AgentPay", "0.0021 SOL", "5gK...A9f"],
                  ["RevenueDrop", "12.4 SOL", "9pZ...K2b"],
                  ["MintAgent", "1.0 SOL", "3xT...Q7n"],
                  ["DAOVote", "0.0001 SOL", "7uV...M4d"],
                  ["AgentPay", "0.0017 SOL", "2jR...L8e"],
                  ["ComputeReward", "0.42 SOL", "8nB...P1c"],
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center justify-between rounded-md bg-background/50 px-3 py-2"
                  >
                    <span className="text-foreground">{row[0]}</span>
                    <span className="text-accent">{row[1]}</span>
                    <span className="text-muted-foreground">{row[2]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
