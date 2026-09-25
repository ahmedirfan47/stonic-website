import { Bot, Cog, LineChart, Database } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { technologyPillars } from "../data/company";

const icons = [Bot, Cog, LineChart, Database];

export function Technology() {
  return (
    <Section id="technology" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Technology</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Four pillars behind every Stonic system.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[var(--color-text-muted)]">
            AI is the interface. Automation is the execution. Data is the
            memory. Together, they're what lets software run an operation
            instead of just describing one.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {technologyPillars.map((pillar, i) => {
            const Icon = icons[i] ?? Bot;
            return (
              <Reveal key={pillar.title} delay={200 + i * 90}>
                <div className="group border-l-2 border-[var(--color-border-strong)] pl-6 transition-colors duration-200 hover:border-[var(--color-accent)]">
                  <Icon size={20} className="text-[var(--color-accent)] transition-transform duration-200 group-hover:scale-110" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}