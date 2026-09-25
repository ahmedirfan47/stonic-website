import { ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Reveal } from "../components/ui/Reveal";
import { SignalGraphic } from "../components/ui/SignalGraphic";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <Reveal>
            <Badge pulse>Technology · AI · Growth Strategy</Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-text)] md:text-6xl">
              Transforming Business Through AI Technology
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-muted)]">
              Stonic combines technology, AI and business strategy to help
              businesses build, automate and grow -- in any industry.
              Salesman, our first product, does this for wholesale
              distribution across the GCC.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="/#contact">
                Talk to Stonic
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button as="a" href="/products" variant="ghost">
                Explore our products
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hidden md:block">
          <div className="float-slow">
            <SignalGraphic className="w-full max-w-md text-[var(--color-accent)]" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}