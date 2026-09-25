import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { products } from "../data/products";

export default function Products() {
  useEffect(() => {
    document.title = "Products — Stonic";
  }, []);

  return (
    <>
      <Section className="pt-20 md:pt-28">
        <Container>
          <Reveal>
            <Eyebrow>Stonic's Products</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:text-5xl">
              How Stonic delivers on its infrastructure.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-lg text-[var(--color-text-muted)]">
              Each Stonic product applies the same underlying discipline --
              AI agents, automation, and real operational data -- to a
              specific industry's way of working.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-border)]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link
                  to={`/${p.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 hover:border-[var(--color-accent)]/50"
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-[var(--color-text)]">{p.name}</h2>
                    <Badge>{p.status === "live" ? "Live" : "In development"}</Badge>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)]">{p.tagline}</p>
                  <p className="mt-3 text-xs text-[var(--color-text-dim)]">{p.forWho}</p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {p.capabilities.slice(0, 4).map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]">
                        <Check size={13} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
                    Explore {p.name}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}

            {/* Placeholder card signaling more is coming, without inventing a product */}
            <Reveal delay={products.length * 100}>
              <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-dashed border-[var(--color-border-strong)] p-7">
                <div className="eyebrow mb-2">What's Next</div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Each new Stonic product applies the same infrastructure to a
                  new industry. What comes after Salesman is being shaped by
                  what we're learning from the businesses running on it now.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}