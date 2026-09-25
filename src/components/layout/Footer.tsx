import { Link } from "react-router-dom";
import { navLinks } from "../../data/nav";
import { products } from "../../data/products";
import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-bold tracking-tight text-[var(--color-text)]">
              STONIC
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-text-dim)]">
              A technology company building AI-operated business
              infrastructure, starting in the GCC.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">Company</div>
            <ul className="space-y-2.5">
              {navLinks
                .filter((l) => l.href.startsWith("/#"))
                .map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Products</div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  All products
                </Link>
              </li>
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/${p.slug}`}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Contact</div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  Talk to Stonic
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-dim)] md:flex-row md:items-center md:justify-between">
          <span>© {year} Stonic. All rights reserved.</span>
          <span>Building for the GCC, with a global vision.</span>
        </div>
      </Container>
    </footer>
  );
}