import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { pricingDisclosure, pricingPlans } from "@/lib/pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero */}
        <section className="px-4 py-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible plans for every marketing team</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            From bootstrapped startups to global enterprises, Grow Citable delivers the visibility, insights, and control you need to stand out in Answer Engines.
          </p>
          <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Public Pricing</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <p>
                Grow Citable Starter: <span className="font-semibold text-white">$99/month</span>
              </p>
              <p>
                Grow Citable Growth: <span className="font-semibold text-white">$399/month</span>
              </p>
              <p>{pricingDisclosure.taxes}</p>
              <p>{pricingDisclosure.selfServeBilling}</p>
              <p>{pricingDisclosure.enterpriseBilling}</p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-4 pb-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.slug}
                name={plan.headline}
                description={plan.description}
                price={plan.priceLabel}
                period={plan.periodLabel}
                features={plan.features}
                buttonText={plan.ctaLabel}
                buttonLink={plan.ctaHref}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="px-4 py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">The brands we empower</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-4 px-4 text-zinc-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-zinc-400 font-medium">Starter</th>
                    <th className="text-center py-4 px-4 text-zinc-400 font-medium">Growth</th>
                    <th className="text-center py-4 px-4 text-zinc-400 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <FeatureRow 
                    category="Answer Engine Insights"
                    description="Analyze how your brand and competitors appear in AI platforms"
                    starter="ChatGPT"
                    growth="ChatGPT, Perplexity, Google AI Overviews"
                    enterprise="ChatGPT, Perplexity, Google AI Mode, Google Gemini, Microsoft Copilot, Meta AI, Grok, DeepSeek, Anthropic Claude, Google AI Overviews"
                  />
                  <FeatureRow 
                    category="Responses Analyzed Per Month"
                    description=""
                    starter="50 unique prompts, 1,500 responses monthly"
                    growth="100 unique prompts, 9,000 responses monthly"
                    enterprise="Custom"
                  />
                  <FeatureRow 
                    category="Prompt Frequency"
                    description=""
                    starter="Daily"
                    growth="Daily"
                    enterprise="Daily"
                  />
                  <FeatureRow 
                    category="Languages"
                    description=""
                    starter="1"
                    growth="1"
                    enterprise="Custom"
                  />
                  <FeatureRow 
                    category="Regions"
                    description=""
                    starter="1"
                    growth="1"
                    enterprise="Custom"
                  />
                  <FeatureRow 
                    category="ChatGPT Shopping"
                    description=""
                    starter="No"
                    growth="No"
                    enterprise="Yes"
                  />
                  <FeatureRow 
                    category="Agents"
                    description="Build autonomous workers that drive AEO efforts"
                    starter="100 credits/month"
                    growth="400 credits/month"
                    enterprise="Custom"
                  />
                  <FeatureRow 
                    category="Grow Citable Sheets"
                    description="Run Agents at scale"
                    starter="No"
                    growth="Yes"
                    enterprise="Yes"
                  />
                  <FeatureRow 
                    category="Opportunities"
                    description=""
                    starter="None"
                    growth="4 /week"
                    enterprise="Custom"
                  />
                  <FeatureRow 
                    category="Agent Analytics"
                    description="Track AI-sourced traffic and attribution across your domains"
                    starter="Unlimited"
                    growth="Unlimited"
                    enterprise="Unlimited"
                  />
                  <FeatureRow 
                    category="Integrations"
                    description="Akamai, AWS, Cloudflare, Fastly, Google Analytics, Google Cloud Platform, Netlify, Vercel, Wordpress"
                    starter="Yes"
                    growth="Yes"
                    enterprise="Yes"
                  />
                  <FeatureRow 
                    category="Prompt Volumes"
                    description="See what users are prompting AI Answer Engines"
                    starter="None"
                    growth="Yes"
                    enterprise="Custom"
                  />
                  <FeatureRow 
                    category="Relevant keywords"
                    description=""
                    starter="None"
                    growth="Yes"
                    enterprise="Yes"
                  />
                  <FeatureRow 
                    category="Data History"
                    description="Power your reporting and workflows"
                    starter="All time"
                    growth="All time"
                    enterprise="All time"
                  />
                  <FeatureRow 
                    category="Exports"
                    description=""
                    starter="None"
                    growth="CSV, JSON"
                    enterprise="CSV, JSON"
                  />
                  <FeatureRow 
                    category="API"
                    description=""
                    starter="No"
                    growth="No"
                    enterprise="Yes"
                  />
                  <FeatureRow 
                    category="Seats"
                    description="Services for your team"
                    starter="1"
                    growth="3"
                    enterprise="Custom"
                  />
                  <FeatureRow 
                    category="Support"
                    description=""
                    starter="Email"
                    growth="Email"
                    enterprise="Email, Dedicated Slack, Dedicated Specialist with 24 hour SLA"
                  />
                  <FeatureRow 
                    category="SSO"
                    description=""
                    starter="No"
                    growth="No"
                    enterprise="Yes"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions</h2>
          
          <div className="space-y-6">
            <FAQItem
              question="How does Grow Citable measure AI visibility?"
              answer="Grow Citable runs structured prompts across AI platforms daily, analyzing where and how your brand appears in responses, tracking citations, sentiment, ranking, and competitive presence."
            />
            <FAQItem
              question="Can I customize the prompts Grow Citable runs?"
              answer="Yes. While we start you off with a recommended prompt set based on your industry, you can edit, disable, or add your own to tailor visibility tracking to your brand strategy."
            />
            <FAQItem
              question="What happens if I exceed my prompt limit?"
              answer="More prompts mean more accurate insights. We'll notify you as you approach your limit and help you explore the best expansion options for your needs."
            />
            <FAQItem
              question="Should I use Lite or Enterprise?"
              answer="If you have more than 3 people on your team, you are better suited for a custom enterprise plan tailored to your needs. The enterprise plan will allow you to track more prompts, build more content agents, and provide the support needed for broader team adoption."
            />
            <FAQItem
              question="How long does setup take?"
              answer="Instant."
            />
            <FAQItem
              question="How does Grow Citable Agents pricing work?"
              answer="Grow Citable Agents are priced on a credit-based model. Credits are consumed each time an Agent runs, and packages are available at various tiers to match your usage needs. The self-serve Starter plan comes with 100 credits per month. The self-serve Growth plan comes with 400 credits per month. Additional credit thresholds require an Enterprise package."
            />
            <FAQItem
              question="What are credits?"
              answer="Credits are the unit of measurement for Agent usage. Each time an Agent runs, it consumes credits relative to its complexity. Simpler agents with fewer steps use fewer credits, while more complex, multi-step agents use more."
            />
            <FAQItem
              question="How should I estimate the number of credits I need?"
              answer="The number of credits you'll need depends on the types of agents you're running, how complex they are, and how frequently you run them. Your account team can help you estimate based on your specific use cases and content goals."
            />
            <FAQItem
              question="What happens if I go over my credit allotment?"
              answer="You have options. Depending on your preference, your account can be configured to either allow continued usage with overage billing or pause usage when your allotment is reached."
            />
            <FAQItem
              question="How can I track my credit usage?"
              answer="You'll have full visibility into your usage. Before running an Agent, the platform will display an estimated credit cost. After a run, you'll see the actual credits consumed reflected in your balance."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function PricingCard({ 
  name, 
  description, 
  price, 
  period, 
  features, 
  buttonText, 
  buttonLink,
  highlighted = false 
}: { 
  name: string, 
  description: string, 
  price: string, 
  period: string, 
  features: { text: string, included: boolean }[], 
  buttonText: string, 
  buttonLink: string,
  highlighted?: boolean 
}) {
  return (
    <div className={`border rounded-2xl p-8 flex flex-col ${highlighted ? 'border-white bg-zinc-900' : 'border-zinc-800 bg-zinc-900/50'}`}>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-zinc-400 mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-zinc-400 ml-1">{period}</span>}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" />
            )}
            <span className={`text-sm ${feature.included ? 'text-zinc-300' : 'text-zinc-600'}`}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <Link 
        href={buttonLink}
        className={`block w-full text-center py-3 rounded-full font-medium transition-colors ${
          highlighted 
            ? 'bg-white text-black hover:bg-zinc-200' 
            : 'bg-zinc-800 text-white hover:bg-zinc-700'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
}

function FeatureRow({ 
  category, 
  description, 
  starter, 
  growth, 
  enterprise 
}: { 
  category: string, 
  description: string, 
  starter: string, 
  growth: string, 
  enterprise: string 
}) {
  return (
    <>
      <tr className="border-b border-zinc-800 bg-zinc-900/30">
        <td className="py-4 px-4">
          <p className="font-medium text-white">{category}</p>
          {description && <p className="text-sm text-zinc-500 mt-1">{description}</p>}
        </td>
        <td className="py-4 px-4 text-center text-zinc-400 text-sm">{starter}</td>
        <td className="py-4 px-4 text-center text-zinc-400 text-sm">{growth}</td>
        <td className="py-4 px-4 text-center text-zinc-400 text-sm">{enterprise}</td>
      </tr>
    </>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="border-b border-zinc-800 pb-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}
