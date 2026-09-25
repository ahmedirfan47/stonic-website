/**
 * Company-level content -- the facts, beliefs, and narrative that describe
 * Stonic itself, independent of any single product. Product-specific content
 * belongs in products.ts, not here.
 */

export const mission =
  "To help businesses build, automate, and grow -- combining technology, AI, and business strategy to solve the operational and growth challenges holding them back, whatever industry they're in.";

export const vision =
  "A future where any business, in any industry, has access to the kind of technology and strategic thinking usually reserved for the largest companies -- proven first with the operationally complex businesses of the GCC, and extending globally.";

export interface ProblemPoint {
  title: string;
  body: string;
}

export const currentProblems: ProblemPoint[] = [
  {
    title: "Operations live in conversations, not systems",
    body: "Orders, pricing, stock questions, and delivery coordination happen across WhatsApp threads and phone calls -- information that is real, but nowhere a business can see, search, or rely on.",
  },
  {
    title: "The business depends on specific people remembering things",
    body: "Who owes what, what was promised, what's in stock, who's covering which delivery today -- this knowledge sits in individual employees' heads, not in any system the business owns.",
  },
  {
    title: "Growth multiplies the chaos instead of resolving it",
    body: "Adding more staff, more customers, or more locations doesn't make a manual operation more organized -- it makes the same coordination problems larger and more expensive to run.",
  },
];

export interface SoftwareGapPoint {
  title: string;
  body: string;
}

export const whyExistingSoftwareFails: SoftwareGapPoint[] = [
  {
    title: "Generic software asks businesses to change how they work",
    body: "Most business software requires staff and customers to adopt a new portal or app. Operationally complex businesses in the GCC already have a working interface -- WhatsApp -- and software that ignores that fact goes unused.",
  },
  {
    title: "Dashboards report on the business after the fact",
    body: "Traditional systems record what already happened. They don't take the order, don't check the real stock, and don't decide who should deliver it -- a person still has to do all of that manually, on top of using the software.",
  },
  {
    title: "AI chatbots without real operational data behind them",
    body: "A conversational layer with no connection to real pricing, real inventory, or real order status is a demo, not a business system -- it can talk convincingly and still be wrong about the one thing that matters.",
  },
];

export interface Belief {
  title: string;
  body: string;
}

/** Stonic's operating philosophy -- what the company believes, independent of
 * any specific product's feature set or industry. */
export const beliefs: Belief[] = [
  {
    title: "Strategy comes before software",
    body: "Understanding a business's real constraints and growth opportunities has to come first. Stonic works as a strategic partner before it works as a software builder -- the technology follows from that understanding, not the other way around.",
  },
  {
    title: "Software should run the operation, not just report on it",
    body: "Stonic builds systems that take the order, check the real stock, assign the real driver -- not systems that wait for a human to do the work and then log it.",
  },
  {
    title: "AI is infrastructure, not a feature",
    body: "AI belongs underneath the business, handling conversation and judgment -- never as a decoration bolted onto software that already existed.",
  },
  {
    title: "The database owns every fact. The model never guesses.",
    body: "A language model can converse, reason, and decide what to look up. It should never be the source of a price, a stock count, or an order status -- that discipline is what makes an AI system trustworthy enough to run a real business.",
  },
];

export interface ProcessStep {
  label: string;
}

/** The consistent process Stonic applies to any business, regardless of
 * industry -- shown as a compact strip alongside the beliefs above. */
export const workProcess: ProcessStep[] = [
  { label: "Understand the business" },
  { label: "Identify the opportunity" },
  { label: "Build and automate" },
  { label: "Scale what works" },
];

export interface TechPillar {
  title: string;
  body: string;
}

