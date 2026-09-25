import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { storyParagraphs } from "../data/company";

export function Story() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container className="max-w-2xl">
        <Reveal>
          <Eyebrow>The Story So Far</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Why Stonic exists.
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5">
          {storyParagraphs.map((p, i) => (
            <Reveal key={i} delay={140 + i * 90}>
              <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}