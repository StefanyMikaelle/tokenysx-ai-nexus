import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Tokenysx" },
      { name: "description", content: "Plans for builders, growth teams and enterprises." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    price: "Free",
    desc: "For builders shipping their first agent.",
    feats: ["Up to 3 agents", "Public marketplace listing", "Community compute pool", "Standard SDK"],
    cta: "Start building",
  },
  {
    name: "Growth",
    price: "$499/mo",
    desc: "Scale revenue and unlock the full economy.",
    feats: ["Unlimited agents", "Revenue share contracts", "Premium analytics", "Priority compute", "Custom branding"],
    cta: "Upgrade",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Private AI infrastructure at planet-scale.",
    feats: ["Dedicated H100 clusters", "White-label deployments", "SLA & 24/7 support", "On-prem DePIN nodes", "Audit & compliance"],
    cta: "Contact sales",
  },
];

function PricingPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Pricing</div>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">
            Built for <span className="text-gradient-cyber">every scale</span>.
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">From solo builders to hyperscale agent fleets.</p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 ${
                t.featured ? "glass-strong shadow-neon border-primary/40" : "glass"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cyber px-3 py-1 text-xs font-mono">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 font-mono text-3xl text-gradient">{t.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.feats.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-accent">▸</span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={t.featured ? "hero" : "glass"} className="mt-8 w-full">
                <Link to="/create">{t.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
