import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { pricingDisclosure, pricingPlans } from "@/lib/pricing";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get Started with Grow Citable</h1>
          <p className="text-zinc-400 mb-12 text-center text-lg">
            Choose the plan that&apos;s right for your business
          </p>
          <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-sm text-zinc-300">
            <p className="font-semibold text-white">Billing details</p>
            <p className="mt-3">{pricingDisclosure.taxes}</p>
            <p className="mt-2">{pricingDisclosure.selfServeBilling}</p>
            <p className="mt-2">{pricingDisclosure.enterpriseBilling}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.slug}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-zinc-900 border border-white"
                    : "bg-zinc-900 border border-zinc-800"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{plan.headline}</h3>
                <p className="text-sm text-zinc-400 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold mb-4">
                  {plan.priceLabel}
                  {plan.periodLabel && (
                    <span className="text-sm text-zinc-400">{plan.periodLabel}</span>
                  )}
                </p>
                {plan.monthlyPriceUsd !== null && (
                  <p className="-mt-2 mb-4 text-sm text-zinc-500">
                    {pricingDisclosure.taxes}
                  </p>
                )}
                <ul className="space-y-3 mb-6 text-sm text-zinc-300">
                  {plan.features
                    .filter((feature) => feature.included)
                    .slice(0, 4)
                    .map((feature) => (
                      <li key={feature.text}>• {feature.text}</li>
                    ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`block w-full text-center py-3 font-medium rounded-full transition-colors ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
