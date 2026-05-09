import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export const Route = createFileRoute("/create")({
  head: () => ({
    meta: [
      { title: "Create Agent — Tokenysx" },
      { name: "description", content: "Mint, tokenize and deploy a new AI agent." },
    ],
  }),
  component: CreatePage,
});

function CreatePage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("LegalGPT");
  const [supply, setSupply] = useState("1000000");
  const [share, setShare] = useState("70");
  const [deploying, setDeploying] = useState(false);
  const [done, setDone] = useState(false);

  const deploy = () => {
    setDeploying(true);
    setTimeout(() => {
      setDeploying(false);
      setDone(true);
    }, 2400);
  };

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Create</div>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">
          Mint a <span className="text-gradient-cyber">new agent</span>.
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 glass-strong rounded-2xl p-8 space-y-8">
            <Steps step={step} />

            {step === 1 && (
              <div className="space-y-5">
                <Field label="Agent name">
                  <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Field>
                <Field label="Category">
                  <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <option>Legal</option><option>Finance</option><option>Trading</option>
                    <option>DevOps</option><option>Marketing</option><option>Research</option>
                  </select>
                </Field>
                <Field label="Base model">
                  <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <option>gpt-5.2-pro</option><option>claude-opus-5</option><option>gemini-3-flash</option>
                  </select>
                </Field>
                <Field label="Description">
                  <Textarea placeholder="What does your agent do?" rows={3} />
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <Field label="Token supply">
                  <Input value={supply} onChange={(e) => setSupply(e.target.value)} />
                </Field>
                <Field label="Revenue share to holders (%)">
                  <Input value={share} onChange={(e) => setShare(e.target.value)} />
                </Field>
                <Field label="Governance">
                  <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <option>DAO · Quadratic voting</option>
                    <option>DAO · Token weighted</option>
                    <option>Multi-sig</option>
                  </select>
                </Field>
                <Field label="Upload datasets / prompts / API specs">
                  <div className="rounded-lg border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground">
                    Drop files here or click to upload
                  </div>
                </Field>
              </div>
            )}

            {step === 3 && (
              <div>
                {!done ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Review and deploy. Smart contract will be minted on Solana mainnet.
                    </p>
                    <div className="glass rounded-xl p-4 font-mono text-xs space-y-1.5">
                      <Row k="name" v={name} />
                      <Row k="supply" v={supply} />
                      <Row k="revenueShare" v={`${share}%`} />
                      <Row k="compute" v="depin://h100-cluster" />
                      <Row k="network" v="solana::mainnet" />
                    </div>
                    <Button onClick={deploy} variant="hero" size="lg" disabled={deploying}>
                      {deploying ? "Deploying smart contract…" : "Deploy agent →"}
                    </Button>
                    {deploying && <DeployTerminal />}
                  </div>
                ) : (
                  <DoneState name={name} />
                )}
              </div>
            )}

            {!done && (
              <div className="flex justify-between pt-4 border-t border-border/40">
                <Button variant="ghost" disabled={step === 1} onClick={() => setStep(step - 1)}>
                  ← Back
                </Button>
                {step < 3 && <Button variant="hero" onClick={() => setStep(step + 1)}>Next →</Button>}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-neon-green animate-pulse-glow" />
                <div className="font-semibold">AI Co-pilot</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Need help structuring tokenomics? Try a 70/20/10 split between holders, builder and compute providers — battle-tested across 1,200+ deployments.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Estimated cost</div>
              <div className="mt-1 font-mono text-2xl text-gradient">~ 1.4 SOL</div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">contract + initial liquidity</div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Steps({ step }: { step: number }) {
  const labels = ["Identity", "Tokenomics", "Deploy"];
  return (
    <div className="flex items-center gap-3">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-3">
          <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-mono text-sm ${
            step >= i + 1 ? "bg-gradient-cyber text-primary-foreground" : "glass text-muted-foreground"
          }`}>{i + 1}</div>
          <span className={`text-sm ${step >= i + 1 ? "text-foreground" : "text-muted-foreground"}`}>{l}</span>
          {i < labels.length - 1 && <div className="h-px w-10 bg-border" />}
        </div>
      ))}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between"><span className="text-muted-foreground">{k}</span><span>{v}</span></div>
  );
}
function DeployTerminal() {
  const lines = [
    "▸ compiling AgentVault.sol …",
    "▸ uploading metadata to IPFS …",
    "▸ minting 1,000,000 tokens …",
    "▸ allocating compute on depin://h100 …",
    "▸ confirming on solana mainnet …",
  ];
  return (
    <div className="glass-strong rounded-xl p-4 font-mono text-xs space-y-1.5">
      {lines.map((l, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.4 }} className="text-accent">
          {l}
        </motion.div>
      ))}
    </div>
  );
}
function DoneState({ name }: { name: string }) {
  return (
    <div className="text-center py-10">
      <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-cyber flex items-center justify-center text-2xl shadow-neon">✓</div>
      <h3 className="mt-5 text-2xl font-semibold">{name} is live.</h3>
      <p className="mt-2 text-muted-foreground">tx: 5gK9...A9f · 1,000,000 tokens minted</p>
    </div>
  );
}
