import { ArrowRight, Building, Handshake, TrendingUp, Users } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { engagePaths } from "../data/company";

const icons = [Building, Handshake, TrendingUp, Users];

export function Engage() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Work With Stonic</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Different ways to engage with Stonic.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {engagePaths.map((path, i) => {
            const Icon = icons[i] ?? Building;
            return (
              <Reveal key={path.audience} delay={140 + i * 80}>
                <a
                  href="/#contact"
                  className="card-hover group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/50"
                >
                  <Icon size={20} className="text-[var(--color-accent)]" />
                  <div className="eyebrow mt-4 mb-1">{path.audience}</div>
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {path.headline}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {path.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
                    {path.cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}