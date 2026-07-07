export type PricingFeature = {
  text: string;
  included: boolean;
};

export type PricingPlan = {
  slug: "starter" | "growth" | "enterprise";
  name: string;
  headline: string;
  description: string;
  priceLabel: string;
  periodLabel: string;
  monthlyPriceUsd: number | null;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  features: PricingFeature[];
};

export const pricingDisclosure = {
  taxes: "Taxes may apply and will be calculated at checkout.",
  selfServeBilling:
    "Starter and Growth are billed monthly at the published rate.",
  enterpriseBilling:
    "Enterprise pricing is custom and is quoted before checkout is enabled.",
};

export const pricingPlans: PricingPlan[] = [
  {
    slug: "starter",
    name: "Starter",
    headline: "Grow Citable Starter",
    description:
      "For small companies who want to monitor and understand their brand visibility online.",
    priceLabel: "$99",
    periodLabel: "/month",
    monthlyPriceUsd: 99,
    ctaLabel: "Choose Starter",
    ctaHref: "/checkout?plan=starter",
    features: [
      { text: "ChatGPT tracking only", included: true },
      { text: "50 prompts tracked", included: true },
      { text: "1,500 responses monthly", included: true },
      { text: "100 credits/month", included: true },
      { text: "Email support", included: true },
      { text: "Perplexity and Google AI Overviews", included: false },
      { text: "400 credits/month", included: false },
      { text: "Prompt Volumes", included: false },
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    headline: "Grow Citable Growth",
    description:
      "For growing companies that need broader Answer Engine coverage and more automation.",
    priceLabel: "$399",
    periodLabel: "/month",
    monthlyPriceUsd: 399,
    ctaLabel: "Choose Growth",
    ctaHref: "/checkout?plan=growth",
    highlighted: true,
    features: [
      { text: "ChatGPT, Perplexity, and Google AI Overviews", included: true },
      { text: "100 prompts tracked", included: true },
      { text: "9,000 responses monthly", included: true },
      { text: "400 credits/month", included: true },
      { text: "Agent Analytics", included: true },
      { text: "Prompt Volumes", included: true },
      { text: "3 seats", included: true },
      { text: "Email support", included: true },
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    headline: "Grow Citable Enterprise",
    description:
      "For large companies and agencies building tailored Answer Engine optimization programs.",
    priceLabel: "Custom",
    periodLabel: "",
    monthlyPriceUsd: null,
    ctaLabel: "Contact Sales",
    ctaHref: "/contact?plan=enterprise",
    features: [
      { text: "Up to 10 Answer Engines tracked", included: true },
      { text: "Multiple companies tracked", included: true },
      { text: "Tailored prompt tracking plan", included: true },
      { text: "Custom credit allocation", included: true },
      { text: "Dedicated Slack support", included: true },
      { text: "SSO/SAML and API access", included: true },
      { text: "24 hour SLA support", included: true },
    ],
  },
];

export const selfServePlans = pricingPlans.filter(
  (plan) => plan.monthlyPriceUsd !== null
);

export function getPlanBySlug(planSlug?: string) {
  return pricingPlans.find((plan) => plan.slug === planSlug);
}
