import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { SolutionSection } from "@/components/site/SolutionSection";
import { MarketplacePreview } from "@/components/site/MarketplacePreview";
import { ComputeNetwork } from "@/components/site/ComputeNetwork";
import { SolanaSection } from "@/components/site/SolanaSection";
import { DeveloperSection } from "@/components/site/DeveloperSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tokenysx Agents — Infrastructure for the autonomous AI economy" },
      { name: "description", content: "Create, tokenize and monetize AI agents with decentralized GPU compute on Solana." },
      { property: "og:title", content: "Tokenysx Agents" },
      { property: "og:description", content: "The financial infrastructure of the autonomous AI economy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <MarketplacePreview />
      <ComputeNetwork />
      <SolanaSection />
      <DeveloperSection />
      <CTASection />
    </SiteShell>
  );
}
