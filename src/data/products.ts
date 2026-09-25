export interface Product {
  slug: string;
  name: string;
  status: "live" | "in-development";
  tagline: string;
  description: string;
  industry: string;
  capabilities: string[];
  /** Shown on the /products index -- one sentence on who it's built for. */
  forWho: string;
}

/**
 * Product registry. This is how Stonic's product line is presented --
 * separate from company-level content in company.ts. Adding a second
 * product means adding one entry here (and, if it deserves a full page,
 * one route in App.tsx); /products and the homepage both read from this
 * list automatically.
 */
export const products: Product[] = [
  {
    slug: "salesman",
    name: "Salesman",
    status: "live",
    tagline: "The AI-operated order and delivery platform for wholesalers",
    description:
      "Salesman replaces manual, WhatsApp-and-spreadsheet order-taking with software that quotes real prices, tracks real stock, and coordinates real deliveries -- built for wholesale and distribution businesses in the GCC.",
    industry: "Wholesale & Distribution",
    forWho: "Wholesalers and distributors coordinating orders, stock, and delivery across a team.",
    capabilities: [
      "AI ordering agent over WhatsApp -- text and voice",
      "Real-time pricing and inventory, never guessed by the AI",
      "Role-based operations: sales, dispatch, delivery, warehouse",
      "Delivery zones with automatic driver assignment",
      "Full audit trail on every order and status change",
    ],
  },
];

export const flagshipProduct = products[0];