export const technologyPillars: TechPillar[] = [
  {
    title: "AI agents",
    body: "Conversational systems that understand what a person wants and decide what to do -- take an order, answer a question, flag an exception -- by calling real tools against real business data, never from memory.",
  },
  {
    title: "Automation",
    body: "The routine parts of an operation -- confirming an order, assigning a driver, queuing a delivery slip -- run without a person doing them by hand, freeing staff for the exceptions that actually need judgment.",
  },
  {
    title: "Operational intelligence",
    body: "Every action -- an order placed, a status changed, a delivery completed -- is recorded as real, structured data, not lost in a chat thread. That data is what lets a system reason about the business at all.",
  },
  {
    title: "Business data as the source of truth",
    body: "Pricing, inventory, and order history are held in versioned, auditable records. Every number a system reports or an AI agent states can be traced back to exactly where it came from.",
  },
];

export interface IndustryFocus {
  name: string;
  status: "current" | "next";
  body: string;
}

export const industriesIntro =
  "Stonic's approach isn't tied to one sector. If a business has real operational complexity or real growth ambition, the same process -- understand, identify, build, scale -- applies. These are simply where we've proven it first.";

export const industries: IndustryFocus[] = [
  {
    name: "Distribution & Wholesale",
    status: "current",
    body: "Businesses selling a defined catalog to repeat B2B customers, coordinating delivery across a fleet -- proven with Salesman, our first product.",
  },
  {
    name: "FMCG",
    status: "next",
    body: "Fast-moving consumer goods operations with the same order-to-delivery complexity, at higher volume and tighter margins.",
  },
  {
    name: "Retail",
    status: "next",
    body: "Multi-branch and multi-location retail operations that need the same real-time visibility into stock, orders, and fulfillment.",
  },
  {
    name: "Logistics",
    status: "next",
    body: "Businesses whose core operation is moving goods -- where routing, assignment, and delivery accountability are the entire product.",
  },
];

export const whyGccMena: string[] = [
  "WhatsApp is the working business interface across the region -- not a habit to break, but the front door Stonic builds software behind.",
  "Distribution and wholesale form a large, operationally complex layer underneath nearly every retail and food business in the region, and it remains largely manual today.",
  "The region's businesses are growing fast enough that manual coordination is becoming the actual constraint on growth -- the timing for real operational software is now, not later.",
];

export interface EngagePath {
  audience: string;
  headline: string;
  body: string;
  cta: string;
}

export const engagePaths: EngagePath[] = [
  {
    audience: "Businesses",
    headline: "Ready to build, automate, or grow",
    body: "Whether you need a specific system like Salesman or a broader technology and growth partner, talk to Stonic about what's actually holding your business back -- whatever industry you're in.",
    cta: "Talk to Stonic",
  },
  {
    audience: "Partners",
    headline: "Distributing or reselling into the GCC",
    body: "If you work with businesses in distribution, wholesale, or retail across the region, Stonic is open to partnerships that bring intelligent operations to more businesses.",
    cta: "Discuss a partnership",
  },
  {
    audience: "Investors",
    headline: "Backing the next generation of GCC business infrastructure",
    body: "Stonic is early -- built and proven with one real product. If that trajectory is interesting to you, reach out directly.",
    cta: "Get in touch",
  },
  {
    audience: "Talent",
    headline: "Building AI-operated systems, not AI demos",
    body: "Stonic is looking for people who want to build software that actually runs a business, not software that just talks about one.",
    cta: "Introduce yourself",
  },
];

export const storyParagraphs: string[] = [
  "Stonic started with a direct observation, not a market report: a wholesale business in Saudi Arabia was running entirely on WhatsApp messages, a price list in someone's memory, and a driver who knew his deliveries by heart. It worked -- until it didn't scale, until stock went untracked, until nobody could say for certain what had been promised to whom.",
  "That specific problem became Salesman: a system that keeps the conversation businesses already have with their customers, and puts real software behind it -- real prices, real stock, real delivery assignment, a real audit trail.",
  "Stonic exists to generalize that same discipline -- AI as infrastructure, data as the source of truth, software that runs the operation instead of reporting on it -- across any business willing to combine real strategy with real technology, starting in the GCC and extending globally.",
];