import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

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
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-3xl font-bold mb-4">$99<span className="text-sm text-zinc-400">/month</span></p>
              <ul className="space-y-3 mb-6 text-sm text-zinc-300">
                <li>• ChatGPT tracking only</li>
                <li>• 50 prompts tracked</li>
                <li>• Email support</li>
              </ul>
              <Link 
                href="/contact?plan=starter"
                className="block w-full text-center py-3 bg-zinc-800 text-white font-medium rounded-full hover:bg-zinc-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-zinc-900 border border-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <p className="text-3xl font-bold mb-4">$399<span className="text-sm text-zinc-400">/month</span></p>
              <ul className="space-y-3 mb-6 text-sm text-zinc-300">
                <li>• 3 Answer Engines tracked</li>
                <li>• 100 prompts tracked</li>
                <li>• 400 credits/month</li>
                <li>• Agent Analytics</li>
              </ul>
              <Link 
                href="/contact?plan=growth"
                className="block w-full text-center py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="space-y-3 mb-6 text-sm text-zinc-300">
                <li>• Up to 10 Answer Engines</li>
                <li>• Multiple companies</li>
                <li>• Dedicated support</li>
                <li>• API access</li>
              </ul>
              <Link 
                href="/contact?plan=enterprise"
                className="block w-full text-center py-3 bg-zinc-800 text-white font-medium rounded-full hover:bg-zinc-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
