import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, BarChart3, Bot, Target, TrendingUp, ShoppingBag } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Features</h1>
          <p className="text-zinc-400 mb-12 text-center text-lg max-w-2xl mx-auto">
            Everything you need to optimize your brand&apos;s visibility in AI search
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Answer Engine Insights"
              description="See how AI represents your brand in every conversation across ChatGPT, Perplexity, Google AI Overviews, and more."
              link="/features/answer-engine-insights"
            />
            <FeatureCard
              icon={BarChart3}
              title="Prompt Volumes"
              description="See what millions of people ask AI, and align strategy with demand."
              link="/features/prompt-volumes"
            />
            <FeatureCard
              icon={Bot}
              title="Agents"
              description="Autonomous workers for every function of your marketing team."
              link="/features/agents"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Agent Analytics"
              description="Track how your site is interpreted and crawled by ChatGPT, Gemini, Claude, Perplexity, and more."
              link="/features/agent-analytics"
            />
            <FeatureCard
              icon={Target}
              title="Aim"
              description="Find the highest-impact work for your brand, every week."
              link="/features/aim"
            />
            <FeatureCard
              icon={ShoppingBag}
              title="Shopping"
              description="Track your products in AI shopping recommendations."
              link="/features/shopping"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, link }: { icon: React.ComponentType<{ className?: string }>, title: string, description: string, link: string }) {
  return (
    <Link href={link} className="block group">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors h-full">
        <Icon className="w-8 h-8 text-zinc-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
        <p className="text-sm text-zinc-500 mt-4 group-hover:text-zinc-400">Learn more →</p>
      </div>
    </Link>
  );
}
