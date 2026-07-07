import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Check, Zap, BarChart3, Bot, Target, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Marketing agents to win in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
                Zero Click 2026
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Reach millions of consumers who are using AI to discover new products and brands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                Get a Demo
              </Link>
              <Link 
                href="/get-started"
                className="px-8 py-3 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Agent Demo */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-zinc-400">AEO-Optimized FAQ Generator</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-400">Start</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                    <Check className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-400">Inputs: Web Page Scrape</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                    <Target className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-400">Output: Determine Core Search Query</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-400">Output: Perplexity FAQ Research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="px-4 py-16 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-zinc-400 mb-8">Used by the best marketers in the world</p>
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-12">
              Over 100 million people search with AI every day. Brands that aren't recommended get left behind. Grow Citable ensures yours isn't one of them.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scale your presence, not your workload</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Grow Citable is the full stack marketing platform for the marketer of the future. Understand, analyze, build, and measure with the Grow Citable platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BarChart3}
              title="Prompt Volumes"
              description="See what millions of people ask AI, and align strategy with demand."
              link="/features/prompt-volumes"
            />
            <FeatureCard
              icon={Zap}
              title="Answer Engine Insights"
              description="See how AI represents your brand in every conversation."
              link="/features/answer-engine-insights"
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
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-4 py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-zinc-300 mb-6">
                "We chose Grow Citable because it seemed like the deepest and most complete tool in the market. We tried the others, and Grow Citable was immediately the obvious choice"
              </p>
              <div>
                <p className="font-semibold">George Bonaci, VP of Growth & Demand</p>
                <Link href="/customers/ramp-case-study" className="text-sm text-zinc-400 hover:text-white">
                  Read case study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AEO Report CTA */}
        <section className="px-4 py-20 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get your free AEO Report today</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Discover how your brand performs on answer engines — and uncover the opportunities to outpace the competition
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-zinc-950 rounded-lg p-4">
                <p className="text-white font-semibold">AI Visibility</p>
              </div>
              <div className="bg-zinc-950 rounded-lg p-4">
                <p className="text-white font-semibold">Source Citations</p>
              </div>
              <div className="bg-zinc-950 rounded-lg p-4">
                <p className="text-white font-semibold">Brand Sentiment</p>
              </div>
              <div className="bg-zinc-950 rounded-lg p-4">
                <p className="text-white font-semibold">Content AEO</p>
              </div>
            </div>
            <Link 
              href="/aeo-report"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get your free report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Solutions */}
        <section className="px-4 py-20 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Agents for every marketing channel</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SolutionCard
              title="AEO & SEO"
              description="Increase AI Search visibility"
              link="/solutions/aeo-teams"
            />
            <SolutionCard
              title="Content & Demand"
              description="Drive human and bot traffic"
              link="/solutions/content-teams"
            />
            <SolutionCard
              title="PR & Communications"
              description="Shape AI conversations"
              link="/solutions/pr-teams"
            />
          </div>
        </section>

        {/* Agent Demo CTA */}
        <section className="px-4 py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Try a Grow Citable Agent</h2>
            <p className="text-zinc-400 mb-8">
              Use of our most popular Agents to generate AEO optimized FAQs for your landing pages
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="font-semibold mb-2">Demand Gen Agent</p>
                <p className="text-sm text-zinc-400">Generate demand-focused content</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="font-semibold mb-2">Brand Agent</p>
                <p className="text-sm text-zinc-400">Build brand presence</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="font-semibold mb-2">Content Agent</p>
                <p className="text-sm text-zinc-400">Create optimized content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-20 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get your brand mentioned by AI</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Reach millions of consumers who are using AI to discover new products and brands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get a Demo
            </Link>
            <Link 
              href="/get-started"
              className="px-8 py-3 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, link }: { icon: any, title: string, description: string, link: string }) {
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

function SolutionCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <Link href={link} className="block group">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors h-full">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
        <p className="text-sm text-zinc-500 mt-4 group-hover:text-zinc-400">Learn more →</p>
      </div>
    </Link>
  );
}
