import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  getPlanBySlug,
  pricingDisclosure,
  selfServePlans,
} from "@/lib/pricing";

type CheckoutPageProps = {
  searchParams: Promise<{
    plan?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const requestedPlan = getPlanBySlug(params.plan);
  const selectedPlan =
    requestedPlan && requestedPlan.monthlyPriceUsd !== null
      ? requestedPlan
      : selfServePlans[0];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Checkout Summary</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Review the exact pricing and billing details for your Grow Citable subscription before checkout.
          </p>
          
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="border-b border-zinc-800 pb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Selected Plan
                </p>
                <h2 className="mt-3 text-3xl font-bold">{selectedPlan.headline}</h2>
                <p className="mt-3 text-zinc-400">{selectedPlan.description}</p>
              </div>
              <div className="border-b border-zinc-800 py-6">
                <h3 className="text-xl font-semibold mb-4">What&apos;s Included</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  {selectedPlan.features
                    .filter((feature) => feature.included)
                    .map((feature) => (
                      <li key={feature.text}>• {feature.text}</li>
                    ))}
                </ul>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Choose a Different Plan</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {selfServePlans.map((plan) => (
                    <Link
                      key={plan.slug}
                      href={`/checkout?plan=${plan.slug}`}
                      className={`rounded-xl border p-4 transition-colors ${
                        plan.slug === selectedPlan.slug
                          ? "border-white bg-zinc-800"
                          : "border-zinc-700 bg-zinc-950 hover:border-zinc-500"
                      }`}
                    >
                      <p className="font-semibold">{plan.headline}</p>
                      <p className="mt-2 text-2xl font-bold">
                        {plan.priceLabel}
                        <span className="ml-1 text-sm font-normal text-zinc-400">
                          {plan.periodLabel}
                        </span>
                      </p>
                      <p className="mt-2 text-sm text-zinc-500">
                        {pricingDisclosure.taxes}
                      </p>
                      <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 h-fit">
              <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">Product</span>
                  <span className="text-right font-medium">{selectedPlan.headline}</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">Price</span>
                  <span className="text-right font-medium">
                    {selectedPlan.priceLabel}
                    {selectedPlan.periodLabel}
                  </span>
                </div>
                <div className="border-b border-zinc-800 pb-4 text-sm text-zinc-500">
                  {pricingDisclosure.taxes}
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">Billing cadence</span>
                  <span className="text-right font-medium">Monthly recurring subscription</span>
                </div>
                <div className="rounded-xl bg-zinc-950 p-4 text-zinc-300">
                  <p>{pricingDisclosure.selfServeBilling}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/pricing"
                  className="block w-full rounded-full bg-white px-6 py-3 text-center font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  Back to Pricing
                </Link>
                <Link
                  href="/terms"
                  className="block w-full rounded-full border border-zinc-700 px-6 py-3 text-center font-medium text-white transition-colors hover:border-zinc-500"
                >
                  Review Terms
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
