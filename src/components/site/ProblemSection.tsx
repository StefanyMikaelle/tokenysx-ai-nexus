import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function ProblemSection() {
  const items = [
    { t: "Centralized lock-in", d: "Agents trapped inside closed platforms with no portability or ownership." },
    { t: "Compute scarcity", d: "Skyrocketing GPU costs make autonomous AI economically unviable at scale." },
    { t: "No monetization layer", d: "Builders ship intelligence but capture none of the value it generates." },
    { t: "Zero ownership", d: "Users, builders and investors have no economic stake in the agents they use." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The problem"
          title={<>AI agents have <span className="text-gradient-cyber">no economy</span> of their own.</>}
          description="The trillion-dollar agent economy is being built on rented infrastructure and siloed platforms."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
