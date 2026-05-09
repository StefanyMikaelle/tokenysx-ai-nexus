import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { t: "Build", d: "Developer creates an agent with prompts, tools, datasets." },
  { t: "Tokenize", d: "Agent becomes an on-chain entity with supply, governance and revenue share." },
  { t: "Deploy", d: "Workloads dispatched to DePIN GPU providers globally." },
  { t: "Earn", d: "Enterprises consume the agent. Revenue auto-distributes to holders." },
];

export function SolutionSection() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The protocol"
          title={<>Agents become <span className="text-gradient-cyber">economic entities</span>.</>}
          description="A complete economic stack — from inference to liquidity — running on Solana."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-4 relative">
          <div className="absolute inset-x-0 top-12 hidden md:block h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto h-24 w-24 rounded-2xl bg-gradient-card border border-border flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-cyber opacity-20" />
                <span className="font-mono text-2xl font-semibold text-gradient-cyber">{i + 1}</span>
              </div>
              <h3 className="mt-5 text-center text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <SmartContractFlow />
      </div>
    </section>
  );
}

function SmartContractFlow() {
  return (
    <div className="mt-20 glass-strong rounded-2xl p-6 font-mono text-sm">
      <div className="flex items-center justify-between border-b border-border/40 pb-3">
        <div className="text-xs text-muted-foreground">contract: AgentVault.sol · solana mainnet</div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse-glow" /> live
        </div>
      </div>
      <pre className="mt-4 overflow-x-auto text-xs leading-relaxed">
{`agent.deploy({
  model:        "gpt-5.2-pro",
  compute:      "depin://gpu-cluster/h100",
  tokenization: { supply: 1_000_000, revenueShare: 0.7 },
  governance:   "DAO::quadratic"
})

▸ tx: 5gK...A9f   ▸ minted: 1,000,000 $LEGAL   ▸ holders: 3,182
▸ revenue routed → 70% holders · 20% builder · 10% compute providers`}
      </pre>
    </div>
  );
}
