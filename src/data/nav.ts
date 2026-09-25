export interface NavLink {
  label: string;
  href: string;
}

/** Top nav -- company-first ordering. Anchors point at homepage sections;
 * "Products" is a real route since it's meant to grow into a full index. */
export const navLinks: NavLink[] = [
  { label: "Problem", href: "/#problem" },
  { label: "Technology", href: "/#technology" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/#industries" },
];

export const ctaLabel = "Talk to Stonic";