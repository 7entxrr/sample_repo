import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow Citable Enterprise</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Built for enterprise brands with a global footprint. Our platform can support multiple markets and languages.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Enterprise Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Up to 10 Answer Engines tracked</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Multiple companies tracked</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Tailored prompt tracking plan</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>Dedicated Slack support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>SSO/SAML + SOC2 compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <span>API access</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
