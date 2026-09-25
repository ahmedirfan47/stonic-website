import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";

/**
 * Contact form. Currently client-only (no backend wired) -- submitting sets
 * `sent` to true and logs the payload. To connect a real backend later,
 * replace the body of handleSubmit with a fetch()/API call and keep the
 * same field shape.
 */
export function ContactCTA() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO(backend): send `form` to a real endpoint / email service.
    console.log("Stonic contact form submission:", form);
    setSent(true);
  }

  const inputClasses =
    "w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] outline-none transition-colors focus:border-[var(--color-accent)]";

  return (
    <Section id="contact" className="border-t border-[var(--color-border)]">
      <Container>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Talk to Stonic</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
                Tell us about your operation.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-[var(--color-text-muted)]">
                Whether you're running a business, exploring a partnership,
                considering an investment, or want to help build what's
                next -- we read every message and respond directly.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            {sent ? (
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent-dim)] p-6">
                <CheckCircle2 size={22} className="shrink-0 text-[var(--color-accent)]" />
                <p className="text-sm text-[var(--color-text)]">
                  Thanks -- we've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange("name")}
                    className={inputClasses}
                  />
                  <input
                    placeholder="Company"
                    value={form.company}
                    onChange={handleChange("company")}
                    className={inputClasses}
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={inputClasses}
                />
                <textarea
                  required
                  placeholder="What are you looking to solve?"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  className={inputClasses}
                />
                <Button type="submit" className="mt-2 w-fit">
                  Send message
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}