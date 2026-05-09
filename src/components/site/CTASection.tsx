import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-16 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-cyber opacity-20" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-gradient-cyber opacity-30 blur-3xl" />
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            The autonomous AI economy{" "}
            <span className="text-gradient-cyber">is being built right now.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg">
            Be among the first to mint, monetize and own a piece of intelligence itself.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/create">Launch your Agent</Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/docs">Read the docs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
