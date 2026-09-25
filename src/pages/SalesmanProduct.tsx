import { useEffect } from "react";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { flagshipProduct } from "../data/products";

const workflow = [
  {
    title: "A customer messages on WhatsApp",
    body: "Text or voice, in the way they already order today -- no app to install, no portal to learn.",
  },
  {
    title: "The AI agent resolves the order",
    body: "It looks up real prices and real stock via tool calls to the database -- it never invents a number.",
  },
  {
    title: "Stock and pricing stay accurate",
    body: "Every price change is versioned, every stock movement is an immutable ledger entry -- a full history, not just a current number.",
  },
  {
    title: "Orders move through a real lifecycle",
    body: "Confirmed, preparing, dispatched, delivered, completed -- each step recorded with who did it and when.",
  },
  {
    title: "Delivery is assigned automatically",
    body: "Customers carry a delivery zone; drivers cover zones; the system assigns the best-loaded driver, with a dispatcher supervising exceptions.",
  },
  {
    title: "Every role sees only what they need",
    body: "Salesmen take orders, dispatchers assign, drivers deliver, admins configure -- one system, different views per job.",
  },
];

export default function SalesmanProduct() {
  const p = flagshipProduct;

  useEffect(() => {
    document.title = "Salesman — Stonic";
  }, []);

  return (
    <>
      <Section className="pt-20 md:pt-28">
        <Container>
          <Reveal>
            <Link
              to="/products"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
            >
              <ArrowLeft size={14} />
              A Stonic product
            </Link>
          </Reveal>
          <Reveal delay={40}>
            <Badge>{p.status === "live" ? "Live product" : "In development"}</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:text-5xl">
              {p.name}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-lg text-[var(--color-text-muted)]">
              {p.tagline}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-dim)]">
              {p.description}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8">
              <Button as="a" href="/#contact">
                Talk to Stonic about Salesman
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-border)]">
        <Container>
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
              Built for {p.industry.toLowerCase()}.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {p.capabilities.map((cap, i) => (
              <Reveal key={cap} delay={140 + i * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <Check size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span className="text-sm text-[var(--color-text-muted)]">{cap}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-border)]">
        <Container>
          <Reveal>
            <Eyebrow>How It Works</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
              From a WhatsApp message to a completed delivery.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
            {workflow.map((step, i) => (
              <Reveal key={step.title} delay={140 + i * 70}>
                <div className="h-full bg-[var(--color-bg)] p-6">
                  <div className="font-mono text-xs text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-[var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-border)]">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text)] md:text-3xl">
              Running a wholesale or distribution business?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-[var(--color-text-muted)]">
              See how Salesman fits your operation.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex justify-center">
              <Button as="a" href="/#contact">
                Talk to Stonic
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}