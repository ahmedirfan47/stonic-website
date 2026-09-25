import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { flagshipProduct } from "../data/products";

export function ProductsIntro() {
  const p = flagshipProduct;

  return (
    <Section id="products" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Stonic's Products</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            The first application of Stonic's infrastructure.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <Reveal delay={140}>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
                  {p.name}
                </h3>
                <Badge>{p.status === "live" ? "Live" : "In development"}</Badge>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-[var(--color-text-muted)]">{p.tagline}</p>
            </Reveal>
            <Reveal delay={260}>
              <Link
                to={`/${p.slug}`}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                Explore {p.name}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={220} className="w-full md:max-w-sm">
            <div className="card-hover rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="eyebrow mb-4">{p.industry}</div>
              <ul className="space-y-3">
                {p.capabilities.slice(0, 3).map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <Link
            to="/products"
            className="group mt-10 inline-flex items-center gap-2 text-sm text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
          >
            See all Stonic products
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}